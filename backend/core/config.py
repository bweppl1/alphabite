# auth, db and api values
from decouple import config

DB_URL = config(
    "DB_URL", default="postgresql://postgres:12345@localhost:5432/alphabite"
)
