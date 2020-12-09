using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Models
{
    public class User
    {
        public Int64 Id { get; set; }
        public Int64 CustomerId { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public String Token { get; set; }
    }
}
