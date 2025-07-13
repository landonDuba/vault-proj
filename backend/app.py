from flask import Flask
from models import db, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:/Users/lando/VaultProj/vault-proj/backend/database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)


if __name__ == '__main__':
    with app.app_context():
        print(db.engines)
        db.create_all()
    app.run(debug=True)
