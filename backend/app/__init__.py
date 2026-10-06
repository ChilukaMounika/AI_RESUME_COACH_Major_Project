from flask import Flask
from flask_cors import CORS
from app.routes.resume_routes import resume_bp

def create_app():
    app = Flask(__name__)

    CORS(app)

    app.config["UPLOAD_FOLDER"] = "uploads"

    app.register_blueprint(resume_bp)

    return app