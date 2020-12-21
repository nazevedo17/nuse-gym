using Core.Data.Models.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Data.Models
{
    public class Login
    {
        public Int64 Id { get; set; }

        [Required]
        public DateTimeOffset LoginDate { get; set; }

        [Required]
        public Boolean Success { get; set; }

        [Required]
        public Int64 UserId { get; set; }

        public virtual User User { get; set; }
    }
}