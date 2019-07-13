using System.Collections.Generic;
using AirsoftTeamApp.Core.Entities;

namespace AirsoftTeamApp.Core.ServiceInterfaces
{
    public interface IUserService
    {
        List<User> GetUsers();
    }
}
