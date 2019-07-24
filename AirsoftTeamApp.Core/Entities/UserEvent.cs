using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AirsoftTeamApp.Core.Entities
{
    public class UserEvent : Identifiable
    {
        public bool IsVisited { get; set; }
        public bool WillVisit { get; set; }
        public int UserId { get; set; }
        public int EventId { get; set; }

        public Event Event { get; set; }
        public User User { get; set; }
    }
}
