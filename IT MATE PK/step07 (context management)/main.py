from agents import Runner, set_tracing_disabled
from my_agent.agents import agent
from user_data_class.user_data_class import UserData

set_tracing_disabled(True)

user_1 = UserData(name="Muhammad Arsalan Khan", age=19)

result = Runner.run_sync(
    starting_agent = agent, 
    input = "what is the user age?",
    context=user_1
)

print(result.final_output)

# Context means the data or information that the LLM does not already have.
# You can use the context for things like: Contextual data for your run (e.g. things like a username/uid or other information about the user)
# We can share this information with the LLM in different ways, such as through system messages, user prompts, tools, or other functions.
# SDK provide us two types of context, Context available locally and Context available to LLMs
# Local context – Information stored in your own system or app.
# LLM context – Information shared with the AI model to help it understand and answer.

# Local context
# This is represented by the 'RunContextWrapper' class and the 'context' property within it. 
# 1. First create any Python object you want. A common pattern is to use a dataclass or a Pydantic object.
# ii. You pass that object to the various run methods (e.g. Runner.run(..., **context=whatever**)).
# iii. All your tool calls, handoffs etc will be passed a wrapper object, RunContextWrapper[T], where T represents your context object type which you can access via wrapper.context.
#      Whenever your tools or lifecycle hooks run, they don’t get your context object directly. Instead, they receive it inside a wrapper called RunContextWrapper[T].
#      T is the type of your context (like your dataclass or Pydantic model).
#      To use your original context, you just call wrapper.context.
# Note: The context object is not sent to the LLM. It is purely a local object that you can read from, write to and call methods on it.