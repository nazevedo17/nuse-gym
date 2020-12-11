using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Contexts.Base
{
    public class BaseContext : DbContext
    {
        public BaseContext() { }

        public BaseContext(DbContextOptions<BaseContext> options) : base(options) { }

        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            var currentUser = ServiceLocator.Resolve<ICurrentUser>();

            foreach (var entry in ChangeTracker.Entries<IAuditable>())
            {
                switch (entry.State)
                {
                    case EntityState.Added:
                        entry.Entity.CreatedBy = entry.Entity.ChangedBy = currentUser.Id;
                        entry.Entity.CreatedOn = entry.Entity.ChangedOn = DateTime.UtcNow;
                        break;
                    case EntityState.Modified:
                        entry.Entity.ChangedBy = currentUser.Id;
                        entry.Entity.ChangedOn = DateTime.UtcNow;
                        break;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
