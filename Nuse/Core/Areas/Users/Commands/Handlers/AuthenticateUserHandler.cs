using Core.Data.Repositories;
using MediatR;
using Microsoft.IdentityModel.Tokens;
using Nuse.Core.Areas.Users.Commands.Requests;
using Nuse.Core.Areas.Users.Commands.Responses;
using Nuse.Core.Services;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Users.Commands.Handlers
{
    public class AuthenticateUserHandler : IRequestHandler<AuthenticateUserRequest, AuthenticateUserResponse>
    {
        private readonly IUserRepository userRepository;
        private readonly ICustomerRepository customerRepository;

        public AuthenticateUserHandler(IUserRepository userRepository, ICustomerRepository customerRepository)
        {
            this.userRepository = userRepository;
            this.customerRepository = customerRepository;
        }

        public async Task<AuthenticateUserResponse> Handle(AuthenticateUserRequest request, CancellationToken cancellationToken)
        {
             var user = userRepository.GetUserByUsernamePasswordAsync(request.Username, request.Password).Result;

            if (user == null)
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Settings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Username),                    
                }),

                Expires = DateTime.UtcNow.AddHours(12),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            var customer = customerRepository.GetCustomerByIdAsync(user.CustomerId).Result;

            return new AuthenticateUserResponse()
            {
                Token = tokenHandler.WriteToken(token),
                FirstName = customer.FirstName,
                LastName = customer.LastName
            };
        }
    }
}
