from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import timedelta

from .. import models, schemas
from ..database import get_db
from ..auth.auth_handler import get_user, get_hashed_password, create_token
from ..core.config import TOKEN_EXPIRES_MINUTES

router = APIRouter()


# register
@router.post("/auth/register", response_model=schemas.LoginResponse)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = get_user(user.email)
    if db_user:
        raise HTTPException(status_code=404, detail="Email already registered.")
    hashed_password = get_hashed_password(user.password)
    db_user = models.Users(
        username=user.username,
        email=user.email,
        password=hashed_password,
        date_created=user.date_created,
    )
    db.add(db_user)
    db.commit()
    db.close()

    # token
    token_expires = timedelta(minutes=TOKEN_EXPIRES_MINUTES)
    token = create_token(data={"sub": db_user.email}, expires_delta=token_expires)
    return {"user_data": db_user, "token": token}
