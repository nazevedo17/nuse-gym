using Core.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Services
{
    public interface IUserService
    {
        Task<User> GetUserByIdAsync(Int64 id);

        Task<User> Authenticate(String username, String password);
    }
}
