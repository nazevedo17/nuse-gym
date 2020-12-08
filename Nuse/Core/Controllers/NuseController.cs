using Core.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nuse.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NuseController : ControllerBase
    {
        [HttpPost("login")]
        [AllowAnonymous]
        public IActionResult Authenticate([FromBody] User model)
        {
            try
            {
                var service = new UserService();
                var user = service.Authenticate(model.Username, model.Password);

                if (user == null)
                    return BadRequest(new { message = "Usuário ou senha inválidos" });

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        //[HttpGet("Costumers")]
        //public async Task<ActionResult<IEnumerable<Costumer>>> GetCostumers()
        //{
        //    return Context.Costumers.ToList();
        //}

        //[HttpGet("Users")]
        //public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        //{
        //    return Context.Users.ToList();
        //}

        //[HttpGet("Logins")]
        //public async Task<ActionResult<IEnumerable<Login>>> GetLogins()
        //{
        //    return Context.Logins.ToList();
        //}
    }
}
