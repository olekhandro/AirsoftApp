namespace AirsoftTeamApp.Core.Entities
{
    public class User: Identifiable
    {
        public string Name { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
