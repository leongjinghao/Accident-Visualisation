using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Repositories
{
    public class AccidentLocationRepository: IAccidentLocationRepository
    {
        private readonly IDataContext _context;
        public AccidentLocationRepository(IDataContext context)
        {
            _context = context;

        }

        public async Task<IEnumerable<AccidentLocation>> GetAccidents(){
            return await _context.accident_location.ToListAsync();
        }
    
    }
}