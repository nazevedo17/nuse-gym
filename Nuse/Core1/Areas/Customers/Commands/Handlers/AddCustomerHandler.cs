using AutoMapper;
using MediatR;
using Nuse.Core.Areas.Customers.Commands.Requests;
using Nuse.Core.Areas.Customers.Commands.Responses;
using Nuse.Core.DTOs;
using Nuse.Core.Models;
using Nuse.Core.Repositories;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Customers.Commands.Handlers
{
    public class AddCustomerHandler : IRequestHandler<AddCustomerRequest, AddCustomerResponse>
    {
        private readonly ICustomerRepository customerRepository;
        private readonly IMapper mapper;

        public AddCustomerHandler(ICustomerRepository customerRepository, IMapper mapper)
        {
            this.customerRepository = customerRepository;
            this.mapper = mapper;
        }

        public async Task<AddCustomerResponse> Handle(AddCustomerRequest request, CancellationToken cancellationToken)
        {
            var newCustomer = new Customer
            {
                Active = true,
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Address = request.Address,
                BirthDate = request.BirthDate,
                Gender = request.Gender,
                PhoneNumber = request.PhoneNumber
            };

            newCustomer = await customerRepository.AddAsync(newCustomer);

            return new AddCustomerResponse
            {
                Customer = mapper.Map<Customer, CustomerDTO>(newCustomer)
            };
        }
    }
}
