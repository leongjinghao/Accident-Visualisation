import pandas as pd
import os

# read csv dataset
# TODO: to remove nrows=1000 in final execution
accident_data = pd.read_csv("US_Accidents_Dec20_updated.csv", nrows=1000)

# Accident dataframe
accident = accident_data[
    ["ID", "Severity", "Start_Time", "End_Time", "Description"]]

# Accident Location dataframe
accident_location = accident_data[
    ["ID", "Start_Lat", "Start_Lng", "End_Lat", "End_Lng", "Distance(mi)"]]
# Insert foreign key Address_ID from Address table
accident_location.insert(loc=6, column='Address_ID', value="")

# Address dataframe
address = accident_data[
    ["Number", "Street", "Side", "City", "County", "State", "Zipcode", "Country", "Timezone", "Airport_Code"]]
# Insert primary key Address_ID for Address table
address.insert(loc=0, column='Address_ID', value="")
# Insert foreign key Location_ID and Weather_ID for Location_Property and Weather table
address.insert(loc=11, column='Location_ID', value="")
address.insert(loc=12, column='Weather_ID', value="")

# Weather dataframe
weather = accident_data[
    ["Weather_Timestamp", "Temperature(F)", "Wind_Chill(F)", "Humidity(%)", "Pressure(in)", "Visibility(mi)",
     "Wind_Direction", "Wind_Speed(mph)", "Precipitation(in)", "Weather_Condition"]]
# Insert primary key Weather_ID for Weather table
weather.insert(loc=0, column='Weather_ID', value="")

# Location Property dataframe
location_property = accident_data[
    ["Amenity", "Bump", "Crossing", "Give_Way", "Junction", "No_Exit", "Railway", "Roundabout", "Station", "Stop",
     "Traffic_Calming", "Traffic_Signal", "Turning_Loop"]]
# Insert primary key Location_Property_ID for Location_Property table
location_property.insert(loc=0, column='Location_Property_ID', value="")

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
    if os.path.exists('accident.csv'):
        os.remove('accident.csv')

    if os.path.exists('accident_location.csv'):
        os.remove('accident_location.csv')

    if os.path.exists('address.csv'):
        os.remove('address.csv')

    if os.path.exists('weather.csv'):
        os.remove('weather.csv')

    if os.path.exists('location_property.csv'):
        os.remove('location_property.csv')

def main():
    # remove all existing individual csv files
    deleteExistingCSV()

    '''
    1. Data Cleansing/Validation Process:
        To traverse all tuples and perform data cleansing/validation 
    '''
    # TODO: replace value 10 to len(accident_data.index) for actual execution
    for rowIndex in range(len(accident_data.index)):

        '''
        a. Data cleansing/validation for Accident dataframe:
            - Skip row if Start_Time is null 
            - Skip row if End_Time is null
        '''
        if accident.iloc[[rowIndex]]["Start_Time"].isnull().values.any() or \
                accident.iloc[[rowIndex]]["End_Time"].isnull().values.any():
            continue

        '''
        b. Data cleansing/validation for Accident Location dataframe:
            - Skip row if Start_Lat is null 
            - Skip row if Start_Lng is null
            - Skip row if End_Lat is null
            - Skip row if End_Lng is null 
        '''
        if accident_location.iloc[[rowIndex]]["Start_Lat"].isnull().values.any() or \
                accident_location.iloc[[rowIndex]]["Start_Lng"].isnull().values.any() or \
                accident_location.iloc[[rowIndex]]["End_Lat"].isnull().values.any() or \
                accident_location.iloc[[rowIndex]]["End_Lng"].isnull().values.any():
            continue

        # Insert foreign key Address_ID from Address table
        accident_location.at[rowIndex, "Address_ID"] = rowIndex

        '''
        c. Data cleansing/validation for Address dataframe
            - Skip row if zipcode is null
            - Remove tailing digits after "-", if exist
        '''
        if address.iloc[[rowIndex]]["Zipcode"].isnull().values.any():
            continue

        # Remove tailing digits after "-", if exist
        zipcode = address.iloc[[rowIndex]]["Zipcode"].item()
        head, sep, tail = zipcode.partition('-')
        address.at[rowIndex, "Zipcode"] = head

        # Insert primary key Address_ID for Address table
        address.at[rowIndex, "Address_ID"] = rowIndex

        # Insert foreign key Location_ID and Weather_ID for Location_Property and Weather table
        address.at[rowIndex, "Location_ID"] = rowIndex
        address.at[rowIndex, "Weather_ID"] = rowIndex

        '''
        d. Data cleansing/validation for Weather dataframe:
            - Skip row if Weather_Condition is null 
        '''
        if weather.iloc[[rowIndex]]["Weather_Condition"].isnull().values.any():
            continue

        # Insert primary key Weather_ID for Weather table
        weather.at[rowIndex, "Weather_ID"] = rowIndex

        # TODO: e. Data cleansing/validation for Location Property dataframe

        # Insert primary key Location_Property_ID for Location_Property table
        location_property.at[rowIndex, "Location_Property_ID"] = rowIndex

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
