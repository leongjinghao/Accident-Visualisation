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

        public async Task<List<CountyCountModel>> GetCountyByState(string state) {
            return _context.address.Where(a => a.state == state).GroupBy(t => t.county)
                .Select(x => new CountyCountModel { County = x.Key, Freq = x.Count() })
                .ToList();
        }

        public async Task<List<timeFrequencyModel>> timeFrequency(string statename){


            var accidentlocation = _context.accident_location;
            var accident = _context.accident;
            var address = _context.address;

            var result = address        
                        .Join(accidentlocation, ad => ad.address_id, al => al.address_id,(ad,al) => new { ad,al })
                        .Join(accident, adal => adal.al.id, a => a.id, (adal, a) => new { adal, a})
                        .Where(i => i.adal.ad.state == statename) // where state name == 'OH'
                        
                        .GroupBy(x => x.a.start_time)
                        .Select( m => new timeFrequencyModel{

                            start_time = m.Key,
                            Freq = m.Count()
                        })
                        .ToList();
            List<string> hourData = new List<string>();
            foreach (var item in result)
            {
                hourData.Add(Convert.ToDateTime(item.start_time).ToString("HH"));
            }
            var frequency = hourData.GroupBy(x => x).ToDictionary(x => x.Key, x => x.Count());
            List<timeFrequencyModel> Response = new List<timeFrequencyModel>();
            foreach (var entry in frequency)
            {
                Response.Add(new timeFrequencyModel{start_time = entry.Key, Freq = entry.Value});
            }
            return Response;
        }
    }
}