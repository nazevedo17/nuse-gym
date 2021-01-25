using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Nuse.Core.Code.Controllers
{
    [ApiController]
    public abstract class BaseController : ControllerBase
    {
        protected IMediator Mediator { get; }

        protected BaseController(IMediator mediator)
        {
            Mediator = mediator;
        }
    }
}
