namespace WebAPI.Models
{
    public class MultipleModel
    {

        public int? severity { get; set; }

        public string? start_time { get; set; }

        public string? end_time { get; set; }

        public string? description { get; set; }

        public string? street { get; set; }

        public string? side { get; set; }

        public string? city { get; set; }

        public string? county { get; set; }

        public double? temperature { get; set; }

        public double? humidity { get; set; }

        public double? pressure { get; set; }

        public double? precipitation { get; set; }

        public double? wind_speed { get; set; }

        public double? wind_chill { get; set; }

        public string? wind_direction { get; set; }

        public double? visibility { get; set; }

        public bool? amenity { get; set; }

        public bool? bump { get; set; }

        public bool? crossing { get; set; }

        public bool? give_way { get; set; }

        public bool? junction { get; set; }

        public bool? no_exit { get; set; }

        public bool? railway { get; set; }

        public bool? roundabout { get; set; }

        public bool? station { get; set; }

        public bool? stop { get; set; }

        public bool? traffic_calming { get; set; }

        public bool? traffic_signal { get; set; }

        public bool? turning_loop { get; set; }
    }
}