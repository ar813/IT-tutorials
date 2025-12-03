from agents import Agent
from my_config.gemini_config import gemini_model

addition = Agent(
    name="Addition",
    instructions="You can plus or add any thing.",
    model=gemini_model
)

subtraction = Agent(
    name="Subtraction",
    instructions="You can subtract any thing.",
    model=gemini_model
)

main_agent = Agent(
    name="Main Agent", 
    instructions="You are the main agent; you decide which agent to use.", 
    model=gemini_model,
    tools=[
        addition.as_tool(
            tool_name="Addition", # required perameter
            tool_description="It has the ability to add anything" # required perameter
        ),
        subtraction.as_tool(
            tool_name="Subtraction", # required perameter
            tool_description="It has the ability to subtract anything" # required perameter
        )
    ]
)