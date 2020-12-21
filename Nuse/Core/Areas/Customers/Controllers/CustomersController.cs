using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nuse.Core.Areas.Customers.Commands.Requests;
using Nuse.Core.Code.Controllers;
using Nuse.Core.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Customers.Controllers
{
    public class CustomersController : BaseController
    {
        public CustomersController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet(ApiRoutes.Customers.GetAll)]
        [Authorize]
        public IActionResult GetAllCustomers([FromBody] GetAllCustomersRequest request)
        {
            var result = Mediator.Send(request).Result;

            if (result != null)
                return Ok(result);

            return BadRequest();
        }

        [HttpPost(ApiRoutes.Customers.AddCustomer)]
        [Authorize]
        public IActionResult AddCustomer([FromBody] AddCustomerRequest request)
        {
            var result =  Mediator.Send(request).Result;

            if (result != null)
                return Created(new Uri(ApiRoutes.Customers.AddCustomer, UriKind.Relative),result);

            return BadRequest();
        }

        [HttpPut(ApiRoutes.Customers.EditCustomer)]
        [Authorize]
        public IActionResult EditCustomer([FromBody] GetAllCustomersRequest request)
        {
            var result = Mediator.Send(request).Result;

            if (result != null)
                return Ok(result);

            return BadRequest();
        }
    }
}
