using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace WebAPI.Repositories
{
    public class AccidentRepository : IAccidentRepository
    {
        private readonly IDataContext _context;
        public AccidentRepository(IDataContext context)
        {
            _context = context;
        }

        public async Task<List<StartHourCountModel>> GetStartHourFreq()
        {
            var data = _context.accident.Select(t => t.start_time).ToList();
            List<string> hourData = new List<string>();
            //Convert to hour 
            foreach (string s in data)
                hourData.Add(Convert.ToDateTime(s).ToString("HH"));

            //Count frequency
            var frequency = hourData.GroupBy(x => x).ToDictionary(x => x.Key, x => x.Count());
            List<StartHourCountModel> Response = new List<StartHourCountModel>();
            foreach (var entry in frequency)
            {
                Response.Add(new StartHourCountModel{hour = Int32.Parse(entry.Key), count = entry.Value});
            }

            return Response;
        }
    }
}