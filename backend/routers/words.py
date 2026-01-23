from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db

router = APIRouter()


# get a random word
@router.get("/spelling_word", response_model=schemas.WordResponse)
def get_word(db: Session = Depends(get_db)):
    query = db.query(models.Words)  # all words
    random_word = query.order_by(func.random()).first()  # choosing a random word
    # include only words with _tag_  **TO DO

    return {
        "word_id": random_word.id,
        "word": random_word.word,
        "emoji": random_word.emoji,
        "tags": [],
    }


@router.get("/reading_words", response_model=schemas.MultiWordResponse)
def get_three_words(db: Session = Depends(get_db)):
    fetched_words = []
    fetched_word_data = []

    while len(fetched_words) < 3:
        query = (
            db.query(models.Words)
            .filter(models.Words.id.notin_(fetched_words))
            .order_by(func.random())
            .first()
        )
        fetched_words.append(query.id)
        fetched_word_data.append(query)

    return {
        "word_id": fetched_word_data[0].id,
        "word": fetched_word_data[0].word,
        "emoji": fetched_word_data[0].emoji,
        "tags": [],
        "decoy_word_1": fetched_word_data[1].word,
        "decoy_word_2": fetched_word_data[2].word,
    }
