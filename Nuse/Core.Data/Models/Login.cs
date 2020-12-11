using Core.Data.Models.Bases;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Models
{
    public class Login : BaseModel
    {
        public Int64 UserId { get; set; }
        public Int64 LoginDate { get; set; }
        public Boolean Success { get; set; }
    }
}
