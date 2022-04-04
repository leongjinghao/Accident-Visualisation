using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace WebAPI.Repositories
{
    public class AccidentRepository: IAccidentRepository
    {
        private readonly IDataContext _context;
        public AccidentRepository(IDataContext context)
        {
            _context = context;
        }


        public async Task<List<StartHourCountModel>> GetStartHourCount() {
            return _context.accident.GroupBy(a => a.start_time)
                .Select(x => new StartHourCountModel { start_time = x.Key })
                .ToList();
        }

    }
}