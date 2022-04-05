using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public interface IAccidentLocationRepository
    {
        Task<List<AccidentDimensionModel>> GetAccidents(string state);
    }
}