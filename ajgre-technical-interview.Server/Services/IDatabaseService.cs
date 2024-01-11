namespace EngineerTechInterview.Server.Controllers
{
    public interface IDatabaseService
    {
        Task<IList<SanctionedEntity>> GetSanctionedEntitiesAsync();

        Task<SanctionedEntity> GetSanctionedEntityByIdAsync(Guid id);

        Task<SanctionedEntity> CreateSanctionedEntityAsync(SanctionedEntity sanctionedEntity);
    }
}