using System.Collections.Generic;
using AirsoftTeamApp.Core.Entities;
using AirsoftTeamApp.Core.ServiceInterfaces;

namespace AirsoftTeamApp.DAL.Services
{
    public class UserService: IUserService
    {
        public List<User> GetUsers()
        {
            return new List<User>()
            {
                new User()
                {
                    FirstName = "Александр" ,
                    LastName = "Захаров",
                    Id = 1,
                    Name = "Iskander"
                },
                new User()
                {
                    FirstName = "Андрей" ,
                    LastName = "Мочалов",
                    Id = 2,
                    Name = "Crimson"
                },
                new User()
                {
                    FirstName = "Антон" ,
                    LastName = "Птичкин",
                    Id = 3,
                    Name = "Птица"
                }
            };
        }
    }
}
