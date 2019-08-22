using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirsoftTeamApp.Models.Event
{
    public class EventModel
    {
        public int id { get; set; }
        public string name { get; set; }
        public string coordX { get; set; }
        public string coordY { get; set; }
        public DateTime date { get; set; }
        public DateTime startTime { get; set; }
        public DateTime endTime { get; set; }
        public string place { get; set; }
    }
}
