from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables from .env file

class conf:
    db_host = os.getenv("DB_HOST", "localhost")
    db_name = os.getenv("DB_NAME", "lannymon_api")
    db_port = int(os.getenv("DB_PORT", 3306))
    db_user = os.getenv("DB_USER", "blue")
    db_password = os.getenv("DB_PASSWORD", "violet")
