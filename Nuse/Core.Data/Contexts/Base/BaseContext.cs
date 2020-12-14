using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Data.Contexts.Base
{
    public class BaseContext : DbContext
    {
        public BaseContext() { }

        public BaseContext(DbContextOptions options) : base(options) { }
    }
}
