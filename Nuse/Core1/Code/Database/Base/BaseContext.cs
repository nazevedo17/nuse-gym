using Microsoft.EntityFrameworkCore;
using Nuse.Core.Code.Auth;
using Nuse.Core.Code.Services;
using Nuse.Core.Models.Base;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Nuse.Core.Code.Database.Base
{
    public class BaseContext : DbContext
    {
        public BaseContext() { }

        public BaseContext(DbContextOptions options) : base(options) { }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            var currentUser = ServiceLocator.Resolve<ICurrentUser>();

            foreach (var entry in ChangeTracker.Entries<IAuditable>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.CreatedBy = entry.Entity.ChangedBy = currentUser.CustomerId;
                        entry.Entity.CreatedOn = entry.Entity.ChangedOn = DateTime.UtcNow;
                        break;

                    case EntityState.Modified:
                        entry.Entity.ChangedBy = currentUser.CustomerId;
                        entry.Entity.ChangedOn = DateTime.UtcNow;
                        break;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
