using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Nuse.Core.Code.Services
{
    public static class TokenService
    {
        private const Int16 _experitation = 168;

        public static String GenerateUserToken(Int64 customerId, String email, String username)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Settings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(Auth.ClaimTypes.CustomerId, customerId.ToString(), ClaimValueTypes.Integer64),
                    new Claim(Auth.ClaimTypes.Username, username),
                    new Claim(Auth.ClaimTypes.Email, email),
                    new Claim(Auth.ClaimTypes.Expiration, TimeSpan.FromHours(_experitation).TotalSeconds.ToString(), ClaimValueTypes.Integer64)
                }),

                Expires = DateTime.UtcNow.AddHours(_experitation),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public static String GenerateCustomerToken(Int64 customerId, String email)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Settings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(Auth.ClaimTypes.CustomerId, customerId.ToString(), ClaimValueTypes.Integer64),
                    new Claim(Auth.ClaimTypes.Email, email),
                    new Claim(Auth.ClaimTypes.Expiration, TimeSpan.FromHours(_experitation).TotalSeconds.ToString(), ClaimValueTypes.Integer64)
                }),

                Expires = DateTime.UtcNow.AddHours(_experitation),

                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
