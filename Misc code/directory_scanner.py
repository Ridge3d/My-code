

from time import sleep
from core import wcolors
from core import help
import httplib
import os
options = ["http://google.com"]
verbosity= ["1"]
def directory_scanner():
	try:
		line_1 = wcolors.color.UNDERL + wcolors.color.BLUE + "wsf" + wcolors.color.ENDC
		line_1 += ":"
		line_1 += wcolors.color.UNDERL + wcolors.color.BLUE + "Dir_Scanner" + wcolors.color.ENDC
		line_1 += " > "
		com = raw_input(line_1)
		com = com.lower()
		if com[0:10] =='set target':
			options[0] = com[11:]
			options[0] = options[0].replace("http://", "")
			print "TARGET => ", options[0]
			directory_scanner()
		elif com[0:13] =='set verbosity':
			verbosity[0] = com[14:]
			print "VERBOSITY => ", verbosity[0]
			directory_scanner()
		elif com[0:12] =='show options':
			print ""
			print "Options\t\t Value"
			print "---------\t--------------"
			print "TARGET\t\t"+options[0]
			print "VERBOSITY\t\t"+verbosity[0]
			print ""
			directory_scanner()
		elif com[0:2] =='os':
			os.system(com[3:])
			directory_scanner()
		elif com[0:4] =='help':
			help.help()
			directory_scanner()
		elif com[0:4] =='back':
			pass
		elif com[0:3] =='run':
			print(wcolors.color.GREEN + "[*] Your Target : " + options[0] + wcolors.color.ENDC)
			print(wcolors.color.BLUE + "[*]Loading Path List ... Please Wait ..." + wcolors.color.ENDC)
			sleep(2)
			paths =['index',
'/wp-admin/',
'wp-admin',
'index',
'images',
]
			try:
				for path in paths:
					
					path = path.replace("\n", "")
					conn = httplib.HTTPConnection(options[0])
					conn.request("GET", path)

					res = conn.getresponse()

					if(res.status==302):
						print(wcolors.color.BOLD + wcolors.color.GREEN + "[%s] ... [%s %s]" % (path, res.status, res.reason) + wcolors.color.ENDC)
					else:
						if(verbosity[0]=="1"):
							print(wcolors.color.YELLOW + "[%s] ... [%s %s]" % (path, res.status, res.reason) + wcolors.color.ENDC)
						if(res.status==200):
							print(wcolors.color.BOLD + wcolors.color.GREEN + "[%s] ... [%s %s]" % (path, res.status, res.reason) + wcolors.color.ENDC)
					

					
			except(KeyboardInterrupt, SystemExit):
				print(wcolors.color.RED + "[*] (Ctrl + C ) Detected, System Exit" + wcolors.color.ENDC)
		else:
			print "Wrong Command => ", com
	except(KeyboardInterrupt, SystemExit):
		print(wcolors.color.RED + "[*] (Ctrl + C ) Detected, System Exit" + wcolors.color.ENDC)

