# sqlalchemy models
from sqlalchemy import Column, String, Integer, Boolean, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import ARRAY

Base = declarative_base()


class Words(Base):
    __tablename__ = "words"
    id = Column(Integer, primary_key=True)
    word = Column(String, nullable=False)
    emoji = Column(String, nullable=False)
    tags = Column(ARRAY(String))


class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    date_created = Column(DateTime, nullable=False)


# class UserWords(Base):
#     __tablename__ = "user_words"
#     id = Column(Integer, primary_key=True)
#     word_score = Column(ARRAY[Boolean])
#     word_id = Column(Integer, ForeignKey("words.id"))
#     user_id = Column(Integer, ForeignKey("user.id"))
