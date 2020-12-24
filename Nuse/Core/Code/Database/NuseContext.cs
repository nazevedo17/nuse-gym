using Microsoft.EntityFrameworkCore;
using Nuse.Core.Code.Database.Base;
using Nuse.Core.Models;
using System;

namespace Nuse.Core.Code.Database
{
    public class NuseContext : BaseContext
    {
        public NuseContext() : base() { }

        public NuseContext(DbContextOptions options) : base(options) { }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Login> Logins { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasIndex(x => x.Email).IsUnique();

            modelBuilder.Entity<User>().HasIndex(x => x.Username).IsUnique();

            modelBuilder.Seed();
        }
    }

    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(
                new Customer
                {
                    Id = 1,
                    FirstName = "Sérgio Miguel",
                    LastName = "Machado Oliveira",
                    Email = "a18478@alunos.ipca.pt",
                    Gender = 1,
                    BirthDate = new DateTimeOffset(1999, 2, 7, 0, 0, 0, TimeSpan.FromSeconds(0)),
                    CreatedOn = DateTimeOffset.Now,
                    ChangedOn = DateTimeOffset.Now
                }
            );

            modelBuilder.Entity<User>().HasData(
                new User() { Id = 1, Username = "smo", Password = "9999", CustomerId = 1, CreatedOn = DateTimeOffset.Now, ChangedOn = DateTimeOffset.Now }
            );
        }
    }
}