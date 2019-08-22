using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Enums;

namespace AirsoftTeamApp.Core.Entities
{
    public class Game : Identifiable
    {
        public string Link { get; set; }
        public GameType GameType { get; set; }
        public double Cost { get; set; }
        public string Organizators { get; set; }
        public string OrganizatorsLink { get; set; }
        public int EventId { get; set; }
        [ForeignKey("EventId")]
        public virtual Event Event { get; set; }
    }
}
