import pandas as pd

# read csv dataset
accident_data = pd.read_csv("US_Accidents_Dec20_updated.csv")

# Accident dataframe
# TODO: to include fk fields programmatically
accident = accident_data[["ID", "Severity", "Start_Time", "End_Time", "Description"]]

# Accident Location dataframe
# TODO: to include fk fields programmatically
accident_location = accident_data[["ID", "Start_Lat", "Start_Lng", "End_Lat", "End_Lng", "Distance(mi)"]]

# Address dataframe
# TODO: to include pk & fk fields programmatically
address = accident_data[["Number", "Street", "Side", "City", "County", "State", "Zipcode", "Country", "Timezone", "Airport_Code", ]]

# Weather dataframe
# TODO: to include pk & fk fields programmatically
weather = accident_data[["Weather_Timestamp", "Temperature(F)", "Wind_Chill(F)", "Humidity(%)", "Pressure(in)", "Visibility(mi)", "Wind_Direction", "Wind_Speed(mph)", "Precipitation(in)", "Weather_Condition"]]

# Location Property dataframe
location_property = accident_data[["Amenity", "Bump", "Crossing", "Give_Way", "Junction", "No_Exit", "Railway", "Roundabout", "Station", "Stop", "Traffic_Calming", "Traffic_Signal", "Turning_Loop"]]

# for generating new PK and FK
rowIndex = 1

# test
# print(accident_data[accident_data["ID"] == "A-3265557"])

# traverse all tuples
# TODO: replace value 10 to len(accident_data.index) for actual execution
for rowIndex in range(10):
    # testing: print out all tuples
    print(accident_data.iloc[[rowIndex]])

    # TODO: data cleansing for Accident dataframe

    # TODO: data cleansing for Accident Location dataframe

    # TODO: data cleansing for Address dataframe

    # TODO: data cleansing for Weather dataframe

    # TODO: data cleansing for Location Property dataframe
