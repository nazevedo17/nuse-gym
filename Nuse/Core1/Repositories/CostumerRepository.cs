using Microsoft.EntityFrameworkCore;
using Nuse.Core.Code.Database;
using Nuse.Core.Models;
using System;
using System.Threading.Tasks;

namespace Nuse.Core.Repositories
{
    public class CustomerRepository : Repository<Customer>, ICustomerRepository
    {
        public CustomerRepository(NuseContext context) : base(context)
        {
        }

        public async Task<Customer> GetCustomerByIdAsync(Int64 id)
        {
            return await GetAll().FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
