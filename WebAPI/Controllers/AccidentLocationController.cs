using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebAPI.Controllers{

[ApiController]
[Route("[accidentlocation]")]
    public class AccidentLocaltionController : ControllerBase{

        [HttpGet("{state_name}")]
        public stateName<AccidentLocation> Get()
        {
            
        }


    }



}