using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class County
    {
        public string? county { get; set; }
        public int frequency { get; set; }
    }
}