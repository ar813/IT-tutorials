from agents import Runner, set_tracing_disabled
from my_agent.agents import agent

set_tracing_disabled(True)

result = Runner.run_sync(
    starting_agent = agent, 
    input = "Find the value of x: 2x + 2x = 3",
    context={"id":"3"}
)

print(result.final_output)

# hooks and event both terms are same
# hooks ya events do tarah k hotay hai
# aak wo jo runner k sath chaltay hai (RunHookBase: on_llm_start, on_llm_end, on_agent_start, on_agent_end, on_handoff, on_tool_start, on_tool_end)
# or aak wo jo agent k sath chaltay hai (AgentHookBase: on_start, on_end, on_handoff, on_tool_start, on_tool_end, on_llm_start, on_llm_end)
# Note: jab bhi hamara Runner chalta hai to un may se kuch ya tamam hooks chaltay hi chaltay hai to ham in hooks ki costomization bhi krsaktay hai

# is repo may hum agent hooks ko dekhangay