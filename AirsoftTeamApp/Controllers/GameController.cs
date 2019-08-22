using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Entities;
using AirsoftTeamApp.Core.Enums;
using AirsoftTeamApp.DAL;
using AirsoftTeamApp.Models.Game;
using Microsoft.AspNetCore.Mvc;

namespace AirsoftTeamApp.Controllers
{
    [Route("api/[controller]")]
    public class GameController : Controller
    {
        private readonly AirsoftTeamDBContext _airsoftTeamDbContext;

        public GameController(AirsoftTeamDBContext airsoftTeamDbContext)
        {
            _airsoftTeamDbContext = airsoftTeamDbContext;
        }

        [HttpGet("[action]")]
        public IEnumerable<GameModel> Games()
        {
            return _airsoftTeamDbContext.Events.Where(x => x.EventType == EventType.Game && x.GameId != null).Select(
                x=> new GameModel()
                {
                    id = x.Id,
                    name = x.Name,
                    coordX = x.CoordX,
                    coordY = x.CoordY,
                    date = x.Date,
                    startTime = x.StartTime,
                    endTime = x.EndTime,
                    place = x.Place,
                    link = x.Game.Link,
                    gameType = x.Game.GameType,
                    cost = x.Game.Cost,
                    organizators = x.Game.Organizators,
                    organizatorsLink = x.Game.OrganizatorsLink
                }).ToList();
        }
    }
}
