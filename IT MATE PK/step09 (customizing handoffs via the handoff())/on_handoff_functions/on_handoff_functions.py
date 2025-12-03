from agents import RunContextWrapper
from pydantic import BaseModel

class MyInputData(BaseModel):
    result: int
    reason: str
    n1: int
    advise: str

def on_handoff_math_teacher(ctx: RunContextWrapper[None], input_data: MyInputData): # Required parameter is ctx or context
    print("Handoff called")
    print(ctx.context)
    print("Reason --->", input_data.reason)
    print("Result --->", input_data.result)
    print("Number1 --->", input_data.n1)
    print("Advise --->", input_data.advise)

    