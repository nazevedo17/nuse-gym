using System;
using System.Collections.Generic;
using System.Text;

namespace Nuse.Core.Contracts
{
    public static class ApiRoutes
    {
        public const string Root = "api";

        public const string Version = "v1";

        public const string Base = Root + "/" + Version;

        public static class Customers
        {
            public const string Controller = Base + "/customers";

            public const string GetAll = Controller + "/";

            public const string EditCustomer = Controller + "/edit";
        }

        public static class Users
        {
            public const string Controller = Base + "/users";

            public const string Authenticate = Controller + "/login";
        }
    }
}
