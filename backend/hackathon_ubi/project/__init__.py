import os
from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
cors = CORS()

# migrate = Migrate()

def app_factory(config_path):
    from project.main_proj.api import api_app
    from project.main_proj.home import home
    app = Flask(__name__)
    db.init_app(app)
    # migrate.init_app(app, db)
    cors.init_app(app)
    app.config.from_pyfile(config_path)
    app.register_blueprint(api_app, url_prefix="/api")
    app.register_blueprint(home)
    return app


