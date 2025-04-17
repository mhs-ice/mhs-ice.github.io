from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows your website to talk to this backend

# Simple Q&A dictionary
responses = {
    "hello": "Hi! I'm your virtual assistant.",
    "projects": "See my work: github.com/yourusername",
    "contact": "Email me@example.com",
    "default": "I didn't understand that. Try 'hello' or 'projects'"
}

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '').lower()
    reply = responses.get(user_message, responses['default'])
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)  # Runs on http://localhost:5000