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
[Route("[accidentlocation]")]
    public class AccidentLocationController : ControllerBase
    {

        private readonly IAccidentLocationRepository _accidentLocRepository;

        public AccidentLocationController(IAccidentLocationRepository accidentLocRepository)
        {
            _accidentLocRepository = accidentLocRepository;
        }

        // [HttpGet("{state_name}")]
        [HttpGet]
        public async Task<IEnumerable<AccidentLocation>> GetAccidentLocation()
        {
            var accident = await _accidentLocRepository.GetAccidents();

            return Ok(accident);
        }


    }



}