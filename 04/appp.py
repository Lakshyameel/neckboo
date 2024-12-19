from flask import Flask, request, jsonify, render_template
import sqlite3

app = Flask(__name__)

# Initialize the database
def init_db():
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS chat_data (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_query TEXT,
                chatbot_response TEXT
            )
        """)
        conn.commit()

# Route for the homepage
@app.route('/')
def index():
    return render_template('index.html')

# API to handle user queries
@app.route('/query', methods=['POST'])
def query():
    data = request.json
    user_query = data.get('user_query')

    # Mock chatbot response (replace with actual logic)
    chatbot_response = f"Your query '{user_query}' has been received. This is a sample response."

    # Save to database
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute("INSERT INTO chat_data (user_query, chatbot_response) VALUES (?, ?)",
                       (user_query, chatbot_response))
        conn.commit()

    return jsonify({
        "user_query": user_query,
        "chatbot_response": chatbot_response
    })

# API to retrieve stored data
@app.route('/history', methods=['GET'])
def history():
    with sqlite3.connect("database.db") as conn:
        cursor = conn.cursor()
        cursor.execute("SELECT user_query, chatbot_response FROM chat_data")
        data = cursor.fetchall()
    
    return jsonify(data)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
