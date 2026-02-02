# sqlalchemy models
from sqlalchemy import Column, String, Integer, DateTime
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
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    reading_level = Column(Integer, nullable=False, default=0)
    spelling_level = Column(Integer, nullable=False, default=0)
    coins = Column(Integer, nullable=False, default=0)
    badges = Column(ARRAY(String), default=[])
    date_created = Column(DateTime, nullable=False)
