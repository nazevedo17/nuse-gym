using Nuse.Core.Models.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Nuse.Core.Models
{
    public class User : IAuditable
    {
        public Int64 Id { get; init; }

        [Required]
        public Boolean Active { get; set; }

        [Required]
        [StringLength(Constants.TinyLength, MinimumLength = Constants.MinimumLength)]
        public String Username { get; set; }

        [Required]
        [StringLength(Constants.SmallLength)]
        public String Password { get; set; }

        [Required]
        public DateTimeOffset CreatedOn { get; set; }

        public Int64? CreatedBy { get; set; }

        [Required]
        public DateTimeOffset ChangedOn { get; set; }

        public Int64? ChangedBy { get; set; }

        [Required]
        public Int64 CustomerId { get; set; }


        public virtual Customer Customer { get; set; }
        public virtual IList<Login> Logins { get; set; }
    }
}
