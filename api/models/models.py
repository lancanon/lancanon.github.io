from sqlalchemy import Column, Integer, String
from api.dependencies.database import Base

class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), unique=True, nullable=False)
    fame = Column(Integer, default=0)  