using System;
using System.ComponentModel.DataAnnotations;

namespace Nuse.Core.Models
{
    public class Measurement
    {
        public Int64 Id { get; init; }

        [Required]
        public Int64 CustomerId { get; init; }

        [Required]
        public DateTimeOffset MeasurementDate { get; set; }

        public Double? BMI { get; set; }

        public Double? Height { get; set; }

        public Double? Weight { get; set; }

        public Double? Age { get; set; }

        public Byte? Gender { get; set; }

        public Double? RightForearm { get; set; }

        public Double? LeftForearm { get; set; }

        public Double? RightUpperArm { get; set; }

        public Double? LeftUpperArm { get; set; }

        public Double? Chest { get; set; }

        public Double? Bust { get; set; }

        public Double? Midriff { get; set; }

        public Double? Waist { get; set; }

        public Double? Abdomen { get; set; }

        public Double? Hips { get; set; }

        public Double? Buttocks { get; set; }

        public Double? RightUpperThigh { get; set; }

        public Double? LeftUpperThigh { get; set; }

        public Double? RightMidThigh { get; set; }

        public Double? LeftMidThigh { get; set; }

        public Double? RightLowerThigh { get; set; }

        public Double? LeftLowerThigh { get; set; }

        public Double? RightKnee { get; set; }

        public Double? LeftKnee { get; set; }

        public Double? RightCalf { get; set; }

        public Double? LeftCalf { get; set; }

        public Double? RightAnkle { get; set; }

        public Double? LeftAnkle { get; set; }

        public virtual Customer Customer { get; set; }
    }
}
