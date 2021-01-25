using Newtonsoft.Json;
using System;

namespace Nuse.Core.Code.Measurements
{
    public class BMI
    {
        public Double Bmi { get; set; }

        public String Health { get; set; }

        [JsonProperty("Healthy_Bmi_Range")]
        public String HealthyBmiRange { get; set; }
    }
}
