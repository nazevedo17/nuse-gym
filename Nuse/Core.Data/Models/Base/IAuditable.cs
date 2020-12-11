using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Data.Models.Base
{
    public interface IAuditable
    {
        DateTime CreatedOn { get; set; }
        int? CreatedBy { get; set; }
        DateTime ChangedOn { get; set; }
        int? ChangedBy { get; set; }
    }
}
