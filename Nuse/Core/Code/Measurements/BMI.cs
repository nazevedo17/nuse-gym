using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
