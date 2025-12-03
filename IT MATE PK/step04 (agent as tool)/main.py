from agents import Runner, set_tracing_disabled, enable_verbose_stdout_logging
from my_agent.agents import main_agent

set_tracing_disabled(True)
enable_verbose_stdout_logging()

result = Runner.run_sync(
    starting_agent = main_agent, 
    input = "2 + 2 = ?",
)

print(result.final_output)