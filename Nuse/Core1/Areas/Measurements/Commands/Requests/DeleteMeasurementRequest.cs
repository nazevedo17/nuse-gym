using MediatR;
using Nuse.Core.Areas.Measurements.Commands.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Measurements.Commands.Requests
{
    public class DeleteMeasurementRequest : IRequest<DeleteMeasurementResponse>
    {
        public Int64 Id { get; set; }
    }
}
