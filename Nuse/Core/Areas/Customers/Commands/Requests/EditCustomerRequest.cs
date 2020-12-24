using MediatR;
using Nuse.Core.Areas.Customers.Commands.Responses;
using System;

namespace Nuse.Core.Areas.Customers.Commands.Requests
{
    public class EditCustomerRequest : IRequest<EditCustomerResponse>
    {
        public Int64 Id { get; set; }

        public Boolean Active { get; set; }

        public String FirstName { get; set; }

        public String LastName { get; set; }

        public String Email { get; set; }

        public String PhoneNumber { get; set; }

        public String Address { get; set; }

        public Byte Gender { get; set; }

        public DateTimeOffset BirthDate { get; set; }
    }
}
