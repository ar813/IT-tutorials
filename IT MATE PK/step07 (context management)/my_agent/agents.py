from agents import Agent, dynamic_instructions
from user_data_class.user_data_class import UserData
from my_config.gemini_config import gemini_model
from my_tools.my_tools import get_age

agent = Agent[UserData](
    name="Helper",
    instructions=dynamic_instructions,
    model=gemini_model,
    tools=[get_age]
)
