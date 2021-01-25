using System;

namespace Nuse.Core.Code.Extensions
{
    public static class Extensions
    {
        public static Boolean? ToBoolean(this object obj, Boolean? defaultId = null)
        {
            if (obj == null)
                return defaultId;

            if (Boolean.TryParse(obj.ToString(), out Boolean value))
                return value;

            return default;
        }

        public static Int64? ToInt64(this object obj, Int64? defaultId = null)
        {
            if (obj == null)
                return defaultId;

            if (Int64.TryParse(obj.ToString(), out Int64 value))
                return value;

            return default;
        }
    }
}
