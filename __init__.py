from flask import Flask
from app.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    with app.app_context():
        from app.routes import bp
        app.register_blueprint(bp)

    return app
