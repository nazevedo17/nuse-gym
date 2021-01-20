using System;
using System.Collections.Generic;
using System.Text;

namespace Nuse.Core.Contracts
{
    public static class ApiRoutes
    {
        public const String Root = "api";

        public const String Version = "v1";

        public const String Base = Root + "/" + Version;

        public static class Customers
        {
            public const String Controller = Base + "/customers";

            public const String GetAll = Controller + "/";

            public const String AddCustomer = Controller + "/add";

            public const String EditCustomer = Controller + "/edit";
        }

        public static class Users
        {
            public const String Controller = Base + "/users";

            public const String Authenticate = Controller + "/login";
        }

        public static class Measurements
        {
            public const String Controller = Base + "/measurements";

            public const String GetAllMeasurementsByCustomer = Controller + "/customer";

            public const String AddMeasurement = Controller + "/add";

            public const String EditMeasurement = Controller + "/edit";

            public const String DeleteMeasurement = Controller + "/delete";
        }
    }
}
