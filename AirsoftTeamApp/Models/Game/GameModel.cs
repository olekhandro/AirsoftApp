using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Enums;

namespace AirsoftTeamApp.Models.Game
{
    public class GameModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string coordX { get; set; }
        public string coordY { get; set; }
        public DateTime date { get; set; }
        public DateTime startTime { get; set; }
        public DateTime endTime { get; set; }
        public string place { get; set; }
        public string link { get; set; }
        public GameType gameType { get; set; }
        public double cost { get; set; }
        public string organizators { get; set; }
        public string organizatorsLink { get; set; }
    }
}
