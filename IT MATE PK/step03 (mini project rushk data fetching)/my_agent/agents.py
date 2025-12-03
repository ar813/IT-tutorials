from agents import Agent
from my_config.gemini_config import gemini_model
from my_tools.my_tools import fetch_user_data

user_agent = Agent(
    name="User Data", 
    instructions="You can use tool name fetch_user_data to fetch user data", 
    model=gemini_model,
    tools= [fetch_user_data]
)

