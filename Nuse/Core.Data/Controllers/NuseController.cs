using Microsoft.AspNetCore.Mvc;
using Nuse.Core.Data.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Data.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class NuseController : ControllerBase
    {
        NuseContext Context { get; set; }

        public NuseController(NuseContext context)
        {
            Context = context;
        }

        [HttpGet("Costumers")]
        public async Task<ActionResult<IEnumerable<Models.Costumer>>> GetCostumers()
        {
            return Context.Costumers.ToList();
        }

        [HttpGet("Users")]
        public async Task<ActionResult<IEnumerable<Models.User>>> GetUsers()
        {
            return Context.Users.ToList();
        }

        [HttpGet("Logins")]
        public async Task<ActionResult<IEnumerable<Models.Login>>> GetLogins()
        {
            return Context.Logins.ToList();
        }
    }
}
