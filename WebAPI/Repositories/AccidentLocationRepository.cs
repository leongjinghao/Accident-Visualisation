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

        public async Task<IEnumerable<AccidentLocation>> GetAccidents(string state){
            // var result = from accidentLocation in _context.accident_location
            //     join address in _context.address on accidentLocation.address_id equals address.address_id
            //     where address.state == state
            //     select accidentLocation.id, accidentLocation.start_lat, accidentLocation.start_lng, accidentLocation.distance;

            return await _context.accident_location.ToListAsync();
        }
    
    }
}