using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class AccidentLocation
    {
        [Key]
        public string id { get; set; }
        public double? start_lat { get; set; }
        public double? start_lng { get; set; }
        public double? end_lat { get; set; }
        public double? end_lng { get; set; }
        public double? distance { get; set; }
        public int address_id { get; set; }
    }
}