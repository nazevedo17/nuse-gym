using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Data.Contexts
{
    public class NuseContext : DbContext
    {
        public NuseContext(DbContextOptions<NuseContext> options)
              : base(options)
        {
        }

        public DbSet<Models.Costumer> Costumers { get; set; }
        public DbSet<Models.User> Users { get; set; }
        public DbSet<Models.Login> Logins { get; set; }
    }
}
