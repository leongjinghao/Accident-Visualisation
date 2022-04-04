using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Repositories
{
    public class AddressRepository: IAddressRepository
    {
        private readonly IDataContext _context;
        public AddressRepository(IDataContext context)
        {
            _context = context;

        }
    
        public async Task<IEnumerable<Address>> GetAllAddress() {
            return await _context.address.ToListAsync();
        }
    }
}