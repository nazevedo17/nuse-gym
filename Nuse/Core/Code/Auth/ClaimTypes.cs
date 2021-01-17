using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nuse.Core.Code.Auth
{
    public static class ClaimTypes
    {        
        public const String CustomerId = "http://schemas.nuse.org/ws/2009/09/identity/claims/customerid";
        public const String Email = "http://schemas.nuse.org/ws/2009/09/identity/claims/email";
        public const String Username = "http://schemas.nuse.org/ws/2009/09/identity/claims/username";
        public const String Expiration = "http://schemas.nuse.org/ws/2009/09/identity/claims/expiration";
    }
}
