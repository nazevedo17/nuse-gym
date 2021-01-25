using Nuse.Core.DTOs;
using System.Collections.Generic;

namespace Nuse.Core.Areas.Measurements.Commands.Responses
{
    public class GetAllMeasurementsByCustomerResponse
    {
        public ICollection<MeasurementDTO> Measurements { get; set; }
    }
}
