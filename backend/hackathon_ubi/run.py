from project import app_factory, db
import os
import logging



main_proj = os.path.join(os.path.dirname(os.path.abspath(__file__)), "project")
config_path = os.path.join(main_proj, "config", "config.py")

logger = logging.getLogger("ubi")
file_handler = logging.FileHandler(os.path.join(os.path.dirname(main_proj), "logs", "server.log"))
formatter = logging.Formatter("%(asctime)s %(level)s %(message)s")
file_handler.setFormatter(formatter)

logger.setLevel(logging.INFO)
logger.addHandler(file_handler)


static_folder = os.path.join(main_proj, "static")
templates = os.path.join(main_proj, "templates")

def create_app():
    application = app_factory(config_path)
    with application.app_context():
        db.create_all()
    return application

application = create_app()

if __name__ == "__main__":
    app = app_factory(config_path)
    with application.app_context():
        db.create_all()
    app.run(host="0.0.0.0", port=3333, debug=True)
