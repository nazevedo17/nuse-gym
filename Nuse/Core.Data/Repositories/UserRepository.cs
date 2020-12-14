using Core.Data.Contexts;
using Core.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(NuseContext context) : base(context)
        {            
        }

        public async Task<User> GetUserByIdAsync(Int64 id)
        {
            return await GetAll().FirstOrDefaultAsync(x => x.Id == id);            
        }

        public async Task<User> GetUserByUsernamePasswordAsync(string username, string password)
        {
            return await GetAll().FirstOrDefaultAsync(x => x.Username == username && x.Password == password);
        }
    }
}
