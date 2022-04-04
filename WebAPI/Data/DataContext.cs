using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class DataContext : DbContext, IDataContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
             
        }
        
        public DbSet<Accident> Accident { get; init; }
        public DbSet<AccidentLocation> AccidentLocation { get; init; }
        public DbSet<Address> Address { get; init; }
        public DbSet<LocationProperty> LocationProperty { get; init; }
        public DbSet<Weather> Weather { get; init; }
    }
}