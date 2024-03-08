from PIL import Image
import numpy as np

files = ["apple","banana","blob","circule","heart","hex","leaf","lemon","square","sun"]

for file in files:

    img = Image.open(f"{file}.png")
     
    numpydata = np.array(img)

    numpydata = numpydata.reshape((-1,4))

    summ = 0
    for el in numpydata:
        summ += el[3]

    print(f'\t"{file}": {1000*(255/summ)**0.5},')