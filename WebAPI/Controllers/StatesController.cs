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
    public class StatesController : ControllerBase
    {
        private readonly IAddressRepository _addressRepository;
        public StatesController(IAddressRepository addressRepository)
        {
            _addressRepository = addressRepository;

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AccidentLocation>>> GetStatesFrequency()
        {
            
            var address = await _addressRepository.GetAllAddress();

            return Ok(address);
        }
    }
}