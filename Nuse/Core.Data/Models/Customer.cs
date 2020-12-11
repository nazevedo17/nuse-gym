using Core.Data.Models.Bases;
using System;

namespace Core.Data.Models
{
    public class Customer : BaseModel, IAuditable
    {
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }
        public String? PhoneNumber { get; set; }
        public String? Address { get; set; }
        public Byte Gender { get; set; }
        public DateTimeOffset BirthDate { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime ChangedOn { get; set; }
        public int? ChangedBy { get; set; }
    }
}
