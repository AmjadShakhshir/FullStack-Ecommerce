from flask import Flask, jsonify
from flask_restful import Resource, Api, reqparse, abort, fields, marshal_with
import os
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

load_dotenv()

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
db = SQLAlchemy()
db.init_app(app)


class BookmarksModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    url = db.Column(db.String(200), nullable=False)
    folder_id = db.Column(db.Integer, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return f"Bookmark(name = {name}, url = {url})"


bookmark_put_args = reqparse.RequestParser()
bookmark_put_args.add_argument(
    "name", type=str, help="Name of the bookmark is required.", required=True)
bookmark_put_args.add_argument(
    "url", type=str, help="url of the bookmark is required.", required=True)


resource_fields = {
    'id': fields.Integer,
    'name': fields.String,
    'url': fields.String
}


class Bookmark(Resource):
    @marshal_with(resource_fields)
    def get(self, bookmark_id):
        result = BookmarksModel.query.get(bookmark_id)
        return result

    @marshal_with(resource_fields)
    def put(self, bookmark_id):
        args = bookmark_put_args.parse_args()
        bookmark = BookmarksModel(
            id=bookmark_id, name=args['name'], url=args['url'])
        db.session.add(bookmark)
        db.session.commit()
        return bookmark, 201


""" class Index(Resource):
    def get(self):
        return jsonify({"data": "Hello World!"})
 """

api.add_resource(Bookmark, "/bookmark/<int:bookmark_id>")

if __name__ == "__main__":
    app.run(debug=True)
