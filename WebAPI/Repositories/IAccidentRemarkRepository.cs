using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Dtos;

namespace WebAPI.Repositories
{
    public interface IAccidentRemarkRepository
    {
        Task Add(AccidentRemark accidentRemark);
        Task<AccidentRemarkModel> Get(string id);
    }
}