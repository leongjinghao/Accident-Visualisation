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
    }
}