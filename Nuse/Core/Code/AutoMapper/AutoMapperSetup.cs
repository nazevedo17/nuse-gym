using AutoMapper;
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

            #endregion

            #region DTO To Model

            CreateMap<CustomerDTO, Customer>();

            #endregion
        }
    }
}
