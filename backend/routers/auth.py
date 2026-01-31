from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import timedelta, datetime

from .. import models, schemas
from ..database import get_db
from ..auth.auth_handler import (
    get_user,
    get_hashed_password,
    create_token,
    get_current_user,
)
from ..core.config import TOKEN_EXPIRES_MINUTES

router = APIRouter()


# register
@router.post("/auth/register", response_model=schemas.LoginResponse)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = get_user(user.email, db)
    if db_user:
        raise HTTPException(status_code=404, detail="Email already registered.")
    hashed_password = get_hashed_password(user.password)
    db_user = models.Users(
        email=user.email, password=hashed_password, date_created=datetime.now()
    )
    db.add(db_user)
    db.commit()
    db.close()

    # token
    token_expires = timedelta(minutes=TOKEN_EXPIRES_MINUTES)
    token = create_token(data={"sub": db_user.email}, expires_delta=token_expires)
    return {"user_data": db_user, "token": token}


# login
@router.post("/auth/login", response_model=schemas.LoginResponse)
def login_user(email, regular_password, db: Session = Depends(get_db)):
    pass


# verify current user, api call sends token, this funciton sends token to 'get_current_user'
@router.get("/auth/me", response_model=schemas.UserResponse)
def fetch_current_user(current_user: models.Users = Depends(get_current_user)):
    return current_user
