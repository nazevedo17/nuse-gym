using Nuse.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Areas.Measurements.Commands.Responses
{
    public class GetAllMeasurementsByCustomerResponse
    {
        public ICollection<MeasurementDTO> Measurements { get; set; }
    }
}
