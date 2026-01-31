# auth, db and cors values
from decouple import config, Csv

# DB
DB_URL = config("DB_URL", default="postgresql://postgres:qpzm@localhost:5432/alphabite")

# CORS
CORS_ORIGINS = config(
    "CORS_ORIGINS", default="http://localhost:5173,http://localhost:8000", cast=Csv()
)

# AUTH
TOKEN_EXPIRES_MINUTES = int(config("TOKEN_EXPIRES_MINUTES", default=60))
SECRET_KEY = config("SECRET_KEY")
ALGORITHM = config("ALGORITHM")
