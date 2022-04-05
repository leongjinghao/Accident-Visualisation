using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public interface IDataContext
    {
        DbSet<Accident> accident { get; init; }
        DbSet<AccidentLocation> accident_location { get; init; }
        DbSet<Address> address { get; init; }
        DbSet<LocationProperty> location_property { get; init; }
        DbSet<Weather> weather { get; init; }
        DbSet<AccidentRemark> accident_remark { get; init; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
    }
}