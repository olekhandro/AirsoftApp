using System.Collections.Generic;
using System.Linq;
using AirsoftTeamApp.Core.Entities;
using AirsoftTeamApp.Core.ServiceInterfaces;

namespace AirsoftTeamApp.DAL.Services
{
    public class UserService : IUserService
    {
        #region Private Fields


        #endregion

        #region Public Methods

        public List<User> GetUsers()
        {
            return new List<User>();
        }

        #endregion
    }
}
