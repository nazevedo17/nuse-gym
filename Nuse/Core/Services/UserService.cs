using Core.Data.Contexts;
using Core.Data.Models;
using Core.Data.Repositories;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Nuse.Core.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> Authenticate(String username, String password)
        {
            return null;
        }

        public async Task<User> GetUserByIdAsync(Int64 id)
        {
            return await _userRepository.GetUserByIdAsync(id);
        }
    }
}
