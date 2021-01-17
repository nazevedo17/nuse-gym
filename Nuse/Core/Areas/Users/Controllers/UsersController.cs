using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nuse.Core.Areas.Users.Commands.Requests;
using Nuse.Core.Code.Controllers;
using Nuse.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Users.Controllers
{
    public class UsersController : BaseController
    {
        public UsersController(IMediator mediator) : base(mediator)
        {
        }

        [HttpPost(ApiRoutes.Users.Authenticate)]
        [AllowAnonymous]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateUserRequest request)
        {
            var result = await Mediator.Send(request);

            if (result != null)
                return Ok(result);

            return Unauthorized();
        }
    }
}
