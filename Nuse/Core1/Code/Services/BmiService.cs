using Newtonsoft.Json;
using Nuse.Core.Code.Measurements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;

namespace Nuse.Core.Code.Services
{
    public static class BmiService
    {
        public async static Task<Double> CalculateBmi(Double Age, Double Weight, Double Height)
        {
            try
            {
                var query = HttpUtility.ParseQueryString(String.Empty);

                query["age"] = Age.ToString();
                query["weight"] = Weight.ToString();
                query["height"] = Height.ToString();

                using (var httpClient = new HttpClient())
                {
                    var builder = new UriBuilder();

                    using (var request = new HttpRequestMessage
                    {
                        Method = HttpMethod.Get,
                        RequestUri = new UriBuilder("https://fitness-calculator.p.rapidapi.com/bmi") { Query = query.ToString() }.Uri,
                        Headers =
                    {
                        { "x-rapidapi-key", "6f5ed6e837msh89effe1fe1fd525p18360bjsn80fec818cf48" },
                        { "x-rapidapi-host", "fitness-calculator.p.rapidapi.com" },
                    }
                    })
                    {
                        using (var response = await httpClient.SendAsync(request))
                        {
                            response.EnsureSuccessStatusCode();
                            var result = JsonConvert.DeserializeObject<BMI>(await response.Content.ReadAsStringAsync());
                            return result.Bmi;

                        }
                    }
                }
            }
            catch
            {
                return Weight / Math.Pow(Height / 100.0, 2);
            }
        }
    }
}
