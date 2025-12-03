from agents import Agent, RunContextWrapper, handoff
from my_config.gemini_config import gemini_model
from my_tools.my_tools import plus, subtract, divide, multiply, weather
from agents.extensions.handoff_prompt import RECOMMENDED_PROMPT_PREFIX # To make sure that LLMs understand handoffs properly, we recommend including information about handoffs in your agents. (This Prompt is Recommended by SDK)
from on_handoff_functions.on_handoff_functions import on_handoff_math_teacher, MyInputData
from agents.extensions import handoff_filters

math_agent = Agent(
    name="Math Teacher", # Default name transfer_to_<agent_name> after handoff
    instructions=f"""{RECOMMENDED_PROMPT_PREFIX}
    You are a math teacher! you can ues tools tools=[plus, subtract, divide, multiply] for calculations""",
    model=gemini_model,
    tools=[plus, subtract, divide, multiply],
    handoff_description="You are a math teacher!" # Full Descriptoin: Handoff to the Math Teacher agent to handle the request. You are a math teacher!
)

math_teacher = handoff(
    agent= math_agent, # us agent ka naam likho jisay customize krna hai
    tool_name_override="math_teacher", # convert handoff agent name transfer_to_<agent_name> to math_teacher
    tool_description_override= "You are a math teacher! Give reason longly",
    on_handoff = on_handoff_math_teacher, # yha wo function aata hai jo us wqt call hoga jab ye handoff agent chalega
    input_type= MyInputData,
    input_filter=handoff_filters.remove_all_tools, # jub bhi main agent ksi dusray agent ko handoff kta hai to wo apni tmam history or logs bhi hand off krdata hai lekin agr aap chahtay hai k aaisa na ho to hum input_filter ki property ka ues krtay hai
    is_enabled=True
)

agent = Agent(
    name="Main Agent",
    instructions="You are a Main Agent or triage agent. You deceide which agent to call. If you don't have an agent or is_enabled=False, you can give answer",
    model=gemini_model,
    tools=[weather],
    handoffs=[math_teacher] # customized agents k naam likho "math_teacher"
)

# print(agent.handoffs)
