from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db
from ../auth/auth_handler.py import get_user

router = APIRouter()


# register
@router.post("/auth/register", response_model=schemas.LoginResponse)
def register_user(
    username: str, email: str, password: str, db: Session = Depends(get_db)
):
    db_user = get_user(user.email)
    if db_user:
        raise HTTPException(status_code=404, details="Email already registered.")
