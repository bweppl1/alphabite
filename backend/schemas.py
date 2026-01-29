# pydantic schemas
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


##### Word schemas


class WordBase(BaseModel):
    word_id: int
    word: str
    emoji: str
    tags: Optional[List[str]]


class WordResponse(WordBase):
    pass


class DecoyWordResponse(BaseModel):  # for reading game
    word_id: int
    word: str


class WordCreate(BaseModel):
    word: str
    emoji: str
    tags: List[str]


##### User schemas


class UserBase(BaseModel):
    user_id: int
    username: str
    email: str
    password: str
    date_created: datetime


class UserCreate(UserBase):
    pass


class UserResponse(UserBase):
    pass


##### Authentication schemas


class LoginBase(BaseModel):
    username: str
    email: str
    password: str


class LoginResponse(BaseModel):
    username: str
    email: str
    token: str
