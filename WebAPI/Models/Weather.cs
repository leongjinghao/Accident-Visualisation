using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Weather
    {
        [Key]
        public int weather_id { get; set; }
        public string? weather_timestamp { get; set; }
        public float? temperature { get; set; }
        public float? wind_chill { get; set; }
        public float? humidity { get; set; }
        public float? pressure { get; set; }
        public float? visibility { get; set; }
        public float? wind_direction { get; set; }
        public float? wind_speed { get; set; }
        public float? precipitation { get; set; }
        public string? weather_condition { get; set; }
    }
}