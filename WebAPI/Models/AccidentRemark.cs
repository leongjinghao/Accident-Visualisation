using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class AccidentRemark
    {
        [Key]
        public string id { get; set; }
        public string? remark { get; set; }
    }
}