import os

db_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), "db", "sqlite.db")
SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:Jiujitsu123@45.55.198.11/ubi"
SQLALCHEMY_TRACK_MODIFICATIONS = False