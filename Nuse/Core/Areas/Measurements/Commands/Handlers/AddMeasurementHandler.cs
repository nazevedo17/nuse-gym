using AutoMapper;
using MediatR;
using Nuse.Core.Areas.Measurements.Commands.Requests;
using Nuse.Core.Areas.Measurements.Commands.Responses;
using Nuse.Core.DTOs;
using Nuse.Core.Models;
using Nuse.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Measurements.Commands.Handlers
{
    public class AddMeasurementHandler : IRequestHandler<AddMeasurementRequest, AddMeasurementResponse>
    {
        private readonly IMeasurementRepository measurementRepository;
        private readonly IMapper mapper;

        public AddMeasurementHandler(IMeasurementRepository measurementRepository, IMapper mapper)
        {
            this.measurementRepository = measurementRepository;
            this.mapper = mapper;
        }

        public async Task<AddMeasurementResponse> Handle(AddMeasurementRequest request, CancellationToken cancellationToken)
        {
            return new AddMeasurementResponse
            {
                Measurement = mapper.Map<MeasurementDTO>(await measurementRepository.AddAsync(mapper.Map<Measurement>(request)))
            };
        }
    }
}
