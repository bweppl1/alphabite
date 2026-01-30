from datetime import timedelta
import jwt
from fastapi.security import OAuth2PasswordBearer
import bcrypt

o2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")


# get_user - fetch user with email
def get_used(email):
    pass


# verify_password - take plain password compare hash
def verify_password(regular_password, hashed_password):
    return bcrypt.checkpw(
        regular_password.encode("utf-8"), hashed_password.encode("utf-8")
    )


# get_hashed_password - take plain email, return hashed
def get_hashed_password(regular_password):
    print(f"Hashing password: {regular_password}")  # DEBUG
    return bcrypt.hashpw(regular_password.encode("utf-8"), bcrypt.gensalt()).decode(
        "utf-8"
    )


# authenticate_user - e-mail, password verify


### TOKEN
# create_token
def create_token(data: dict, expires_delta: timedelta):
    pass


# get_current_user - using token
