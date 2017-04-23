from flask import Blueprint

api_app = Blueprint("api_app", __name__)
from . import routes