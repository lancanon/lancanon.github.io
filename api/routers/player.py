from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from api.dependencies.database import get_db
from api.models.models import Player
from pydantic import BaseModel

router = APIRouter()

# Request schema for creating a new player
class PlayerCreate(BaseModel):
    name: str
    fame: int = 0  # Default fame is 0

@router.post("/players/", response_model=dict)
async def create_player(player: PlayerCreate, db: Session = Depends(get_db)):
    """Create a new player if they don't exist."""
    existing_player = db.query(Player).filter(Player.name == player.name).first()
    if existing_player:
        raise HTTPException(status_code=400, detail="Player already exists")

    new_player = Player(name=player.name, fame=player.fame)
    db.add(new_player)
    db.commit()
    db.refresh(new_player)
    return {"message": f"Player {new_player.name} created", "fame": new_player.fame}


@router.patch("/players/{player_name}/fame")
async def update_fame(player_name: str, action: str, db: Session = Depends(get_db)):
    """
    Adjusts a player's fame based on action.
    - 'up' (F2) → Increments fame
    - 'down' (F4) → Decrements fame
    """
    player = db.query(Player).filter(Player.name == player_name).first()

    if not player:
        # Auto-create player if they don't exist
        player = Player(name=player_name, fame=1 if action == "up" else -1)
        db.add(player)
        db.commit()
        db.refresh(player)
        return {"message": f"New player '{player.name}' created", "fame": player.fame}

    if action == "up":
        player.fame += 1
        response_key = "F2"
    elif action == "down":
        player.fame -= 1
        response_key = "F4"
    else:
        raise HTTPException(status_code=400, detail="Invalid action. Use 'up' or 'down'.")

    db.commit()
    db.refresh(player)
    return {"message": f"{player.name}'s fame updated", "fame": player.fame, "reaction": response_key}