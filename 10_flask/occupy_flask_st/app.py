from flask import Flask
app = Flask(__name__)

@app.route("/")
def RandOccupation():
    print(__name__) 
    return "~occupation~"

app.run()
