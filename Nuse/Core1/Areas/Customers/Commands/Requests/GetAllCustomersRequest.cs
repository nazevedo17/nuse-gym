using MediatR;
using Nuse.Core.Areas.Customers.Commands.Responses;

namespace Nuse.Core.Areas.Customers.Commands.Requests
{
    public class GetAllCustomersRequest : IRequest<GetAllCustomersResponse>
    {
        public string FilterName { get; set; }
    }
}
