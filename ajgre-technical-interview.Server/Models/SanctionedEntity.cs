using System;

namespace EngineerTechInterview.Server.Controllers
{
    public class SanctionedEntity
    {
        public Guid Id => Guid.NewGuid();
        public string Name { get; set; }
        public string Domicile { get; set; }
        public bool Accepted { get; set; }
    }
}
