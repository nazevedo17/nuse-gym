using Core.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Repositories
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        Task<Customer> GetCustomerByIdAsync(Int64 id);
    }
}
