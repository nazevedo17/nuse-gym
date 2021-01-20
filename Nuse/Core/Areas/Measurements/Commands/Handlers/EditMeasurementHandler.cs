using AutoMapper;
using MediatR;
using Nuse.Core.Areas.Measurements.Commands.Requests;
using Nuse.Core.Areas.Measurements.Commands.Responses;
using Nuse.Core.Code.Services;
using Nuse.Core.DTOs;
using Nuse.Core.Repositories;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Measurements.Commands.Handlers
{
    public class EditMeasurementHandler : IRequestHandler<EditMeasurementRequest, EditMeasurementResponse>
    {
        private readonly IMeasurementRepository measurementRepository;
        private readonly IMapper mapper;

        public EditMeasurementHandler(IMeasurementRepository measurementRepository, IMapper mapper)
        {
            this.measurementRepository = measurementRepository;
            this.mapper = mapper;
        }

        public async Task<EditMeasurementResponse> Handle(EditMeasurementRequest request, CancellationToken cancellationToken)
        {
            var measurement = await measurementRepository.GetMeasurementById(request.Id);

            if (measurement == null)
                return null;

            mapper.Map(request, measurement);

            if (!request.BMI.HasValue)
                measurement.BMI = await BmiService.CalculateBmi(request.Age.Value, request.Weight.Value, request.Height.Value);

            measurement = await measurementRepository.UpdateAsync(measurement);

            return new EditMeasurementResponse
            {
                Measurement = mapper.Map<MeasurementDTO>(measurement)
            };
        }
    }
}
