from agents import Runner, set_tracing_disabled
from my_agent.agents import agent

set_tracing_disabled(True)

result = Runner.run_sync(
    starting_agent = agent, 
    input = "10 - 2",
    context={
        "name": "Arsalan",
        "age": 30
    }
)

print(result.final_output)

# Sometimes, you don't want to use a Python function as a tool with @function_tool decurator. You can directly create a FunctionTool if you prefer. 
# You'll need to provide: name, description, params_json_schema (JSON schema (class) for the arguments), on_invoke_tool (which is an async function that receives a ToolContext and the arguments as a JSON string, and must return the tool output as a string.)
# params_json_schema ko pydantic se bnana zarori hai

