using Core.Data.Models.Base;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Data.Models
{
    public class Customer : IAuditable
    {
        public Int64 Id { get; set; }

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

        [Phone]
        public String? PhoneNumber { get; set; }

        public String? Address { get; set; }

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

        [NotMapped]
        public String FullName => FirstName + " " + LastName;


        public virtual User User { get; set; }
    }
}
