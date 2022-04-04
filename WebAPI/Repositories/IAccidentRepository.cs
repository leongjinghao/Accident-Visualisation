using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public interface IAccidentRepository
    {
        Task<List<StartHourCountModel>> GetStartHourFreq();
    }
}