using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Entities;
using AirsoftTeamApp.Core.Enums;
using AirsoftTeamApp.DAL;
using Microsoft.AspNetCore.Mvc;

namespace AirsoftTeamApp.Controllers
{
    [Route("api/[controller]")]
    public class EventController : Controller
    {
        private readonly AirsoftTeamDBContext _airsoftTeamDbContext;

        public EventController(AirsoftTeamDBContext airsoftTeamDbContext)
        {
            _airsoftTeamDbContext = airsoftTeamDbContext;
        }

        [HttpGet("[action]")]
        public IEnumerable<Event> Events()
        {
            return _airsoftTeamDbContext.Events.Where(x => x.EventType == EventType.Other).ToList();
        }
    }
}
