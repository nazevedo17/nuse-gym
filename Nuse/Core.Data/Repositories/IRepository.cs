using System;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Data.Repositories
{
    public interface IRepository<TEntity> where TEntity : class, new()
    {
        IQueryable<TEntity> GetAll();

       
        //Task<TEntity> GetByIdAsync(Int64 id);

        Task<TEntity> AddAsync(TEntity entity);

        Task<TEntity> UpdateAsync(TEntity entity);
    }
}
