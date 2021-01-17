using AutoMapper;
using Nuse.Core.Areas.Measurements.Commands.Requests;
using Nuse.Core.DTOs;
using Nuse.Core.Models;

namespace Nuse.Core.Code.AutoMapper
{
    public class AutoMapperSetup : Profile
    {
        public AutoMapperSetup()
        {
            #region Model To DTO

            CreateMap<Customer, CustomerDTO>();

            CreateMap<Measurement, MeasurementDTO>();

            #endregion

            #region DTO To Model

            CreateMap<CustomerDTO, Customer>();

            CreateMap<CustomerDTO, Customer>();

            #endregion

            #region Request TO Model

            CreateMap<AddMeasurementRequest, Measurement>();

            CreateMap<EditMeasurementRequest, Measurement>();

            #endregion
        }
    }
}
