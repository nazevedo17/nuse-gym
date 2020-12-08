using Core.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Contexts
{
    public class NuseContext : DbContext
    {
        public NuseContext(DbContextOptions<NuseContext> options)
              : base(options)
        {
        }

        public DbSet<Costumer> Costumers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }
    }
}
