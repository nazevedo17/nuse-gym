using AutoMapper;
using Core.Data.Models;
using Nuse.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
