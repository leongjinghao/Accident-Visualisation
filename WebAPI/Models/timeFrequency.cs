using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class timeFrequencyModel
    {
        public string start_time { get; set; }
        public int Freq { get; set; }
    }
}