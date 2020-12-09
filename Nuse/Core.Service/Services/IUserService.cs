using Core.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Nuse.Core.Service.Services
{
    public interface IUserService
    {
        Task<User> GetUserByIdAsync(Int64 id);

        Task<User> Authenticate(String username, String password);
    }
}
