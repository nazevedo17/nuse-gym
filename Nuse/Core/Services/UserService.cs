using Core.Data.Contexts;
using Core.Data.Models;
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
    public class UserService
    {
        public User Authenticate(string username, string password)
        {
            //var user = Context.Users.Where(x => x.Username == username && x.Password == password).FirstOrDefault();

            User user = null;

            if (username == "batman@gmail.com" && password == "batman")
                user = new User() { Id = 1, Username = "batman", CostumerId = 1 };

            if (user == null)
                return null;

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Settings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Username)
                }),

                Expires = DateTime.UtcNow.AddDays(7),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            user.Password = null;

            return user;
        }
    }
}
