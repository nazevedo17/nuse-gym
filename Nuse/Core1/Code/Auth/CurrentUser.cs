using Microsoft.AspNetCore.Http;
using System;
using System.Linq;

namespace Nuse.Core.Code.Auth
{
    #region Interface

    public interface ICurrentUser
    {
        Boolean IsUser { get; }

        Int64? CustomerId { get; }
        String Email { get; }
        String? Username { get; }
        String Expiration { get; }
    }

    #endregion

    public class CurrentUser : ICurrentUser
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CurrentUser(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public Boolean IsUser { get { return GetClaim(ClaimTypes.Username).ToBoolean(false).Value; } }

        public Int64? CustomerId { get { return GetClaim(ClaimTypes.CustomerId).ToInt64(); } }
        public String Email { get { return GetClaim(ClaimTypes.Email); } }
        public String? Username { get { return GetClaim(ClaimTypes.Username); } }
        public String Expiration { get { return GetClaim(ClaimTypes.Expiration); } }

        private String GetClaim(string name)
        {
            var claims = _httpContextAccessor.HttpContext.User.Claims.Where(c => c.Type == name);
            if (claims != null && claims.Any())
                return claims.First().Value;

            return null;
        }
    }
}
