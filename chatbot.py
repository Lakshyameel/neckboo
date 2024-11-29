import openai
from app.config import Config

openai.api_key = Config.OPENAI_API_KEY

def get_chatbot_response(user_message):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful AI assistant specializing in business insights."},
                {"role": "user", "content": user_message}
            ],
            max_tokens=150,
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        return str(e)
