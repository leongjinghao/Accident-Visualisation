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
    public class timeFrequencyController : ControllerBase
    {
        private readonly IAddressRepository _addressRepository;
        public timeFrequencyController(IAddressRepository addressRepository)
        {
            _addressRepository = addressRepository;

        }
        [HttpGet("{statename}")]
        public async Task<ActionResult<IEnumerable<Address>>> timeFrequency(string statename)
        {
            var address = await _addressRepository.timeFrequency(statename);

            return Ok(address);
        }


    }
}