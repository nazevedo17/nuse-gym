using Microsoft.EntityFrameworkCore;
using Nuse.Core.Code.Database;
using Nuse.Core.Models;
using System;
using System.Threading.Tasks;

namespace Nuse.Core.Repositories
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
