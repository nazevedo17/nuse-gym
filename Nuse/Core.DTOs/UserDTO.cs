using System;
using System.Collections.Generic;
using System.Text;

namespace Nuse.Core.DTOs
{
    public class UserDTO
    {
        public Int64 Id { get; set; }

        public Boolean Active { get; set; }

        public String Username { get; set; }

        public DateTimeOffset CreatedOn { get; set; }

        public Int64? CreatedBy { get; set; }

        public DateTimeOffset ChangedOn { get; set; }

        public Int64? ChangedBy { get; set; }

        public Int64 CustomerId { get; set; }
    }
}
