using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public interface IAddressRepository
    {
        Task<IEnumerable<Address>> GetAllAddress();
    }
}