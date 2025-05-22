from flask import Flask, render_template_string
from config import Config
from database import db, migrate
from flask_jwt_extended import JWTManager
from routes import api
from dotenv import load_dotenv
load_dotenv()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Inicializar extensiones
    db.init_app(app)
    migrate.init_app(app, db)
    JWTManager(app)

    # Registrar rutas de la API
    app.register_blueprint(api, url_prefix="/api")

    # Página de presentación HTML
    @app.route("/")
    def root():
        return render_template_string("""
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Star Wars API 🚀</title>
            <style>
                body {
                    font-family: 'Segoe UI', sans-serif;
                    background: #000;
                    color: #fff;
                    margin: 0;
                    padding: 2rem;
                    background-image: radial-gradient(#444 1px, #000 1px);
                    background-size: 40px 40px;
                }
                h1 {
                    color: #FFE81F;
                    text-shadow: 0 0 10px #FFE81F;
                }
                ul {
                    list-style: none;
                    padding: 0;
                }
                li {
                    margin: 0.5rem 0;
                }
                a {
                    color: #1E90FF;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                .container {
                    max-width: 700px;
                    margin: auto;
                }
                em {
                    color: #bbb;
                    font-size: 0.9rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🌌 Star Wars API</h1>
                <p>Tu API REST con JWT para gestionar personajes, planetas y favoritos.</p>
                <h2>🔗 Endpoints disponibles:</h2>
                <ul>
                    <li><a href="/api/hello">/api/hello</a></li>
                    <li><a href="/api/register">/api/register</a></li>
                    <li><a href="/api/login">/api/login</a></li>
                    <li><a href="/api/people">/api/people</a></li>
                    <li><a href="/api/people/1">/api/people/&lt;id&gt;</a></li>
                    <li><a href="/api/planets">/api/planets</a></li>
                    <li><a href="/api/planets/1">/api/planets/&lt;id&gt;</a></li>
                    <li><a href="/api/users/favorites">/api/users/favorites</a> <em>(requiere token)</em></li>
                </ul>
                <p>🧪 Usa Postman o tu frontend React para explorar esta galaxia.</p>
            </div>
        </body>
        </html>
        """)

    return app


# Crear la instancia de app
app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
