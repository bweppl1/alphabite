from datetime import timedelta, datetime, timezone
import jwt
from jwt.exceptions import InvalidTokenError
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
import bcrypt

from ..core.config import SECRET_KEY, TOKEN_EXPIRES_MINUTES, ALGORITHM
from ..database import get_db
from ..models import Users
from ..schemas import TokenData

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")


# get_user - fetch user with email
def get_user(email: str, db: Session):
    db_user = db.query(Users).filter(Users.email == email).first()
    return db_user


# verify_password - take plain password compare hash
def verify_password(regular_password, hashed_password) -> bool:
    print(f"reg pw: {regular_password}; hashed: {hashed_password}")
    return bcrypt.checkpw(
        regular_password.encode("utf-8"), hashed_password.encode("utf-8")
    )


# get_hashed_password - take plain email, return hashed
def get_hashed_password(regular_password: str):
    print(f"Hashing password: {regular_password}")  # DEBUG
    return bcrypt.hashpw(regular_password.encode("utf-8"), bcrypt.gensalt()).decode(
        "utf-8"
    )


# authenticate_user - e-mail to fetch user, password verify vs fetched user
def authenticate_user(email: str, password: str, db: Session):
    user = get_user(email, db)
    if not user:
        return False
    print(f"hashed pw: {user.password}; pw: {password}")
    if not verify_password(password, user.password):
        print("pw error")
        return False
    print("pw verified")
    return user


### TOKEN
# create_token
def create_token(data: dict, expires_delta: timedelta):
    data_to_encode = data.copy()
    expires = datetime.now(timezone.utc) + expires_delta
    data_to_encode.update({"exp": expires})
    encoded_jwt = jwt.encode(data_to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


# get_current_user, validates token, returns associated user
def get_current_user(
    token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)
):
    cred_exception = HTTPException(status_code=401, detail="cred error")
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithm=ALGORITHM)
        email = payload.get("sub")
        if email is None:
            raise cred_exception
        token_data = TokenData(email=email)
    except InvalidTokenError as e:
        raise cred_exception from e

    user = db.query(Users).filter(Users.email == token_data.email).first()
    if user is None:
        raise cred_exception
    return user
