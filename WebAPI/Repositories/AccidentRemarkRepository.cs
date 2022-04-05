using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Data;
using WebAPI.Dtos;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;


namespace WebAPI.Repositories
{
    public class AccidentRemarkRepository: IAccidentRemarkRepository
    {
        private readonly IDataContext _context;
        public AccidentRemarkRepository(IDataContext context)
        {
            _context = context;

        }
        
        public async Task Add(AccidentRemark accidentRemark)
        {
            _context.accident_remark.Add(accidentRemark);
            await _context.SaveChangesAsync();
        }

        public async Task<AccidentRemarkModel> Get(string id)
        {
            var result = await _context.accident_remark.FindAsync(id);
            return new AccidentRemarkModel { remark = result.remark} ;
        }
    }
}