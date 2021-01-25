using Nuse.Core.Models;
using Nuse.Core.Repositories.Base;
using System;
using System.Threading.Tasks;

namespace Nuse.Core.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User> GetUserByIdAsync(Int64 id);

        Task<User> GetUserByUsernamePasswordAsync(String username, String password);
    }
}
