from agents import Agent
from my_config.gemini_config import gemini_model
from guardial_functions.guardial_input_functions import guardial_input_function
from guardial_functions.guardial_output_functions import guardial_output_function

hotel_assistant = Agent(
    name="Hotel Customer Care Assistant",
    instructions="""
    You are a helpful Hotel Mehran's Customer Care assistant, your name is Abdul Rahman.
    - Hotel Mehran owner name is Mr. Arsalan Khan.
    - Hotel Mehran total rooms 200.
    - 20 rooms are not available for the public; they are only for special guests.
    """,
    model=gemini_model,
    input_guardrails= [guardial_input_function],
    output_guardrails=[guardial_output_function]
)