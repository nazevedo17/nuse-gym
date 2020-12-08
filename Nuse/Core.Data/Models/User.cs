using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Data.Models
{
    public class User
    {
        public Int64 Id { get; set; }
        public Int64 CostumerId { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
    }
}
