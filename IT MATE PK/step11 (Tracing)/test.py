from agents import Runner, set_tracing_export_api_key, trace, RunConfig
from my_agent.agents import agent
from decouple import config

openai_key = config("OPEN_API_KEY")
set_tracing_export_api_key(openai_key)

with trace("My Test Workflow"): # yha humnay apnay work flow ka name change krdia hai or aak sath do runner ko chalaya hai
    res = Runner.run_sync(
        starting_agent = agent, 
        input = "2 + 2 = ",
    )

    result = Runner.run_sync(
        starting_agent = agent, 
        input = f"{res.final_output} * 10",
        run_config=RunConfig(tracing_disabled=True) # matbal is runner ki tracing mat krna
    )

    print(res.final_output)
    print(result.final_output)
