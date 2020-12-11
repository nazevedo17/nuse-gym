using Core.Data.Contexts.Base;
using Core.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Contexts
{
    public class NuseContext : BaseContext
    {
        public NuseContext() { }

        public NuseContext(DbContextOptions<NuseContext> options) : base(options) { }


        public DbSet<Customer> Customers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }
    }
}
