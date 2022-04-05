using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Data;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace WebAPI.Repositories
{
    public class AccidentRepository : IAccidentRepository
    {
        private readonly IDataContext _context;
        public AccidentRepository(IDataContext context)
        {
            _context = context;
        }

        public async Task<List<StartHourCountModel>> GetStartHourFreq()
        {
            var data = _context.accident.Select(t => t.start_time).ToList();
            List<string> hourData = new List<string>();
            //Convert to hour 
            foreach (string s in data)
                hourData.Add(Convert.ToDateTime(s).ToString("HH"));

            //Count frequency
            var frequency = hourData.GroupBy(x => x).ToDictionary(x => x.Key, x => x.Count());
            List<StartHourCountModel> Response = new List<StartHourCountModel>();
            foreach (var entry in frequency)
            {
                Response.Add(new StartHourCountModel{hour = Int32.Parse(entry.Key), count = entry.Value});
            }

            return Response;
        }

                //takes in one parameter = ID from accident table 
        public async Task<List<MultipleModel>> GetMany(string id)
        {

            var accident = _context.accident;
            var address = _context.address;
            var accident_location = _context.accident_location;
            var weather = _context.weather;
            var location_property = _context.location_property;

            //accident join accident location with ID
            //then join address with address_id
            //address join weather with weather_id
            //then join location_property with location_property_id
            var result =  accident
                .Join(accident_location, a => a.id, al => al.id, (a, al) => new { a, al })
                .Join(address, aal => aal.al.address_id, ad => ad.address_id, (aal, ad) => new { aal, ad })
                .Join(weather, aala => aala.ad.weather_id, w => w.weather_id, (aala, w) => new { aala, w })
                .Join(location_property, aalal => aalal.aala.ad.location_property_id, lp => lp.location_property_id, (aalal, lp) => new { aalal, lp })
                .Where(i => i.aalal.aala.aal.al.id == id)
                .Select(m => new MultipleModel
                {
                    severity = m.aalal.aala.aal.a.severity,
                    start_time = m.aalal.aala.aal.a.start_time,
                    end_time = m.aalal.aala.aal.a.end_time,
                    description = m.aalal.aala.aal.a.description,
                    street = m.aalal.aala.ad.street,
                    side = m.aalal.aala.ad.side,
                    city = m.aalal.aala.ad.city,
                    county = m.aalal.aala.ad.county,
                    temperature = m.aalal.w.temperature,
                    humidity = m.aalal.w.humidity,
                    pressure = m.aalal.w.pressure,
                    precipitation = m.aalal.w.precipitation,
                    wind_speed = m.aalal.w.wind_speed,
                    wind_chill = m.aalal.w.wind_chill,
                    wind_direction = m.aalal.w.wind_direction,
                    visibility = m.aalal.w.visibility,
                    amenity = m.lp.amenity,
                    bump = m.lp.bump,
                    crossing = m.lp.crossing,
                    give_way = m.lp.give_way,
                    junction = m.lp.junction,
                    no_exit = m.lp.no_exit,
                    railway = m.lp.railway,
                    roundabout = m.lp.roundabout,
                    station = m.lp.station,
                    stop = m.lp.stop,
                    traffic_calming = m.lp.traffic_calming,
                    traffic_signal = m.lp.traffic_signal,
                    turning_loop = m.lp.turning_loop
                })
                .ToList();

            return result;
        }
    }
}