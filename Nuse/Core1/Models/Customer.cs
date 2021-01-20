using Nuse.Core.Models.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nuse.Core.Models
{
    public class Customer : IAuditable
    {
        public Int64 Id { get; init; }

        [Required]        
        public Boolean Active { get; set; }

        [Required]
        [StringLength(Constants.MediumLength)]
        public String FirstName { get; set; }

        [Required]
        [StringLength(Constants.MediumLength)]
        public String LastName { get; set; }

        [Required]
        [StringLength(Constants.LargeLength)]
        [EmailAddress]
        public String Email { get; set; }

        [Required]
        [Phone]
        public String PhoneNumber { get; set; }

        [Required]
        [StringLength(Constants.ExtraLength)]
        public String Address { get; set; }

        [Required]
        public Byte Gender { get; set; }

        [Required]
        public DateTimeOffset BirthDate { get; set; }

        [Required]
        public DateTimeOffset CreatedOn { get; set; }

        public Int64? CreatedBy { get; set; }

        [Required]
        public DateTimeOffset ChangedOn { get; set; }

        public Int64? ChangedBy { get; set; }


        public virtual User User { get; set; }
        public virtual ICollection<Measurement> Measurements { get; set; }
    }
}
