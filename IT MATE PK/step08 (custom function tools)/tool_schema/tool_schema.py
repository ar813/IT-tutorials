from pydantic import BaseModel

class SubtractionSchema(BaseModel):
    n1: int
    n2: int