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
        {"id": 3, "name": "Brady"}
    ]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
