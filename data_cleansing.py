import pandas as pd

accident_data = pd.read_csv("US_Accidents_Dec20_updated.csv")

# test
print(accident_data[accident_data["ID"] == "A-3265557"])