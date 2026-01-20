from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session
from typing import Optional

from .. import models, schemas
from database import get_db

router = APIRouter()


# get a random word
@router.get("/random_word", response_model=schemas.WordResponse)
def get_word(tag: Optional[str], db: Session = Depends(get_db)):
    query = db.query(models.Words)  # all words
    random_word = query.order_by(func.random()).first()  # choosing a random word
    # include only words with _tag_  **TO DO

    return {
        "word_id": random_word.id,
        "word_word": random_word.word,
        "word_emoji": random_word.emoji,
    }
