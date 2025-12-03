from agents import Runner, set_tracing_disabled, enable_verbose_stdout_logging
from my_agent.agents import agent

set_tracing_disabled(True)
# enable_verbose_stdout_logging()

result = Runner.run_sync(
    starting_agent = agent, 
    input = "(11 + 2) - 3 = ?, is ka jo bhi answer aai us may 2 ko multiply krna or 2 se divide bhi",
    max_turns=4 # You can set max turns from here
)

print(result.final_output)