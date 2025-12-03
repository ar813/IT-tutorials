from agents import Agent, RunContextWrapper
from user_data_class.user_data_class import UserData

def dynamic_instructions(context: RunContextWrapper[UserData], agent:Agent ):
    return f"The user's name  is {context.context.name}. Help them with their questions. You can call the tool get_age for user age."