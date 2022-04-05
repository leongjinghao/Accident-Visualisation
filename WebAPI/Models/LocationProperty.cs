using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class LocationProperty
    {
        [Key]
        public int location_property_id { get; set; }
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