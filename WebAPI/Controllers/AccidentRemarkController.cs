using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccidentRemarkController : ControllerBase
    {
        private readonly IAccidentRemarkRepository _accidentRemarkRepository;
        public AccidentRemarkController(IAccidentRemarkRepository accidentRemarkRepository)
        {
            _accidentRemarkRepository = accidentRemarkRepository;
        }

        [HttpPost]
        public async Task<ActionResult> PostAccidentRemark(CreateAccidentRemarkDto createAccidentRemarkDto)
        {
            var accidentRemark = new AccidentRemark
            {
                id = createAccidentRemarkDto.id,
                remark = createAccidentRemarkDto.remark
            };
            
            await _accidentRemarkRepository.Add(accidentRemark);
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AccidentRemarkModel>> GetRemark(string id)
        {
            var remark = await _accidentRemarkRepository.Get(id);
            if (remark == null)
                return NotFound();
            
            return Ok(remark);
        }
    }
}