using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Repositories
{
    public interface IAddressRepository
    {
        Task<List<StateCountModel>> GetAllAddress();

        Task<List<CountyCountModel>> GetCountyByState(string state);

        Task<List<timeFrequencyModel>> timeFrequency(string statename);
    }


}