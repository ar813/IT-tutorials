from agents import Agent
from my_config.gemini_config import gemini_model
from my_tools.my_tools import plus, subtract, divide, multiply

math_agent = Agent(
    name="Math Teacher",
    instructions="You are a math teacher!",
    model=gemini_model,
    tools=[plus, subtract, divide, multiply],
    handoff_description="You are a math teacher!"
)

english_agent = Agent(
    name="English Teacher",
    instructions="You are an English teacher!",
    model=gemini_model,
    handoff_description="You are a English teacher!" # not required parameter (None is the default value)
)

agent = Agent(
    name="Main Agent",
    instructions="You are a Main Agent or triage agent. You deceide which agent to call",
    model=gemini_model,
    handoffs=[math_agent, english_agent]
)

# Handoffs let one agent pass a task to another agent. This is useful when agents have different specialties. For example, in a support app, one agent may handle order status, another refunds, and another FAQs.
# Handoffs work like special tools for the LLM. When an agent needs to pass a task to another agent, the LLM sees it as a tool call.
# For example, if the task is sent to an agent named Refund Agent, the tool will appear as: transfer_to_refund_agent.
# In simple words: Handoffs are shown to the LLM as tools. For example, if there is a handoff to an agent named Refund Agent, the tool will be called transfer_to_refund_agent.

# Handoff:
# In a handoff, one agent passes the task to another agent. After this, the new agent takes full control of the next turns. The reply of the new agent goes directly to the user, not back to the main agent.

# Agent as Tool:
# Here, the main agent stays incharge of the turns. It calls another agent like a normal tool. The helper agent gives its result back to the main agent, and then the main agent continues the reply to the user.

# turn:
# Turn ka matlab hota hai ek LLM ko request bhejna aur uska response lena.
# Request bhejne par → ek naya turn start hota hai.
# Response milne par → woh turn complete ho jata hai.