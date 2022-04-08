-- Accident table create function
CREATE TABLE IF NOT EXISTS Accident(
	ID varchar(10) NOT NULL,
	Severity INT,
	Start_Time varchar(100) NOT NULL,
	End_Time varchar(100) NOT NULL,
	Description varchar(200),
	PRIMARY KEY(ID)
);

-- Weather table create function
CREATE TABLE IF NOT EXISTS Weather(
 	Weather_ID INT,
 	Weather_Timestamp varchar(100),
 	Temperature float,
 	Wind_Chill float,
 	Humidity float,
 	Pressure float,
 	Visibility float,
 	Wind_Direction varchar(10),
 	Wind_Speed float,
 	Precipitation float,
 	Weather_Condition varchar(50),
 	PRIMARY KEY(Weather_ID)
);

-- Location Property table create function
CREATE TABLE IF NOT EXISTS Location_Property(
 	Location_Property_ID INT,
 	Amenity Boolean NOT NULL,
 	Bump Boolean NOT NULL,
	Crossing Boolean NOT NULL,
 	Give_Way Boolean NOT NULL,
 	Junction Boolean NOT NULL,
 	No_Exit Boolean NOT NULL,
 	Railway Boolean NOT NULL,
	Roundabout Boolean NOT NULL,
 	Station Boolean NOT NULL,
 	Stop Boolean NOT NULL,
 	Traffic_Calming Boolean NOT NULL,
	Traffic_Signal Boolean NOT NULL,
 	Turning_Loop Boolean NOT NULL,
 	PRIMARY KEY(Location_Property_ID)
);

-- Address table create function
CREATE TABLE IF NOT EXISTS Address(
 	Address_ID INT,
 	Number  float,
 	Street varchar(100),
 	Side varchar(5) ,
 	City varchar(50) NOT NULL,
	County varchar(50) ,
 	State varchar(10) NOT NULL,
	Zipcode varchar(15) NOT NULL,
	Country varchar(5) ,
	Timezone varchar(30) ,
 	Airport_code varchar(10),
 	Location_Property_ID INT NOT NULL,
 	Weather_ID INT NOT NULL,
	PRIMARY KEY (Address_ID),
 	FOREIGN KEY (Weather_ID) REFERENCES Weather(Weather_ID),
 	FOREIGN KEY (Location_Property_ID) REFERENCES Location_Property(Location_Property_ID)
 );

-- Accident Location table create function
CREATE TABLE IF NOT EXISTS Accident_Location(
 	ID varchar(10),
 	Start_lat float,
 	Start_Lng float,
 	End_Lat float,
 	End_Lng float,
 	Distance float,
 	Address_ID INT,
	PRIMARY KEY (ID),
	FOREIGN KEY (ID) REFERENCES Accident(ID),
 	FOREIGN KEY (Address_ID) REFERENCES Address(Address_ID)
);

-- Accident Remark table create function
CREATE TABLE IF NOT EXISTS Accident_Remark(
 	ID varchar(10),
	Remark varchar(200),
	PRIMARY KEY (ID),
	FOREIGN KEY (ID) REFERENCES Accident(ID)
);
	