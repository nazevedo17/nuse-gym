using MediatR;
using Nuse.Core.Areas.Measurements.Commands.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Measurements.Commands.Requests
{
    public class GetAllMeasurementsByCustomerRequest :IRequest<GetAllMeasurementsByCustomerResponse>
    {
        public Int64 CustomerId { get; set; }
    }
}
