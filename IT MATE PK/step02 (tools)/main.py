from agents import Runner, set_tracing_disabled, enable_verbose_stdout_logging
from my_agent.agents import math_agent

set_tracing_disabled(True)
enable_verbose_stdout_logging()

result = Runner.run_sync(
    starting_agent = math_agent, 
    input = "2+2=",
)

print(result.final_output)


# tool is a function by which we provide that information to the LLM which they have not.
# There are three types of tools: Hosted tools, Function tools, Agents as tools