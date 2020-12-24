using AutoMapper;
using Core.Data.Repositories;
using MediatR;
using Nuse.Core.Areas.Customers.Commands.Requests;
using Nuse.Core.Areas.Customers.Commands.Responses;
using Nuse.Core.DTOs;
using Nuse.Core.Models;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Customers.Commands.Handlers
{
    public class EditCustomerHandler : IRequestHandler<EditCustomerRequest, EditCustomerResponse>
    {
        private readonly ICustomerRepository customerRepository;
        private readonly IMapper mapper;

        public EditCustomerHandler(ICustomerRepository customerRepository, IMapper mapper)
        {
            this.customerRepository = customerRepository;
            this.mapper = mapper;
        }

        public async Task<EditCustomerResponse> Handle(EditCustomerRequest request, CancellationToken cancellationToken)
        {
            var customer = customerRepository.GetCustomerByIdAsync(request.Id).Result;

            customer.Active = request.Active;
            customer.FirstName = request.FirstName;
            customer.LastName = request.LastName;
            customer.Email = request.Email;
            customer.PhoneNumber = request.PhoneNumber;
            customer.Address = request.Address;
            customer.Gender = request.Gender;
            customer.BirthDate = request.BirthDate;

            customer = await customerRepository.UpdateAsync(customer);

            return new EditCustomerResponse()
            {
                Customer = mapper.Map<Customer, CustomerDTO>(customer)
            };
        }
    }
}
