using AutoMapper;
using MediatR;
using Nuse.Core.Areas.Measurements.Commands.Requests;
using Nuse.Core.Areas.Measurements.Commands.Responses;
using Nuse.Core.DTOs;
using Nuse.Core.Repositories;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Measurements.Commands.Handlers
{
    public class GetAllMeasurementsByCustomerHandler : IRequestHandler<GetAllMeasurementsByCustomerRequest, GetAllMeasurementsByCustomerResponse>
    {
        private readonly IMeasurementRepository measurementRepository;
        private readonly IMapper mapper;

        public GetAllMeasurementsByCustomerHandler(IMeasurementRepository measurementRepository, IMapper mapper)
        {
            this.measurementRepository = measurementRepository;
            this.mapper = mapper;
        }

        public async Task<GetAllMeasurementsByCustomerResponse> Handle(GetAllMeasurementsByCustomerRequest request, CancellationToken cancellationToken)
        {
            return new GetAllMeasurementsByCustomerResponse
            {
                Measurements = mapper.Map<ICollection<MeasurementDTO>>(await measurementRepository.GetAllMeasurementsByCustomerId(request.CustomerId))
            };
        }
    }
}
