from agents import Agent
from my_config.gemini_config import gemini_model
from my_config.groq_config import groq_model
from my_data_type.my_data_type import MyData1, MyData2

math_agent = Agent(
    name="Math Teacher", 
    instructions="You are a math tutor", 
    model=gemini_model,
    output_type=MyData1
)

history_agent = Agent(
    name="History Teacher", 
    instructions="You are a history tutor", 
    model=groq_model,
    output_type=MyData2
)
