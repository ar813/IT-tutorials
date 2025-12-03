from agents import Runner, set_tracing_disabled
from my_agent.agents import user_agent

set_tracing_disabled(True)

result = Runner.run_sync(
    starting_agent = user_agent, 
    input = "Mujhay user k 'Name' or 'Email' or 'image url' ki list do.",
)

print(result.final_output)

