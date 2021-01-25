using MediatR;
using Nuse.Core.Areas.Measurements.Commands.Responses;
using System;

namespace Nuse.Core.Areas.Measurements.Commands.Requests
{
    public class GetAllMeasurementsByCustomerRequest : IRequest<GetAllMeasurementsByCustomerResponse>
    {
        public Int64 CustomerId { get; set; }
    }
}
