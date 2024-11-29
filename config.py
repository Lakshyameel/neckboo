import os

class Config:
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "your_api_key_here")
    SECRET_KEY = os.getenv("SECRET_KEY", "your_secret_key")

