using MediatR;
using Nuse.Core.Areas.Measurements.Commands.Requests;
using Nuse.Core.Areas.Measurements.Commands.Responses;
using Nuse.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Measurements.Commands.Handlers
{
    public class DeleteMeasurementHandler : IRequestHandler<DeleteMeasurementRequest, DeleteMeasurementResponse>
    {
        private readonly IMeasurementRepository measurementRepository;

        public DeleteMeasurementHandler(IMeasurementRepository measurementRepository)
        {
            this.measurementRepository = measurementRepository;
        }

        public async Task<DeleteMeasurementResponse> Handle(DeleteMeasurementRequest request, CancellationToken cancellationToken)
        {
            var measurement = await measurementRepository.GetMeasurementById(request.Id);

            if (measurement == null)
                return null;

            await measurementRepository.DeleteAsync(measurement);

            return new DeleteMeasurementResponse
            {

            };
        }
    }
}
