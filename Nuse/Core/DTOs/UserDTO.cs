using System;

namespace Nuse.Core.DTOs
{
    public class UserDTO
    {
        public Int64 Id { get; init; }

        public Boolean Active { get; set; }

        public String Username { get; init; }

        public DateTimeOffset CreatedOn { get; set; }

        public Int64? CreatedBy { get; set; }

        public DateTimeOffset ChangedOn { get; set; }

        public Int64? ChangedBy { get; set; }

        public Int64 CustomerId { get; set; }
    }
}
