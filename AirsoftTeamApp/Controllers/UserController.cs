using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Entities;
using AirsoftTeamApp.Core.ServiceInterfaces;
using AirsoftTeamApp.DAL.Services;
using Microsoft.AspNetCore.Mvc;

namespace AirsoftTeamApp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IUserService _userService = new UserService();

        [HttpGet("[action]")]
        public IEnumerable<User> Users()
        {
            return _userService.GetUsers();
        }
    }
}
