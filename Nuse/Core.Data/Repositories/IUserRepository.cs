using Core.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Repositories
{
    public interface IUserRepository :IRepository<User>
    {
        Task<User> GetUserByIdAsync(Int64 id);

        Task<User> GetUserByUsernamePasswordAsync(String username, String password);
    }
}
