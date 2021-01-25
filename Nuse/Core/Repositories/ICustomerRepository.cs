using Nuse.Core.Models;
using Nuse.Core.Repositories.Base;
using System;
using System.Threading.Tasks;

namespace Nuse.Core.Repositories
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        Task<Customer> GetCustomerByIdAsync(Int64 id);
    }
}
