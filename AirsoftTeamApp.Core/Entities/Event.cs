using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Enums;

namespace AirsoftTeamApp.Core.Entities
{
    public class Event : Identifiable
    {
        public string Name { get; set; }
        public string CoordX { get; set; }
        public string CoordY { get; set; }
        public DateTime Date { get; set; }
        public EventType EventType { get; set; }
    }
}
