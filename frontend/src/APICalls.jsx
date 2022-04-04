//API Call for all the States and their frequency. - SELECT, COUNT, GROUPBY
//e.g.
[
  {
    State: "OH",
    Freq: 657,
  },
  {
    State: "IN",
    Freq: 143,
  },
][
  //API Call, takes in 1 parameter = Name of State, return frequency of county in that State - SELECT, COUNT, WHERE, GROUPBY
  //e.g. const county = countyFrequency("OH")
  ({
    County: "Franklin",
    Freq: 7,
  },
  {
    County: "Hamilton",
    Freq: 4,
  })
][
  //API Call for the whole dataset Start_Time by Hour and their frequency. - SELECT, DATEPART("h"), COUNT, GROUPBY
  //e.g
  ({
    hour: 5,
    count: 34,
  },
  {
    hour: 6,
    count: 40,
  })
][
  //API Call, takes in 1 parameter = Name of State, return Start_Time by Hour and their frequency of State - SELECT, DATEPART("h"), COUNT, WHERE, GROUPBY
  //e.g. const times = timeFrequency("OH")
  ({
    hour: 5,
    count: 34,
  },
  {
    hour: 6,
    count: 40,
  })
][
  //API Call, takes in 1 parameter = Name of State, returns ID, Start_Lat, Start_Lng, Distance
  //e.g. const markerData = apiCall("OH")
  ({
    ID: "A-2716600",
    Start_Lat: 40.10891,
    Start_Lng: -83.09286,
    Distance: 3.67,
  },
  {
    ID: "A-2716601",
    Start_Lat: 39.86542,
    Start_Lng: -84.0628,
    Distance: 2.13,
  })
][
  //API Call, takes in 1 parameter = ID of accident. returns alot of data.
  //e.g.
  //From Accident: Severity, Start_Time, End_Time, Description
  //From Address: Street, Side, State, City, Country
  //From Weather Table: Humidity, Temperature, Pressure, Precipitation, Wind Chill, Wind Speed, Wind Direction, Visibility
  //From Location_Property Table: All the boolean data.
  {
    Severity: 3,
    Start_Time: "02/08/2016 0:37",
    End_Time: "02/08/2016 6:37",
    Street: "Outerbelt E",
    Side: "R",
    City: "Dublin",
    County: "Franklin",
    State: "OH",
    Description:
      "Between Sawmill Rd/Exit 20 and OH-315/Olentangy Riv Rd/Exit 22 - Accident.",
  }
][
  //and
  {
    Humidity: 58,
    Pressure: 29.76,
    Temperature: 42.1,
    Precipitation: 0,
    Wind_Direction: "SW",
    Wind_Speed: 10.4,
    Visibility: 10,
    Wind_Chill: 36.1,
  }
][
  //and
  {
    Amenity: false,
    Bump: false,
    Crossing: false,
    Give_Way: false,
    Junction: false,
    No_Exit: false,
    Railway: false,
    Roundabout: false,
    Station: false,
    Stop: false,
    Traffic_Signal: false,
    Turning_Loop: false,
  }
];
