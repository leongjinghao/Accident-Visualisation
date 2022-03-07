import pandas as pd

# read csv dataset
accident_data = pd.read_csv("US_Accidents_Dec20_updated.csv")

# for generating new PK and FK
rowIndex = 1

# test
print(accident_data[accident_data["ID"] == "A-3265557"])