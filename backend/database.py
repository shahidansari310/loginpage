import mysql.connector
from mysql.connector import Error

def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="your_password",
            database="mydatabase"
        )
        return conn
    except Error as e:
        print("❌ Error connecting to MySQL:", e)
        return None
