import pandas as pd
import os

# read csv dataset
# TODO: to remove nrows=1000 in final execution
accident_data = pd.read_csv("US_Accidents_Dec21_updated.csv", nrows=10000)

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

# Function for dropping the specified row from all dataframes
def dropRowFromDFs(rowIndex):
    global accident, accident_location, address, weather, location_property

    accident = accident.drop([rowIndex]).reset_index(drop=True)
    accident_location = accident_location.drop([rowIndex]).reset_index(drop=True)
    address = address.drop([rowIndex]).reset_index(drop=True)
    weather = weather.drop([rowIndex]).reset_index(drop=True)
    location_property = location_property.drop([rowIndex]).reset_index(drop=True)

def main():
    # remove all existing individual csv files
    deleteExistingCSV()

    '''
    1. Data Cleansing/Validation Process:
        To traverse all tuples and perform data cleansing/validation 
    '''
    # TODO: replace value 10 to len(accident_data.index) for actual execution
    rowIndex = 0
    DFLength = len(accident_data.index)
    while rowIndex < DFLength:
        # print("Reading index {0}".format(rowIndex))

        # print current row at every 10000 row interval to check progress
        # if rowIndex % 10000 == 0:
        #     print("Now at {0}".format(rowIndex))

        '''
        a. Data cleansing/validation for Accident dataframe:
            - Drop row if Start_Time is null 
            - Drop row if End_Time is null
        '''
        if accident.iloc[[rowIndex]]["Start_Time"].isnull().values.any() or \
                accident.iloc[[rowIndex]]["End_Time"].isnull().values.any():
            # print("Dropping index {0}!".format(rowIndex))
            dropRowFromDFs(rowIndex)
            DFLength -= 1
            continue

        '''
        b. Data cleansing/validation for Accident Location dataframe:
            - Drop row if Start_Lat is null 
            - Drop row if Start_Lng is null
            - Drop row if End_Lat is null
            - Drop row if End_Lng is null 
        '''
        if accident_location.iloc[[rowIndex]]["Start_Lat"].isnull().values.any() or \
                accident_location.iloc[[rowIndex]]["Start_Lng"].isnull().values.any() or \
                accident_location.iloc[[rowIndex]]["End_Lat"].isnull().values.any() or \
                accident_location.iloc[[rowIndex]]["End_Lng"].isnull().values.any():
            # print("Dropping index {0}!".format(rowIndex))
            dropRowFromDFs(rowIndex)
            DFLength -= 1
            continue

        # Insert foreign key Address_ID from Address table
        accident_location.at[rowIndex, "Address_ID"] = rowIndex

        '''
        c. Data cleansing/validation for Address dataframe
            - Drop row if zipcode is null
            - Drop row if state is null
            - Drop row if city is null
            - Remove tailing digits after "-", if exist
        '''
        if address.iloc[[rowIndex]]["Zipcode"].isnull().values.any() or \
                address.iloc[[rowIndex]]["State"].isnull().values.any() or \
                address.iloc[[rowIndex]]["City"].isnull().values.any():
            # print("Dropping index {0}!".format(rowIndex))
            dropRowFromDFs(rowIndex)
            DFLength -= 1
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
            - Drop row if Weather_Condition is null 
        '''
        if weather.iloc[[rowIndex]]["Weather_Condition"].isnull().values.any():
            # print("Dropping index {0}!".format(rowIndex))
            dropRowFromDFs(rowIndex)
            DFLength -= 1
            continue

        # Insert primary key Weather_ID for Weather table
        weather.at[rowIndex, "Weather_ID"] = rowIndex

        '''
        e. Data cleansing/validation for Location Property dataframe
            - Drop row if Amenity is null 
            - Drop row if Bump is null
            - Drop row if Crossing is null
            - Drop row if Give_Way is null 
            - Drop row if Junction is null 
            - Drop row if No_Exit is null
            - Drop row if Railway is null
            - Drop row if Roundabout is null 
            - Drop row if Station is null 
            - Drop row if Stop is null
            - Drop row if Traffic_Calming is null
            - Drop row if Traffic_Signal is null
            - Drop row if Turning_Loop is null  
        '''
        if location_property.iloc[[rowIndex]]["Amenity"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Bump"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Crossing"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Give_Way"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Junction"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["No_Exit"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Railway"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Roundabout"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Station"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Stop"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Traffic_Calming"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Traffic_Signal"].isnull().values.any() or \
                location_property.iloc[[rowIndex]]["Turning_Loop"].isnull().values.any():
            # print("Dropping index {0}!".format(rowIndex))
            dropRowFromDFs(rowIndex)
            DFLength -= 1
            continue

        # Insert primary key Location_Property_ID for Location_Property table
        location_property.at[rowIndex, "Location_Property_ID"] = rowIndex

        # Increment rowIndex
        rowIndex += 1

    ''' 
    2. Storage of Cleansed/Validated data 
    Append cleansed/validated row into respective csv file
    '''
    # Append row to accident.csv
    # appendRowToCSV('accident.csv', accident, rowIndex)
    accident.to_csv('dataframe_csv/accident.csv', index=False)

    # Append row to accident_location.csv
    # appendRowToCSV('accident_location.csv', accident_location, rowIndex)
    accident_location.to_csv('dataframe_csv/accident_location.csv', index=False)

    # Append row to address.csv
    # appendRowToCSV('address.csv', address, rowIndex)
    address.to_csv('dataframe_csv/address.csv', index=False)

    # Append row to weather.csv
    # appendRowToCSV('weather.csv', weather, rowIndex)
    weather.to_csv('dataframe_csv/weather.csv', index=False)

    # Append row to location_property.csv
    # appendRowToCSV('location_property.csv', location_property, rowIndex)
    location_property.to_csv('dataframe_csv/location_property.csv', index=False)


if __name__ == "__main__":
    main()
