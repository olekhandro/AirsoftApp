using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AirsoftTeamApp.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace AirsoftTeamApp.DAL
{
    public class AirsoftTeamDBContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<UserEvent> UserEvents { get; set; }
        public DbSet<Game> Games { get; set; }

        public AirsoftTeamDBContext(DbContextOptions<AirsoftTeamDBContext> options) :base(options)
        {
            
        }
    }
}
