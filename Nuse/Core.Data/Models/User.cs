using Core.Data.Models.Bases;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Models
{
    public class User : BaseModel , IAuditable
    {
        public Int64 CustomerId { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public DateTime CreatedOn { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime ChangedOn { get; set; }
        public int? ChangedBy { get; set; }
    }
}
