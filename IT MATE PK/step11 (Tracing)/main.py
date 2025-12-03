from agents import Runner, set_tracing_export_api_key
from my_agent.agents import agent
from decouple import config

openai_key = config("OPEN_API_KEY")
set_tracing_export_api_key(openai_key)

# set_tracing_disabled(True) Now we don't need it

result = Runner.run_sync(
    starting_agent = agent, 
    input = "2 + 2 = ",
)

print(result.final_output)

# The Agents SDK includes built-in tracing, collecting a comprehensive record of events during an agent run: LLM generations, tool calls, handoffs, guardrails, and even custom events that occur. Using the Traces dashboard, you can debug, visualize, and monitor your workflows during development and in production.
# https://platform.openai.com/logs?api=traces
# Read the documentation of Tracing briefly 

# By default, the trace is named "Agent workflow"