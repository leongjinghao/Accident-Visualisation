using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Weather
    {
        [Key]
        public int weather_id { get; set; }
        public string? weather_timestamp { get; set; }
        public double? temperature { get; set; }
        public double? wind_chill { get; set; }
        public double? humidity { get; set; }
        public double? pressure { get; set; }
        public double? visibility { get; set; }
        public double? wind_direction { get; set; }
        public double? wind_speed { get; set; }
        public double? precipitation { get; set; }
        public string? weather_condition { get; set; }
    }
}