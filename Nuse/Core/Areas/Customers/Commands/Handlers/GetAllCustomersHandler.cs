using Core.Data.Repositories;
using MediatR;
using Nuse.Core.Areas.Customers.Commands.Requests;
using Nuse.Core.Areas.Customers.Commands.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Customers.Commands.Handlers
{
    public class GetAllCustomersHandler : IRequestHandler<GetAllCustomersRequest, GetAllCustomersResponse>
    {
        private readonly ICustomerRepository customerRepository;

        public GetAllCustomersHandler(ICustomerRepository customerRepository)
        {
            this.customerRepository = customerRepository;
        }

        public Task<GetAllCustomersResponse> Handle(GetAllCustomersRequest request, CancellationToken cancellationToken)
        {
            var result = new GetAllCustomersResponse()
            {
                Customers = customerRepository.GetAll().ToList()
            };

            return Task.FromResult(result);
        }
    }
}
