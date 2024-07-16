from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
import sqlite3
import os
from pathlib import Path

app = FastAPI()

# Ensure uploads directory exists
UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

# Database setup
DB_PATH = "database.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS files (
            id INTEGER PRIMARY KEY,
            marker_path TEXT NOT NULL,
            model_path TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

def insert_file_paths(marker_path, model_path):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("INSERT INTO files (marker_path, model_path) VALUES (?, ?)", (marker_path, model_path))
    inserted_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return inserted_id

@app.post("/upload/")
async def upload_files(marker: UploadFile = File(...), model: UploadFile = File(...)):
    marker_path = UPLOAD_DIR / marker.filename
    model_path = UPLOAD_DIR / model.filename
    with open(marker_path, "wb") as marker_file:
        marker_file.write(await marker.read())
    with open(model_path, "wb") as model_file:
        model_file.write(await model.read())
    inserted_id = insert_file_paths(str(marker_path), str(model_path))
    return JSONResponse(content={"id": inserted_id})

# Initialize database
init_db()