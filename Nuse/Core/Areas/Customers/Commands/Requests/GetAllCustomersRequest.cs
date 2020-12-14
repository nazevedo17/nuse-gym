using MediatR;
using Nuse.Core.Areas.Customers.Commands.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Customers.Commands.Requests
{
    public class GetAllCustomersRequest : IRequest<GetAllCustomersResponse>
    {
        public string FilterName { get; set; }
    }
}
