using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Entities;
using AirsoftTeamApp.Core.ServiceInterfaces;
using AirsoftTeamApp.DAL;
using AirsoftTeamApp.DAL.Services;
using Microsoft.AspNetCore.Mvc;

namespace AirsoftTeamApp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly AirsoftTeamDBContext _airsoftTeamDbContext;

        public UserController(AirsoftTeamDBContext airsoftTeamDbContext)
        {
            _airsoftTeamDbContext = airsoftTeamDbContext;
        }


        [HttpGet("[action]")]
        public IEnumerable<User> Users()
        {
            return _airsoftTeamDbContext.Users.ToList();
        }


    }
}
