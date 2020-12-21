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
    public class EditCustomerHandler : IRequestHandler<EditCustomerRequest, EditCustomerResponse>
    {
        ICustomerRepository customerRepository { get; set; }

        public EditCustomerHandler(ICustomerRepository customerRepository)
        {
            this.customerRepository = customerRepository;
        }

        public Task<EditCustomerResponse> Handle(EditCustomerRequest request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
