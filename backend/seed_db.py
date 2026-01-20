from sqlalchemy.orm import Session
from fastapi import Depends

from database import engine, get_db
from models import Words, Users, Base
from seed_words import words_data


# truncate table function
def reset_db(db=Depends(get_db)):
    pass


# seed databse wih seed_words.py dict
def seed_db():
    Base.metadata.create_all(bind=engine)

    with Session(engine) as db:

        reset_db(db)  # clear data

        word_count = 0

        for word, emoji in words_data:
            word = Words(word=word)
            emoji = Words(emoji=emoji)
            db.add(word)
            db.add(emoji)
            word_count += 1

        db.commit()
        db.close()

    print(f"Seeded ${word_count} words of ${len(words_data)} possible words.")


seed_db()
