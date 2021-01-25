using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nuse.Core.Areas.Measurements.Commands.Requests;
using Nuse.Core.Code.Controllers;
using Nuse.Core.Contracts;
using System;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Measurements.Controllers
{
    public class MeasurementsController : BaseController
    {
        public MeasurementsController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet(ApiRoutes.Measurements.GetAllMeasurementsByCustomer)]
        [Authorize]
        public async Task<IActionResult> GetAllCustomers([FromQuery] GetAllMeasurementsByCustomerRequest request)
        {
            var result = await Mediator.Send(request);

            if (result != null)
                return Ok(result);

            return BadRequest();
        }

        [HttpPost(ApiRoutes.Measurements.AddMeasurement)]
        [Authorize]
        public async Task<IActionResult> AddMeasurement([FromBody] AddMeasurementRequest request)
        {
            var result = await Mediator.Send(request);

            if (result != null)
                return Created(new Uri(ApiRoutes.Customers.AddCustomer, UriKind.Relative), result);

            return BadRequest();
        }

        [HttpPut(ApiRoutes.Measurements.EditMeasurement)]
        [Authorize]
        public async Task<IActionResult> EditMeasurement([FromBody] EditMeasurementRequest request)
        {
            var result = await Mediator.Send(request);

            if (result != null)
                return Ok(result);

            return BadRequest();
        }

        [HttpDelete(ApiRoutes.Measurements.DeleteMeasurement)]
        [Authorize]
        public async Task<IActionResult> DeleteMeasurement([FromBody] DeleteMeasurementRequest request)
        {
            var result = await Mediator.Send(request);

            if (result != null)
                return Ok();

            return BadRequest();
        }
    }
}
