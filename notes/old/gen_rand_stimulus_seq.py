from itertools import product, permutations
from random import shuffle
colors = 3

colors_list = list(range(3))



stimuls = [{
    'first_color':s[0][0],
    'second_color':s[0][1],
    'congruents':s[1],
    'direction':s[2],
} for s in product(permutations(colors_list, 2), [0,1], [0,1])]

shuffle(stimuls)

print('[')
for s in stimuls:
    print('\t',s,',')
print(']')