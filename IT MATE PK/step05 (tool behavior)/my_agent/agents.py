from agents import Agent, ModelSettings
from agents.agent import StopAtTools
from my_config.gemini_config import gemini_model
from my_tools.my_tools import plus, subtract, divide, multiply

agent = Agent(
    name="Addition and Subtraction",
    instructions="You can plus or subtract any thing.",
    model=gemini_model,
    tools=[plus, subtract, divide, multiply],
    tool_use_behavior=StopAtTools(stop_at_tool_names=["divide", "multiply"]),  # jab jab "divide" ya "multiply" ka tool call ho to us tool ("divide" ya "multiply") ka answer denay k baad aap apna flow apna loop khatam krdena
    model_settings=ModelSettings(tool_choice="multiply", parallel_tool_calls=False),
    reset_tool_choice=True
)

# tool_use_behavior = run_llm_again (default)
# Another value of tool_use_behavior is StopAtTools, which can be imported from agents.agent.
# StopAtTools accepts a parameter/class called stop_at_tool_names.
# This parameter is a list of tool names (list[str]). 
# When the agent encounters any of these tools, it will stop execution immediately 
# instead of sending the request back to the LLM or continuing the agent loop.

# model_settings accepts a parameter/class called ModelSettings
# ModelSettings takes multiple parameters first one is tool_choice
# The default value of tool_choice is auto (Means, If LLM want to call any tool they can)
# none value means don't call any tool
# required value means must call the tool, LLM have no choise they must call the tool (Means if your user prompt is How are you, they will not say "I am fine", They will call any tool with random values)
# If we pass one of the value from our tools its means the agent have only choice to call that perticular tool (Remaining tools are not applicable)
# For Example: tool_choice="multiply" means agent must call the tool multiply, But after calling it they might call another tools may be 

# If parallel_tool_calls=True means agent can call multiple tools at a time and for not parallel_tool_calls=False means agent can call multiple tools one by one (squensly)

# reset_tool_choice=True
# → After each request/turn, the model forgets any prior tool choice and goes back to the default tool selection behavior.
# Example: If last time you forced it to use multiply, on the next turn it won’t be locked into multiply anymore — it can freely choose again.

# reset_tool_choice=False
# → The model will keep using the previously selected tool (if one was set) until you explicitly change it.
# Example: If you forced it to use multiply, it will continue using multiply on future turns unless you change the setting.

