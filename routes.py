from flask import Blueprint, request, jsonify
from app.chatbot import get_chatbot_response

bp = Blueprint("routes", __name__)

@bp.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message")

    if not user_message:
        return jsonify({"error": "No message provided"}), 400

    response = get_chatbot_response(user_message)
    return jsonify({"response": response})
