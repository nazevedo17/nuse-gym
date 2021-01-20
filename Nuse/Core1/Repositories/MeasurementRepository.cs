using Microsoft.EntityFrameworkCore;
using Nuse.Core.Code.Database;
using Nuse.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Repositories
{
    public class MeasurementRepository : Repository<Measurement>, IMeasurementRepository
    {
        public MeasurementRepository(NuseContext context) : base(context)
        {
        }

        public async Task<Measurement> GetMeasurementById(long id)
        {
            return await GetAll().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<ICollection<Measurement>> GetAllMeasurementsByCustomerId(long customerId)
        {
            return await GetAll().Where(x => x.CustomerId == customerId).ToListAsync();
        }
    }
}
