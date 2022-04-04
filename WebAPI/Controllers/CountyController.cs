using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Data;
using WebAPI.Repositories;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CountyController : ControllerBase
    {
        private readonly IAddressRepository _addressRepository;
        public CountyController(IAddressRepository addressRepository)
        {
            _addressRepository = addressRepository;

        }
        [HttpGet("{state}")]
        public async Task<ActionResult<IEnumerable<AccidentLocation>>> GetCountyFrequency(string state)
        {
            
            var address = await _addressRepository.GetCountyByState(state);

            return Ok(address);
        }
    }
}