using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class DataContext : DbContext, IDataContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
             
        }
        
        public DbSet<Accident> accident { get; init; }
        public DbSet<AccidentLocation> accident_location { get; init; }
        public DbSet<Address> address { get; init; }
        public DbSet<LocationProperty> location_property { get; init; }
        public DbSet<Weather> weather { get; init; }
    }
}