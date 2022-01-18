# how-to :: Create a Droplet with Ubuntu and Apache2
---
## Overview
  Guide to creating a virtual machine equipped with Ubuntu 20.04 and Apache2

### Estimated Time Cost: 20 mins

### The How-To

1. Create the Droplet on DigitalOcean, with prerequisites below:
- Ubuntu 20.04
- Basic Shared CPU
- Regular Intel (with SSD)
- $5/month plan
- A data center in the area you are closest in
2. Authenticate your device with ssh! Start by heading over to Control Panel -> Settings -> Security -> Add SSH Key
- Run `cat ~/.ssh/id_rsa.pub` and copy/paste the key into the box given
3. The droplet should be automatically on; head over to Droplets -> [your droplet] -> Access -> Launch Droplet Console
4. Now that you're in the terminal, run `apt-get update` and `apt install apache2` to update Ubuntu and install Apache
5. Copy/paste your droplet's public ip (ipv4) into a browser. If you see the Apache Default Page, it works!



### Resources
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04

---

Accurate as of (last update): 2021=2-01-18

#### Contributors:  
Annabel Zhang, pd2  
