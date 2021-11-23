# The Sad Hatters: Noakai Aronesty, Annabel Zhang
# SoftDev pd2
# K19 -- A RESTful Journey Skyward
# 2021-11-23

import urllib.request
from flask import *
import json

app = Flask(__name__)

def getKey(filename):
    with open(filename) as f:
        key = f.readline()
    return key

def readJson(apiKey):
    url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey
    page = urllib.request.urlopen(url)
    jason = json.loads(page.read())
    print(type(jason))
    return jason

@app.route("/")
def hello_world():
    print(__name__)
    jason = readJson(getKey("key_nasa.txt"))
    pic = jason.get("url")
    print(pic)
    title = jason.get("title")
    exp = jason.get("explanation")
    return render_template("main.html", pic=pic, title=title, exp=exp)

# print(getPic(readJson(getKey("key_nasa.txt"))))
app.run()
