from flask import jsonify, request, Response
import json
from flask_cors import cross_origin
from . import api_app
from .models import SurveyDatas
from project import db
import requests
import logging

logger = logging.getLogger("ubi")



@api_app.route("/validate_email", methods=["POST", "GET"])
@cross_origin()
def validate():
    json_data = request.get_json(force=True)
    url = "https://api1.27hub.com/api/emh/a/v2?k=EEB03BC4&e={0}".format(json_data["email"])
    response = requests.get(url).text
    return jsonify({"data": json.loads(response)})



def convert_to_digits(cost):
    try:
        return int(cost.split(" ")[2].replace(",", "").replace("$", ""))
    except Exception as e:
        return int(cost.replace(",", "").replace("$", ""))


@api_app.route("/save_data", methods=["POST"])
@cross_origin()
def save_data():
    json_data=request.get_json(force=True)
    data=dict(first_name=json_data.get("first_name"),
                last_name=json_data.get("last_name"),
                email_address=json_data.get("email"),
                advocate_ubi=True if json_data.get("advocate_ubi") == "adv_yes" else False,
                familiar_ubi=True if json_data.get("familiar_ubi") == "fam_yes" else False,
                ethnicity=json_data.get("ethnicity"),
                intent=json_data.get("intent"),
                cost=json_data.get("cost"),
                amount=json_data.get("amount"),
                gender=json_data.get("gender"))
    survey_data = SurveyDatas(**data)
    db.session.add(survey_data)
    db.session.commit()
    return jsonify({"result": "success"})


@api_app.route("/get_advocates", methods=["GET"])
def get_advocates():
    number_users = len(db.session.query(SurveyDatas).all())
    return jsonify({"data": {"advocate_count": str(number_users)}})


@api_app.route("/user_exists", methods=["GET"])
def user_exists():
    email_address = request.args.get("email").strip()
    user = db.session.query(SurveyDatas).filter_by(email=email_address).first()
    if user is None:
        return jsonify({"data": "valid"})
    return jsonify({"data": "invalid"})

@api_app.route("/scatter_data", methods=["GET"])
def get_data():
    data = iter(db.session.query(SurveyDatas).all())
    def json_gen(data):
        try:
            prev_release = next(data)  # get first result
        except StopIteration:
            # StopIteration here means the length was zero, so yield a valid releases doc and stop
            yield '{"data": []}'
            raise StopIteration
        yield '{"data": ['
        for datum in data:
            yield json.dumps({
                "UBI": convert_to_digits(prev_release.amount),
                "Gender": prev_release.gender,
                "Ethnicity": prev_release.Ethnicity,
                "Intent": prev_release.intent,
                "COL": convert_to_digits(prev_release.cost)
            })
            prev_release = datum

        yield json.dumps({
                "UBI": convert_to_digits(prev_release.amount),
                "Gender": prev_release.gender,
                "Ethnicity": prev_release.ethnicity,
                "Intent": prev_release.intent,
                "COL": convert_to_digits(prev_release.cost)
            }) + "]}"

    return Response(json_gen(data), content_type="application/json")