# pydantic schemas
from pydantic import BaseModel, ConfigDict
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
    email: str
    password: str
    reading_level: int
    spelling_level: int
    coins: int
    badges: List[str]


class UserCreate(BaseModel):
    email: str
    password: str


class UserResponse(BaseModel):
    user_id: int
    email: str
    reading_level: int
    spelling_level: int
    coins: int
    badges: List[str]

    # model_config = ConfigDict(from_attributes=True)


##### Authentication schemas


class LoginBase(BaseModel):
    email: str
    password: str


class LoginResponse(BaseModel):
    user_data: UserResponse
    token: str


#### Token schemas


class TokenBase(BaseModel):
    token: str
    token_type: str


class TokenData(BaseModel):
    email: str


#### Points schemeas


class CoinBase(BaseModel):
    email: str
    coins: int


class CoinResponse(BaseModel):
    coins: int
