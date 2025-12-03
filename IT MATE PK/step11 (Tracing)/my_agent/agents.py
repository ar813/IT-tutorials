from agents import Agent
from my_config.gemini_config import gemini_model
from my_tools.my_tools import plus, subtract, divide, multiply, weather

agent = Agent(
    name="Assistant",
    instructions="You are an Assistant",
    model=gemini_model,
    tools=[weather, plus, subtract, divide, multiply, weather],
)

