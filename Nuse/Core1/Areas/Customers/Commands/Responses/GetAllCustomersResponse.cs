using Nuse.Core.DTOs;
using System.Collections.Generic;

namespace Nuse.Core.Areas.Customers.Commands.Responses
{
    public class GetAllCustomersResponse
    {
        public ICollection<CustomerDTO> Customers { get; set; }
    }
}
