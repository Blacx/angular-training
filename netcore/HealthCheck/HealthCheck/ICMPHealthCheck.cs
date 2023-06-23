using Microsoft.Extensions.Diagnostics.HealthChecks;
using System;
using System.Net.NetworkInformation;
using System.Threading;
using System.Threading.Tasks;

namespace HealthCheck
{
    public class ICMPHealthCheck : IHealthCheck
    {

        private string _host = "localhost";
        private int _healtyRoundTrip = 300;

        public ICMPHealthCheck(string host, int roundtrip)
        {
            _host = host;
            _healtyRoundTrip = roundtrip;
        }

        public async Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            try
            {
                using var ping = new Ping();
                var reply = await ping.SendPingAsync(_host);
                switch(reply.Status) {
                    case IPStatus.Success:
                        var message = $"ICMP to {_host} took {reply.RoundtripTime} ms.";
                        bool isHealthy = reply.RoundtripTime > _healtyRoundTrip;
                        return isHealthy ? 
                            HealthCheckResult.Healthy(message) : 
                            HealthCheckResult.Degraded(message);
                    default:
                        var error = $"ICMP to {_host} took {reply.RoundtripTime} ms.";
                        return HealthCheckResult.Unhealthy(error);
                }

            } catch (Exception e)
            {
                var error = $"ICMP to {_host} failed: {e.Message}";
                return HealthCheckResult.Unhealthy(error);
            }
        }
    }
}
