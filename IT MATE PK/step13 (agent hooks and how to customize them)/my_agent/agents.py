from agents import Agent
from my_config.gemini_config import gemini_model
from my_hooks.my_agent_hooks import MyAgentHooks

agent = Agent(
    name="Assistant",
    instructions="You are an Assistant",
    model=gemini_model,
    hooks=MyAgentHooks()
)

