#!/bin/bash

# Activar entorno virtual
echo "✅ Activando entorno virtual..."
source ../venv/bin/activate 2>/dev/null || source venv/bin/activate

# Exportar configuración de Flask
export FLASK_APP=app.py
export FLASK_ENV=development
export FLASK_RUN_HOST=0.0.0.0
export FLASK_RUN_PORT=5000

# Iniciar el servidor
echo "🚀 Iniciando Flask en http://0.0.0.0:5000 ..."
flask run
