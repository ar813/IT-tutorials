from agents import Agent
from my_config.gemini_config import gemini_model

agent = Agent(
    name="Assistant",
    instructions="You are an Assistant",
    model=gemini_model,
)

