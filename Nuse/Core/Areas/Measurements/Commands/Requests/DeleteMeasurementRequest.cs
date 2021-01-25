using MediatR;
using Nuse.Core.Areas.Measurements.Commands.Responses;
using System;

namespace Nuse.Core.Areas.Measurements.Commands.Requests
{
    public class DeleteMeasurementRequest : IRequest<DeleteMeasurementResponse>
    {
        public Int64 Id { get; set; }
    }
}
