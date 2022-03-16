import pandas as pd
import os

# read csv dataset
# TODO: to remove nrows=10 in final execution
accident_data = pd.read_csv("US_Accidents_Dec20_updated.csv", nrows=10)

# Accident dataframe
# TODO: to include fk fields programmatically
accident = accident_data[
    ["ID", "Severity", "Start_Time", "End_Time", "Description"]]

# Accident Location dataframe
# TODO: to include fk fields programmatically
accident_location = accident_data[
    ["ID", "Start_Lat", "Start_Lng", "End_Lat", "End_Lng", "Distance(mi)"]]

# Address dataframe
# TODO: to include pk & fk fields programmatically
address = accident_data[
    ["Number", "Street", "Side", "City", "County", "State", "Zipcode", "Country", "Timezone", "Airport_Code", ]]

# Weather dataframe
# TODO: to include pk & fk fields programmatically
weather = accident_data[
    ["Weather_Timestamp", "Temperature(F)", "Wind_Chill(F)", "Humidity(%)", "Pressure(in)", "Visibility(mi)",
     "Wind_Direction", "Wind_Speed(mph)", "Precipitation(in)", "Weather_Condition"]]

# Location Property dataframe
location_property = accident_data[
    ["Amenity", "Bump", "Crossing", "Give_Way", "Junction", "No_Exit", "Railway", "Roundabout", "Station", "Stop",
     "Traffic_Calming", "Traffic_Signal", "Turning_Loop"]]

# test
# print(accident_data[accident_data["ID"] == "A-3265557"])

# Function for appending row to csv file
def appendRowToCSV(file, dataframe, index):
    with open(file, 'a+') as f:
        # If file is empty, write in the header
        f.seek(0)
        if f.read() == "":
            f.write(','.join(dataframe.columns.values.tolist()))
            f.write('\n')
        f.write(''.join(
            dataframe.iloc[[index]].to_csv(
                header=False,
                index=False,
                sep=','
            ).strip('\n').split('\n')
        ))

# Function for deleting all existing individual csv files
def deleteExistingCSV():
    os.remove('accident.csv')
    os.remove('accident_location.csv')
    os.remove('address.csv')
    os.remove('weather.csv')
    os.remove('location_property.csv')

def main():
    # remove all existing individual csv files
    deleteExistingCSV()

    '''
    1. Data Cleansing/Validation Process:
    To traverse all tuples 
    '''
    # TODO: replace value 10 to len(accident_data.index) for actual execution
    for rowIndex in range(len(accident_data.index)):
        # testing: print out all tuples
        # print(accident_data.iloc[[rowIndex]])

        # TODO: data cleansing for Accident dataframe
        # Skip row if Start_Time or End_Time is null
        if accident.iloc[[rowIndex]]["Start_Time"].isnull().values.any() or \
                accident.iloc[[rowIndex]]["End_Time"].isnull().values.any():
            continue

        # TODO: data cleansing for Accident Location dataframe

        # TODO: data cleansing for Address dataframe

        # TODO: data cleansing for Weather
        if weather.iloc[[rowIndex]]["Weather_Condition"].isnull().values.any():
            continue

        # TODO: data cleansing for Location Property dataframe

        ''' 
        2. Storage of Cleansed/Validated data 
        Append cleansed/validated row into respective csv file
        '''
        # Append row to accident.csv
        appendRowToCSV('accident.csv', accident, rowIndex)

        # Append row to accident_location.csv
        appendRowToCSV('accident_location.csv', accident_location, rowIndex)

        # Append row to address.csv
        appendRowToCSV('address.csv', address, rowIndex)

        # Append row to weather.csv
        appendRowToCSV('weather.csv', weather, rowIndex)

        # Append row to location_property.csv
        appendRowToCSV('location_property.csv', location_property, rowIndex)


if __name__ == "__main__":
    main()
