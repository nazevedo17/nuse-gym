using Microsoft.EntityFrameworkCore;
using Nuse.Core.Code;
using Nuse.Core.Models;
using Nuse.Core.Repositories.Base;
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

        public async Task<User> GetUserByUsernamePasswordAsync(String username, String password)
        {
            return await GetAll().FirstOrDefaultAsync(x => x.Username == username && x.Password == password);
        }
    }
}
