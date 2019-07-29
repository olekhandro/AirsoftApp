using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirsoftTeamApp.Helpers
{
    public class RequestResult
    {
        public RequestResultEnum Result { get; set; }
        public object Data { get; set; }
        public List<string> Errors { get; set; }
    }
}
