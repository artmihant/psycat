import json
from datetime import datetime
import pandas as pd

with open('data_raw.json', 'r')as read_file:
    data = json.load(read_file)

users = []

for name in data:
    user = data[name]
    if 'anketa' in user and 'gilbert' in user and user['anketa']['age'] < 100:
        user['results'] = user['anketa']
        user['results'] = user['results'] | {'name': name}
        if 'email' in user:
            user['results']['email'] = user['email']
        else:
            user['results']['email'] = ''

        user['results']['browser'] = user['browser']
        user['results']['datetime'] = datetime.fromtimestamp(user['datetime']['seconds'])
        user['results']['mobile'] = user['mobile']
        user['results']['os'] = user['os']
        user['results']['screen'] = user['screen']

        user['name'] = name
        users.append(user)


for user in users:
    annet = user['annet']

    left = 0
    right = 0
    both = 0

    for key in annet:
        single_annet = annet[key]
        
        if single_annet == 'right':
            right += 1

        if single_annet == 'left':
            left += 1

        if single_annet == 'both':
            both += 1

    user['results'] = user['results'] | {'left': left, 'right': right, 'both':both}


for user in users:
    ishihara = user['ishihara']

    count = 0
    for answer in ishihara:
        
        if str(answer['value']) == answer['userAnswer']:
            count += 1 

    user['results'] = user['results'] | {'ishihara': count} 

table = {}
for user in users:
    for key in user['results']:
        if key not in table:
            table[key] = [] 
        table[key].append(user['results'][key])



user['results']['browser'] = user['browser']
user['results']['datetime'] = user['datetime']
user['results']['mobile'] = user['mobile']
user['results']['os'] = user['os']
user['results']['screen'] = user['screen']

df = pd.DataFrame(data=table, columns=['email', 'datetime', 'age', 'sex', 'artist', 'artist_other', 'education', 'synesthesia', 'visual_diseases_description', 'right', 'left', 'both', 'ishihara'], index=table['name'])

print(df)

# for user in users:
#     print(user['results'])