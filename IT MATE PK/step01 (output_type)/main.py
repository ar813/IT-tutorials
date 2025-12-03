from agents import Runner, set_tracing_disabled
from my_agent.agents import math_agent, history_agent

set_tracing_disabled(True)

result = Runner.run_sync(
    starting_agent = math_agent, 
    input = "2+2=",
)

print(result.final_output)

# By default, agents produce plain text (i.e. str) outputs.
# If you want the agent to produce a particular type of output, you can use the "output_type" parameter in Agent class
# To use this type, you need to use Pydantic, which comes bundled as a gift with the OpenAI package.
# You can also use dataclasses 