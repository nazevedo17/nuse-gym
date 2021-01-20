using System;

namespace Nuse.Core.DTOs
{
    public class CustomerDTO
    {
        public Int64 Id { get; init; }

        public Boolean Active { get; set; }

        public String FirstName { get; set; }

        public String LastName { get; set; }

        public String Email { get; set; }

        public String PhoneNumber { get; set; }

        public String Address { get; set; }

        public Byte Gender { get; set; }

        public DateTimeOffset BirthDate { get; set; }

        public DateTimeOffset CreatedOn { get; set; }

        public Int64? CreatedBy { get; set; }

        public DateTimeOffset ChangedOn { get; set; }

        public Int64? ChangedBy { get; set; }
    }
}
