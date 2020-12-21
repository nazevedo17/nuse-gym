using Core.Data.Models;
using Nuse.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Customers.Commands.Responses
{
    public class GetAllCustomersResponse
    {
        public ICollection<CustomerDTO> Customers { get; set; }
    }
}
