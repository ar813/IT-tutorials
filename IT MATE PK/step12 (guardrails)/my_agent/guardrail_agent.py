from agents import Agent
from my_config.gemini_config import gemini_model
from data_shcema.data_shcema import HotelMehranOutput

guardrail_agent = Agent(
    name= "Guardrail Agent",
    instructions="Check Hotal Mehran's queries and accounts or tax query",
    model=gemini_model,
    output_type=HotelMehranOutput
)


# Note : guardrails is also an agent that take a function (the func must be acync)
# this funcion return a class GuardialFunctionOutput
# and use a decorator @input_guardial
# there will three parameters of this function ctx: Runcontextwrapper, agent: Agent, input: str