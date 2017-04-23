from flask import render_template
from . import home


@home.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@home.route("/survey", methods=["GET"])
def survey():
    return render_template("survey.html")
