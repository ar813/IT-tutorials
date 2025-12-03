from agents import Agent, RunContextWrapper

async def validate_tool(ctx:RunContextWrapper, agent:Agent):
    if ctx.context["age"] >= 18:
        return True
    return False