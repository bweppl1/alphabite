# auth, db and cors values
from decouple import config, Csv

# DB
DB_URL = config("DB_URL", default="postgresql://postgres:qpzm@localhost:5432/alphabite")

# CORS
CORS_ORIGINS = config(
    "CORS_ORIGINS", default="http://localhost:5173,http://localhost:8000", cast=Csv()
)
