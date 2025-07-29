from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This allows your React app to call Flask API

@app.route('/api/data')
def get_data():
    # Example data — pretend this comes from MSSQL
    data = [
        {"id": 1, "name": "Michelle"},
        {"id": 2, "name": "Josh"},
        {"id": 3, "name": "Brady"},
        {"id": 4, "name": "Fred"}
    ]
    return jsonify(data)

@app.route('/api/batting')
def get_batting():
    batting_data = [
        {            
            'Team': 'TOR',
            'Year': 2025,
            'Player': "Alejandro Kirk",
            'Age': 26,
            'Pos': 'C',
            'WAR': 1.7,
            'G': 88,
            'PA': 346,
            'AB': 312,
            'R': 27,
            'H': 95,
            '[2B]': 13,
            '[3B]': 0,
            'HR': 7
        },
        {            
            'Team': 'TOR',
            'Year': 2025,
            'Player': "Vladimir Guerrero Jr.",
            'Age': 26,
            'Pos': '1B',
            'WAR': 3.5,
            'G': 105,
            'PA': 465,
            'AB': 394,
            'R': 71,
            'H': 116,
            '[2B]': 23,
            '[3B]': 0,
            'HR': 15
        }
    ]
    return jsonify(batting_data)


if __name__ == '__main__':
    app.run(debug=True)
