using Nuse.Core.Models;
using System;
using System.Threading.Tasks;

namespace Core.Data.Repositories
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        Task<Customer> GetCustomerByIdAsync(Int64 id);
    }
}
