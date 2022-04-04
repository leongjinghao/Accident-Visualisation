COPY Accident
FROM 'D:\Jing Hao\GitHub\Accident_Visualisation\dataframe_csv\accident.csv'
DELIMITER ','
CSV Header;

COPY Weather
FROM 'D:\Jing Hao\GitHub\Accident_Visualisation\dataframe_csv\weather.csv'
DELIMITER ','
CSV Header;

COPY Location_Property
FROM 'D:\Jing Hao\GitHub\Accident_Visualisation\dataframe_csv\location_property.csv'
DELIMITER ','
CSV Header;

COPY Address
FROM 'D:\Jing Hao\GitHub\Accident_Visualisation\dataframe_csv\address.csv'
DELIMITER ','
CSV Header;

COPY Accident_Location
FROM 'D:\Jing Hao\GitHub\Accident_Visualisation\dataframe_csv\accident_location.csv'
DELIMITER ','
CSV Header;
