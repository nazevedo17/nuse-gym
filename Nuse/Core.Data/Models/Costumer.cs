using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Models
{
    public class Costumer
    {
        public Int64 Id { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }
        public String? PhoneNumber { get; set; }
        public String? Address { get; set; }
        public Byte Gender { get; set; }
        public DateTimeOffset BirthDate { get; set; }
    }
}
