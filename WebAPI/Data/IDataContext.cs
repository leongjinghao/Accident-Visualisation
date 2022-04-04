using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public interface IDataContext
    {
        DbSet<Accident> Accident { get; init; }
        DbSet<AccidentLocation> AccidentLocation { get; init; }
        DbSet<Address> Address { get; init; }
        DbSet<LocationProperty> LocationProperty { get; init; }
        DbSet<Weather> Weather { get; init; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}