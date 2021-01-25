using Microsoft.EntityFrameworkCore;
using Nuse.Core.Code;
using Nuse.Core.Models;
using Nuse.Core.Repositories.Base;
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

        public async Task<Measurement> GetMeasurementById(Int64 id)
        {
            return await GetAll().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<ICollection<Measurement>> GetAllMeasurementsByCustomerId(Int64 customerId)
        {
            return await GetAll().Where(x => x.CustomerId == customerId).ToListAsync();
        }
    }
}
