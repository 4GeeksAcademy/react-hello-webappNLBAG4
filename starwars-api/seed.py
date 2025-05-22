# seed.py
from app import app
from models import db, User, People, Planet, Favorite

def seed_data():
    with app.app_context():
        print("🌱 Limpiando base de datos...")
        db.drop_all()
        db.create_all()

        print("👤 Creando usuario...")
        user = User(username="anakin")
        db.session.add(user)

        print("🌌 Añadiendo personajes...")
        characters = [
            People(name="Luke Skywalker", gender="male", eye_color="blue"),
            People(name="Darth Vader", gender="male", eye_color="yellow"),
            People(name="Leia Organa", gender="female", eye_color="brown"),
            People(name="Yoda", gender="male", eye_color="green"),
        ]
        db.session.add_all(characters)

        print("🪐 Añadiendo planetas...")
        planets = [
            Planet(name="Tatooine", climate="arid", terrain="desert"),
            Planet(name="Hoth", climate="frozen", terrain="tundra"),
            Planet(name="Dagobah", climate="humid", terrain="swamp"),
        ]
        db.session.add_all(planets)

        print("⭐ Añadiendo favoritos de ejemplo...")
        db.session.add(Favorite(user=user, people=characters[0]))  # Luke
        db.session.add(Favorite(user=user, planet=planets[0]))     # Tatooine

        db.session.commit()
        print("✅ Base de datos inicializada con éxito.")

if __name__ == "__main__":
    seed_data()
