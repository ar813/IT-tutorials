from typing import Any
from agents import Agent, AgentHooks, RunContextWrapper

class MyAgentHooks(AgentHooks): # Inheritance

    async def on_start(self, context: RunContextWrapper, agent: Agent) -> None:
        """Called before the agent is invoked. Called each time the running agent is changed to this
        agent."""
        print("Start")
        print(context.context["id"])
        context.context["name"] = "Arsalan"

    async def on_end( self, context: RunContextWrapper, agent: Agent, output: Any,) -> None:
        """Called when the agent produces a final output."""
        print("End")
        print(context.context["name"])