using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class AccidentDimensionModel
    {
        public string? ID { get; set; }
        public double? Start_Lat { get; set; }
        public double? Start_lng { get; set; }
        public double? Distance { get; set; }
    }
}