from agents import Runner, set_tracing_disabled
from my_agent.agents import agent

set_tracing_disabled(True)

result = Runner.run_sync(
    starting_agent = agent, 
    input = "what is the weather in karach and 20 + 2 =? ",
    context = "I am a context ---> Muhammad Arsalan Khan"
)

print(result.final_output)
print("Last Agent Name --> ",result.last_agent.name)