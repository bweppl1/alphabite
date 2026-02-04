from sqlalchemy import text
from sqlalchemy.orm import Session
from fastapi import Depends

from .database import engine, get_db
from .models import Words, Base
from .seed_words import words_data


# clear data
def reset_db(db=Depends(get_db)):
    db.execute(
        text(
            """
                    TRUNCATE TABLE
                    users, words
                    RESTART IDENTITY CASCADE
                    """
        )
    )
    db.commit()

    # reset table on schema change
    # with engine.begin() as conn:
    #     conn.execute(text("DROP TABLE IF EXISTS users CASCADE;"))


# seed databse wih seed_words.py dict
def seed_db():
    Base.metadata.create_all(bind=engine)

    with Session(engine) as db:

        reset_db(db)

        word_count = 0

        for word, emoji in words_data.items():
            word = Words(word=word, emoji=emoji)
            db.add(word)
            word_count += 1

        db.commit()
        db.close()

    print(f"Seeded {word_count} words of {len(words_data)} possible words.")


seed_db()
