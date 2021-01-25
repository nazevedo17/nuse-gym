using System;
using System.ComponentModel.DataAnnotations;

namespace Nuse.Core.Models
{
    public class Login
    {
        public Int64 Id { get; init; }

        [Required]
        public DateTimeOffset LoginDate { get; set; }

        [Required]
        public Boolean Success { get; set; }

        [Required]
        public Int64 UserId { get; set; }

        public virtual User User { get; set; }
    }
}
