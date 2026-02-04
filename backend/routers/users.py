from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session
from typing import List

from .. import models, schemas
from ..database import get_db
from ..auth.auth_handler import get_user

router = APIRouter()


# Update coins
@router.put("/update_coins", response_model=schemas.CoinResponse)
def update_coins(update_coins: schemas.CoinBase, db: Session = Depends(get_db)):
    user = get_user(update_coins.email, db)
    coin_type = type(update_coins.coins)
    user_coin_type = type(user.coins)
    print(f"coin type: {coin_type}; user coin type: {user_coin_type}")  # DEBUG
    user.coins += update_coins.coins
    db.commit()

    return {"coins": user.coins}


# Update reading level
@router.put("/update_reading_level", response_model=schemas.ReadingLevelResponse)
def update_reading_level(
    update_reading_level: schemas.ReadingLevelBase, db: Session = Depends(get_db)
):
    user = get_user(update_reading_level.email, db)
    user.reading_level += update_reading_level.level
    db.commit()

    return {"reading_level": user.reading_level}


# Update spelling level
