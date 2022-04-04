using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace WebAPI.Repositories
{
    public class AddressRepository: IAddressRepository
    {
        private readonly IDataContext _context;
        public AddressRepository(IDataContext context)
        {
            _context = context;

        }
    
        public async Task<List<StateCountModel>> GetAllAddress() {
            return _context.address.GroupBy(a => a.state)
                .Select(x => new StateCountModel { State = x.Key, Freq = x.Count() })
                .ToList();
        }

        public async Task<List<County>> GetCountyByState(string state) {
            return _context.address.Where(a => a.state == state).GroupBy(t => t.county)
                .Select(x => new County { county = x.Key, frequency = x.Count() })
                .ToList();
        }
    }
}