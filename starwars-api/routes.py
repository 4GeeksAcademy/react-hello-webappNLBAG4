from flask import Blueprint, jsonify, request
from models import db, User, People, Planet, Favorite
from flask_jwt_extended import (
    create_access_token, jwt_required, get_jwt_identity
)

api = Blueprint("api", __name__)

@api.route("/hello")
def hello():
    return {"message": "Hello from Star Wars API!"}

@api.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")

    if User.query.filter_by(username=username).first():
        return {"msg": "User already exists"}, 400

    user = User(username=username)
    db.session.add(user)
    db.session.commit()

    return {"msg": "User registered successfully"}, 201

@api.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")

    user = User.query.filter_by(username=username).first()
    if not user:
        return {"msg": "Invalid credentials"}, 401

    access_token = create_access_token(identity=user.id)
    return {"access_token": access_token}, 200

@api.route("/people")
def get_people():
    people = People.query.all()
    return jsonify([{ "id": p.id, "name": p.name, "gender": p.gender, "eye_color": p.eye_color } for p in people])

@api.route("/people/<int:people_id>")
def get_person(people_id):
    p = People.query.get_or_404(people_id)
    return jsonify({"id": p.id, "name": p.name, "gender": p.gender, "eye_color": p.eye_color})

@api.route("/planets")
def get_planets():
    planets = Planet.query.all()
    return jsonify([{ "id": pl.id, "name": pl.name, "climate": pl.climate, "terrain": pl.terrain } for pl in planets])

@api.route("/planets/<int:planet_id>")
def get_planet(planet_id):
    pl = Planet.query.get_or_404(planet_id)
    return jsonify({"id": pl.id, "name": pl.name, "climate": pl.climate, "terrain": pl.terrain})

@api.route("/users/favorites", methods=["GET"])
@jwt_required()
def get_user_favorites():
    user_id = get_jwt_identity()
    favs = Favorite.query.filter_by(user_id=user_id).all()
    return jsonify([
        {
            "planet": f.planet.name if f.planet else None,
            "people": f.people.name if f.people else None
        } for f in favs
    ])

@api.route("/favorite/planet/<int:planet_id>", methods=["POST"])
@jwt_required()
def add_fav_planet(planet_id):
    user_id = get_jwt_identity()
    new_fav = Favorite(user_id=user_id, planet_id=planet_id)
    db.session.add(new_fav)
    db.session.commit()
    return {"msg": "Planet added to favorites"}, 201

@api.route("/favorite/people/<int:people_id>", methods=["POST"])
@jwt_required()
def add_fav_people(people_id):
    user_id = get_jwt_identity()
    new_fav = Favorite(user_id=user_id, people_id=people_id)
    db.session.add(new_fav)
    db.session.commit()
    return {"msg": "People added to favorites"}, 201

@api.route("/favorite/planet/<int:planet_id>", methods=["DELETE"])
@jwt_required()
def remove_fav_planet(planet_id):
    user_id = get_jwt_identity()
    fav = Favorite.query.filter_by(user_id=user_id, planet_id=planet_id).first()
    if fav:
        db.session.delete(fav)
        db.session.commit()
    return {"msg": "Planet favorite removed"}

@api.route("/favorite/people/<int:people_id>", methods=["DELETE"])
@jwt_required()
def remove_fav_people(people_id):
    user_id = get_jwt_identity()
    fav = Favorite.query.filter_by(user_id=user_id, people_id=people_id).first()
    if fav:
        db.session.delete(fav)
        db.session.commit()
    return {"msg": "People favorite removed"}
