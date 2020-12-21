using MediatR;
using Nuse.Core.Areas.Users.Commands.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Users.Commands.Requests
{
    public class AuthenticateUserRequest : IRequest<AuthenticateUserResponse>
    {
        public string Username { get; set; }

        public string Password { get; set; }
    }
}
