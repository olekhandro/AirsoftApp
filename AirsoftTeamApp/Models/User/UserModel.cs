using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Enums;

namespace AirsoftTeamApp.Models.User
{
    public class UserModel
    {
        public int id { get; set; }
        public string userName { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public UserRole role { get; set; }
        public DateTime registrationDate { get; set; }

        public UserState state { get; set; }
        public string photo { get; set; }
        public bool hasCar { get; set; }
        public string email { get; set; }
        public string password { get; set; }

        public UserModel()
        { }

        public UserModel(Core.Entities.User user)
        {
            id = user.Id;
            userName = user.UserName;
            firstName = user.FirstName;
            lastName = user.LastName;
            role = user.Role;
            registrationDate = user.RegistrationDate;
            state = user.State;
            photo = user.PhotoLink;
            hasCar = user.HasCar;
            email = user.Email;
            password = user.PasswordHash;
        }
    }
}
