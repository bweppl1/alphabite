# pydantic schemas
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


##### Word schemas


class WordBase(BaseModel):
    id: int
    word: str
    emoji: str
    tags: Optional[List[str]]


class WordResponse(WordBase):
    pass


class WordCreate(BaseModel):
    word: str
    emoji: str
    tags: List[str]


##### User schemas


class UserBase(BaseModel):
    id: int
    username: str
    email: str
    password: str
    date_created: datetime


class UserCreate(UserBase):
    pass


class UserResponse(UserBase):
    pass


##### User word schemas


# class UserWordBase(BaseModel):
#     pass
