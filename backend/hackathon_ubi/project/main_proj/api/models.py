
from project import db

# class Users(db.Model):
#     __tablename__ = "users"
#     id = db.Column(db.Integer, primary_key=True)
#     first_name = db.Column(db.String(100))
#     last_name = db.Column(db.String(100))
#     email_address = db.Column(db.String(100))
#     def __init__(self, first_name=None, last_name=None, email_address=None):
#         self.first_name = first_name
#         self.last_name = last_name
#         self.email_address = email_address

class SurveyDatas(db.Model):
    __tablename__ = "survey_datas"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    email = db.Column(db.String(100))
    familiar_ubi = db.Column(db.Boolean)
    advocate_ubi = db.Column(db.Boolean)
    ethnicity = db.Column(db.String(60))
    intent = db.Column(db.String(200))
    cost = db.Column(db.String(100))
    amount = db.Column(db.String(100))
    gender = db.Column(db.String(40))

    def __init__(self, first_name=None, last_name=None, email=None, familiar_ubi=None, advocate_ubi=None, ethnicity=None, intent=None,
                 cost=None, amount=None, gender=None):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.familiar_ubi = familiar_ubi
        self.advocate_ubi = advocate_ubi
        self.ethnicity = ethnicity
        self.intent = intent
        self.cost = cost
        self.amount = amount
        self.gender = gender


