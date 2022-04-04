namespace WebAPI.Models
{
    public class AccidentLocation
    {
        public string id { get; set; }
        public float start_lat { get; set; }
        public float start_lng { get; set; }
        public float end_lat { get; set; }
        public float end_lng { get; set; }
        public float distance { get; set; }
        public int address_id { get; set; }
    }
}