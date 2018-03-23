import os
import sys

folder_name = sys.argv[1].title()
os.mkdir('./src/components/{}'.format(folder_name))
os.chdir('./src/components/{}'.format(folder_name))
file_name = folder_name.lower()
with open('{}.css'.format(file_name), 'w') as a, open ('{}.js'.format(file_name), 'w') as b, open('index.js', 'w') as c:
	c.write('import {pack} from \'./{file_name}\';\nexport default {pack};'.format(pack=folder_name, file_name=file_name))