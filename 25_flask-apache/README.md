# how-to :: Add Flask and Host w/ Apache
---
## Overview
  Guide to installing Flask for Py apps and getting them to run on apache

### Estimated Time Cost: 20 mins

### Prerequisites (To Download)
- `sudo apt-get install libapache2-mod-wsgi-py3 python-dev`
- `sudo apt-get install python3-pip`
- `sudo pip install virtualenv`

### The How-To
NOTE: Replace your preferred app name where it says "FlaskApp"
NOTE: Replace your preferred virtual environment name where it says "env1"

1. Run `sudo a2enmod wsgi` to enable WSGI
2. Move into the www directory via `cd /var/www` and make your application directory here with `sudo mkdir FlaskApp`
3. Cd into the directory and create another directory with:
```
cd FlaskApp
sudo mkdir FlaskApp
```
This creates a directory where you can put other files needed for the app to run outside of the main directory.
4. Create two subdirectories, static and templates
```
cd FlaskApp
sudo mkdir static templates
```
Your directory structure should be as such now:
```
|----FlaskApp
|---------FlaskApp
|--------------static
|--------------templates
```
5. Create an __init__.py file in this second FlaskApp folder with `sudo nano __init__.py`
6. Add this code to the file, save(Ctrl + S), and exit(Ctrl + X).
```
from flask import Flask
app = Flask(__name__)
@app.route("/")
def hello():
    return "Hooray it works!"
if __name__ == "__main__":
    app.run()
```
7. Create a virtual environment with `sudo virtualenv env1`
- If you want the virtual environment in the home directory, run `sudo virtualenv ~/env1` instead.
8. Activate your virtual environment with `. env1/bin/activate`
9. Install Flask in your environment with `sudo pip3 install Flask`
10. Run `sudo python __init__.py` and your console should display "Running on http://127.0.0.1:5000/", which means it has been created successfully
11. With Flask installed and the app working, deactivate your virtual environment with `deactivate`
13. Run `sudo nano /etc/apache2/sites-available/FlaskApp.conf` to edit the config file; add the following lines of code (replace "mywebsite.com" with your domain or IP address, and "FlaskApp" with your app name). Save and exit the file afterwards.
```
<VirtualHost *:80>
		ServerName mywebsite.com
		ServerAdmin admin@mywebsite.com
		WSGIScriptAlias / /var/www/FlaskApp/flaskapp.wsgi
		<Directory /var/www/FlaskApp/FlaskApp/>
			Order allow,deny
			Allow from all
		</Directory>
		Alias /static /var/www/FlaskApp/FlaskApp/static
		<Directory /var/www/FlaskApp/FlaskApp/static/>
			Order allow,deny
			Allow from all
		</Directory>
		ErrorLog ${APACHE_LOG_DIR}/error.log
		LogLevel warn
		CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
14. Enable the virtual host with `systemctl reload apache2` and `sudo a2ensite FlaskApp` and console should say "Site FlaskApp already enabled".
15. Create a .wsgi file in /FlaskApp with:
```
cd /var/www/FlaskApp
sudo nano flaskapp.wsgi
```
16. Add the following lines of code to this .wsgi file:
```
#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"/var/www/FlaskApp/")

from FlaskApp import app as application
application.secret_key = 'Add your secret key'
```
Save and exit. Your directory structure should be as such now:
```
|--------FlaskApp
|----------------FlaskApp
|-----------------------static
|-----------------------templates
|-----------------------venv
|-----------------------__init__.py
|----------------flaskapp.wsgi
```
17. Restart Apache with `sudo service apache2 restart` to apply your changes
18. Open your browser and enter your droplet ip address or domain in. Your website will now output whatever you wrote in `__init__.py`!

### Resources
* https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps

---

Accurate as of (last update): 2022-01-18

#### Contributors:  
Annabel Zhang, pd2  
