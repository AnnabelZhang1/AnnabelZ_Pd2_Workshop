"""
Trio of Success: Raymond Yeung, Annabel Zhang, Thomas Yu
SoftDev
K10: Flask x RandomOccupations
2021-10-04
"""

from flask import Flask
app = Flask(__name__)

@app.route("/")
def RandOccupation():
    print(__name__) 
    return "~occupation~"

app.run()
