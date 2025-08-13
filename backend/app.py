from flask import Flask, jsonify
from flask_cors import CORS
import json
from querydb import *


app = Flask(__name__)
CORS(app)  # This allows your React app to call Flask API

@app.route('/api/data')
def get_data():
    # Example data — pretend this comes from MSSQL
    data = [
        {"Position": 1, "Team": "Michelle"},
        {"Position": 2, "Team": "Josh"},
        {"Position": 3, "Team": "Brady"},
        {"Position": 4, "Team": "Fred"}
    ]
    return jsonify(data)


queryData("DESKTOP-IEKNRR8\SQLEXPRESS", "baseball", "{ODBC Driver 17 for SQL Server}", "select * from BattingStats").to_json('backend/jsonData/baseballBattingStats.json', orient='records', indent=4)

# Load JSON file
with open('backend/jsonData/baseballBattingStats.json') as f:
    batting_data = json.load(f)
with open('backend/jsonData/baseballPitchingStats.json') as f:
    pitching_data = json.load(f)
with open('backend/jsonData/baseballPlayers.json') as f:
    players_data = json.load(f)

@app.route('/api/batting')
def get_batting():
    return jsonify(batting_data)

@app.route('/api/pitching')
def get_pitching():
    return jsonify(pitching_data)

@app.route('/api/players')
def get_players():
    return jsonify(players_data)

if __name__ == '__main__':
    app.run(debug=True)
