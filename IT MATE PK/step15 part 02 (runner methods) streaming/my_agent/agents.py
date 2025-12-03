from agents import Agent
from my_config.gemini_config import gemini_model
from my_tools.my_tools import plus,subtract, divide, multiply

math_agent = Agent(
    name="Math Teacher",
    instructions="You are a math teacher!",
    model=gemini_model,
    tools=[plus, subtract, divide, multiply],
    handoff_description="You are a math teacher!"
)

agent = Agent(
    name="Assistant",
    instructions="You are an Assistant",
    model=gemini_model,
    handoffs=[math_agent]
)

