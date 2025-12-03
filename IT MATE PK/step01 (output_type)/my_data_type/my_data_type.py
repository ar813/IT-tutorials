from dataclasses import dataclass
from pydantic import BaseModel

@dataclass
class MyData1:
    n1: int
    n2: int
    result: int

class MyData2(BaseModel):
    OneLineAnswer: str
    Explaination: str
    Conclusion: str