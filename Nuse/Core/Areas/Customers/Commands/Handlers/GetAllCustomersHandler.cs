﻿using AutoMapper;
using Core.Data.Repositories;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Nuse.Core.Areas.Customers.Commands.Requests;
using Nuse.Core.Areas.Customers.Commands.Responses;
using Nuse.Core.DTOs;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Customers.Commands.Handlers
{
    public class GetAllCustomersHandler : IRequestHandler<GetAllCustomersRequest, GetAllCustomersResponse>
    {
        private readonly ICustomerRepository customerRepository;
        private readonly IMapper mapper;

        public GetAllCustomersHandler(ICustomerRepository customerRepository, IMapper mapper)
        {
            this.customerRepository = customerRepository;
            this.mapper = mapper;
        }

        public async Task<GetAllCustomersResponse> Handle(GetAllCustomersRequest request, CancellationToken cancellationToken)
        {
            return new GetAllCustomersResponse()
            {
                Customers =  mapper.Map<ICollection<CustomerDTO>>(await customerRepository.GetAll().Where(x => (x.FirstName + " " + x.LastName).Contains(request.FilterName)).ToListAsync())
            };
        }
    }
}
