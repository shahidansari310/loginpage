import mysql.connector
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host=os.getenv("DB_HOST", "localhost"),
            user=os.getenv("DB_USER", "root"),
            password=os.getenv("DB_PASSWORD", "12345"),
            database=os.getenv("DB_NAME", "mydatabase")
        )
        return conn
    except mysql.connector.Error as e:
        print("Database connection error:", e)
        return None
