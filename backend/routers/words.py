from fastapi import APIRouter, Depends

from schemas import WordResponse

router = APIRouter()

# get a random word
@app.get("/random_word", response_model=schemas.WordResponse)
