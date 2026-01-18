# sqlalchemy models
from sqlalchemy import Column, String, Integer, Boolean
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
