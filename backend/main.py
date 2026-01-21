import uvicorn  # server
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import words
from .core.config import CORS_ORIGINS

app = FastAPI(debug=True)

# CORS FastAPI <-> React communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_headers=["*"],
    allow_methods=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Hello World!"}


# routes
app.include_router(words.router)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
