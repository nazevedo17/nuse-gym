using Nuse.Core.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Nuse.Core.Repositories
{
    public interface IMeasurementRepository : IRepository<Measurement>
    {
        Task<Measurement> GetMeasurementById(Int64 id);

        Task<ICollection<Measurement>> GetAllMeasurementsByCustomerId(Int64 customerId);
    }
}
