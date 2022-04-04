namespace WebAPI.Models
{
    public class Accident
    {
        public string id { get; set; }
        public int severity { get; set; }
        public string start_time { get; set; }
        public string end_time { get; set; }
        public string description { get; set; }
    }
}