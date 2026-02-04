from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session
from typing import List

from .. import models, schemas
from ..database import get_db

router = APIRouter()


# get a random word
@router.get("/random_word", response_model=schemas.WordResponse)
def get_word(db: Session = Depends(get_db)):
    query = db.query(models.Words)  # all words
    random_word = query.order_by(func.random()).first()  # choosing a random word

    return {
        "word_id": random_word.id,
        "word": random_word.word,
        "emoji": random_word.emoji,
        "tags": [],
    }


# get a decoy word, only sends the word and word_id; avoids fetching used_words
@router.post("/decoy_word", response_model=schemas.DecoyWordResponse)
def get_decoy_word(used_words: List[int], db: Session = Depends(get_db)):
    query = db.query(models.Words).filter(
        models.Words.id.notin_(used_words)
    )  # removed used_words from query
    word = query.order_by(func.random()).first()

    return {
        "word_id": word.id,
        "word": word.word,
    }
