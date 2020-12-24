using System;
using System.Collections.Generic;
using System.Text;

namespace Nuse.Core.Models.Base
{
    public interface IAuditable
    {
        DateTimeOffset CreatedOn { get; set; }
        Int64? CreatedBy { get; set; }
        DateTimeOffset ChangedOn { get; set; }
        Int64? ChangedBy { get; set; }
    }
}
