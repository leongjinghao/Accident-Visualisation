using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class StateCountModel
    {
        public string? State { get; set; }
        public int Freq { get; set; }
    }
}