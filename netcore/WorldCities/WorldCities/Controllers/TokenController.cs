using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using WorldCities.Data;

namespace WorldCities.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly ApplicationDbContext _context;

        public TokenController(IConfiguration config, ApplicationDbContext context)
        {
            _configuration = config;
            _context = context;
        }
    }
}
