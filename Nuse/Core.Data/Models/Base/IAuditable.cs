using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Models.Base
{
    public interface IAuditable
    {
        DateTimeOffset CreatedOn { get; set; }
        long? CreatedBy { get; set; }
        DateTimeOffset ChangedOn { get; set; }
        long? ChangedBy { get; set; }
    }
}
