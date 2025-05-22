import os
from pathlib import Path
from dotenv import load_dotenv

# Carga variables desde .env
load_dotenv()

# Ruta absoluta al archivo starwars.db
BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "instance" / "starwars.db"

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "default-secret")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-default")
    
    # Usa ruta absoluta para evitar errores de SQLite con rutas relativas
    SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI", f"sqlite:///{DB_PATH}")
    
    SQLALCHEMY_TRACK_MODIFICATIONS = False
