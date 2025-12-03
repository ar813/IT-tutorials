from agents import Agent
from my_config.gemini_config import gemini_model
from my_tools.my_tools import plus

math_agent = Agent(
    name="Math Teacher", 
    instructions="You are a math tutor", 
    model=gemini_model,
    tools=[plus]
)

print(math_agent.name)
print(math_agent.tools)
