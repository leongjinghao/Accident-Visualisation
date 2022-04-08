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

        public async Task<List<AccidentDimensionModel>> GetAccidents(string state)
        {
            var accidentLocation = _context.accident_location;
            var address = _context.address;

            return accidentLocation.Join(address, al => al.address_id, a => a.address_id, (al, a) => new { al, a } )
                .Select(x => new {
                    id = x.al.id,
                    start_lat = x.al.start_lat,
                    start_lng = x.al.start_lng,
                    distance = x.al.distance,
                    state = x.a.state
                })
                .Where(y => y.state == state)
                .Select(m => new AccidentDimensionModel {
                    ID = m.id,
                    Start_Lat = m.start_lat,
                    Start_Lng = m.start_lng,
                    Distance = m.distance
                })
                .ToList();
        }
    }
}