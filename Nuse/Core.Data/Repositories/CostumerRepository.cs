using Core.Data.Contexts;
using Core.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Repositories
{
    public class CostumerRepository : Repository<Costumer>, ICostumerRepository
    {
        public CostumerRepository(NuseContext context) : base(context)
        {
        }
    }
}
