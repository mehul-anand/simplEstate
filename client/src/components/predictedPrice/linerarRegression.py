from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression
import numpy as np

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['data']  # Fetch data from POST request
    X = np.array([d['x'] for d in data]).reshape(-1, 1)
    y = np.array([d['y'] for d in data])

    model = LinearRegression()
    model.fit(X, y)
    predictions = model.predict(X)

    return jsonify(predictions=predictions.tolist())

if __name__ == '__main__':
    app.run(port=5000)
