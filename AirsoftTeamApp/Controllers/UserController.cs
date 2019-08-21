using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Entities;
using AirsoftTeamApp.Core.ServiceInterfaces;
using AirsoftTeamApp.DAL;
using AirsoftTeamApp.DAL.Services;
using AirsoftTeamApp.Helpers;
using AirsoftTeamApp.Models.User;
using Microsoft.AspNetCore.Mvc;

namespace AirsoftTeamApp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly AirsoftTeamDBContext _airsoftTeamDbContext;

        public UserController(AirsoftTeamDBContext airsoftTeamDbContext)
        {
            _airsoftTeamDbContext = airsoftTeamDbContext;
        }


        [HttpGet("[action]")]
        public IEnumerable<User> Users()
        {
            return _airsoftTeamDbContext.Users.ToList();
        }

        [HttpPost("[action]")]
        public RequestResult AddUser([FromBody]UserModel userModel)
        {
            var user = new User()
            {
                Email = userModel.email,
                UserName = userModel.userName,
                LastName = userModel.lastName,
                FirstName = userModel.firstName,
                HasCar = userModel.hasCar,
                PhotoLink = userModel.photo,
                PasswordHash = userModel.password,
                Role = userModel.role,
                RegistrationDate = userModel.registrationDate,
                State = userModel.state
            };
            _airsoftTeamDbContext.Users.Add(user);
            _airsoftTeamDbContext.SaveChanges();
            return new RequestResult()
            {
                Result = RequestResultEnum.Success
            };
        }

        [HttpGet("[action]/{userId}")]
        public UserModel GetById(int userId)
        {
            return new UserModel(_airsoftTeamDbContext.Users.FirstOrDefault(x => x.Id == userId));
        }

        [HttpDelete("[action]/{userId}")]
        public void DeleteById(int userId)
        {

        }
    }
}
