using MediatR;
using Nuse.Core.Areas.Users.Commands.Responses;
using System;

namespace Nuse.Core.Areas.Users.Commands.Requests
{
    public class AuthenticateUserRequest : IRequest<AuthenticateUserResponse>
    {
        public String Username { get; set; }

        public String Password { get; set; }
    }
}
