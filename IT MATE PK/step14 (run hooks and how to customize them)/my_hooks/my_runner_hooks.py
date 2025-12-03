from typing import Any
from agents import Agent, RunHooks, RunContextWrapper

class MyRunHooks(RunHooks): # Inheritance

    async def on_agent_start(self, context: RunContextWrapper, agent: Agent) -> None:
        """Called before the agent is invoked. Called each time the current agent changes."""
        print("Start")

    async def on_agent_end(
        self,
        context: RunContextWrapper,
        agent: Agent,
        output: Any,
    ) -> None:
        """Called when the agent produces a final output."""
        print("End")
    