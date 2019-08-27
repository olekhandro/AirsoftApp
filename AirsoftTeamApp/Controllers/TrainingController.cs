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
    public class TrainingController : Controller
    {
        private readonly AirsoftTeamDBContext _airsoftTeamDbContext;

        public TrainingController(AirsoftTeamDBContext airsoftTeamDbContext)
        {
            _airsoftTeamDbContext = airsoftTeamDbContext;
        }

        [HttpGet("[action]")]
        public IEnumerable<Event> Trainings()
        {
            return _airsoftTeamDbContext.Events.Where(x=>x.EventType == EventType.Training).ToList();
        }
    }
}
