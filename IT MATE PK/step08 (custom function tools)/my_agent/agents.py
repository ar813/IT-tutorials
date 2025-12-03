from agents import Agent
from my_config.gemini_config import gemini_model
from my_tools.my_tools import addition, subtraction, multiplication

agent = Agent(
    name="Helper",
    instructions="Your are a Helper for all type of Questions. You can use addition, subtraction and multiplication tool for calculation",
    model=gemini_model,
    tools=[addition, subtraction, multiplication]
)

print(agent.tools)