from flask import Flask,request,jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return jsonify({"result": "(c) Get-Page  PYproxy systems. All rights reserved."})

@app.route('/get/')
def index2():
    link = request.args.get('link')
    r = requests.get(link)
    return jsonify({ "result": r.text })

if __name__ == "__main__":
    app.run(debug=True)
