using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Users.Commands.Responses
{
    public class AuthenticateUserResponse
    {
        public string Token { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}
