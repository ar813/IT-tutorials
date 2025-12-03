from agents import Runner, set_tracing_disabled
from my_agent.agents import agent
from my_hooks.my_runner_hooks import MyRunHooks

set_tracing_disabled(True)

result = Runner.run_sync(
    starting_agent = agent, 
    input = "Find the value of x: 2x + 2x = 3",
    hooks=MyRunHooks()
)

print(result.final_output)


# is repo may hum run hooks ko dekhangay