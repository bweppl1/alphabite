from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session
from typing import List

from .. import models, schemas
from ..database import get_db
from ..auth.auth_handler import get_user

router = APIRouter()


# get reading points
@router.get("/get_reading_points", response_model=schemas.PointResponse)
def get_word(email, db: Session = Depends(get_db)):
    user = get_user(email, db)
    user_reading_points = user.reading_level

    return {"points": user_reading_points}


# Update reading points
@router.put("/update_reading_points", response_model=schemas.PointResponse)
def get_decoy_word(email, points, db: Session = Depends(get_db)):
    user = get_user(email, db)
    user.reading_level += points
    db.commit()

    return {"points": user.reading_level}
