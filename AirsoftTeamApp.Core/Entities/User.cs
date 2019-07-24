using System;
using System.Collections.Generic;
using AirsoftTeamApp.Core.Enums;

namespace AirsoftTeamApp.Core.Entities
{
    [Serializable]
    public class User: Identifiable
    {
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public UserRole Role { get; set; }
        public UserState State { get; set; }
        public DateTime RegistrationDate { get; set; }
        public string PhotoLink { get; set; }
        public bool HasCar { get; set; }

        public ICollection<UserEvent> UserEvents { get; set; }
    }
}
