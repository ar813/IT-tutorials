from agents import Runner, set_tracing_disabled
from my_agent.agents import agent
import asyncio
from openai.types.responses import ResponseTextDeltaEvent
from rich import print # uv add rich


set_tracing_disabled(True)

async def main():
    result = Runner.run_streamed(
        starting_agent = agent, 
        input = "Hello",
    )

    # async for event in result.stream_events():
    #     print(event)

    # async for event in result.stream_events():
    #     print(event.type) # agent_updated_stream_event (ye agent k baray may btata hai, jab bhi hamara agent update hoga to ye chalayga like agr handoff bhi hoga to ye hamay is ka baara may bhi btaiga kuk handoff bhi aak agent hi hota hai), raw_response_event, raw_response_event, raw_response_event, raw_response_event, raw_response_event, raw_response_event, raw_response_event, raw_response_event, raw_response_event, run_item_stream_event (is k under tmam data hotay)
    # raw_response_event (ye chunks hotay hay data chunks may aata hai)

    # async for event in result.stream_events():
    #     if event.type == "agent_updated_stream_event":
    #         print(event.new_agent.name) # Assistant

    # async for event in result.stream_events():
    #     if event.type == "run_item_stream_event":
    #         print(event.item.raw_item.content[0].text) # Hello! How can I help you today?

    # async for event in result.stream_events():
    #     if event.type == "raw_response_event":
    #         print(event.data) # ResponseTextDeltaEvent(delta='Hello'), ResponseTextDeltaEvent(delta='! How can'), ResponseTextDeltaEvent(delta=' I help you today?\n'), ResponseContentPartDoneEvent(text='Hello! How can I help you today?\n'), Data chunks may aata hai

    # async for event in result.stream_events():
    #     if event.type == "raw_response_event" and isinstance(event.data, ResponseTextDeltaEvent):
    #         print(event.data.delta)
            # Hi
            #  there! How
            #  can I help you today?

    async for event in result.stream_events():
        if event.type == "raw_response_event" and isinstance(event.data, ResponseTextDeltaEvent):
            print(event.data.delta, end="", flush=True)

asyncio.run(main())


# There are three methods of Runner
# 1. run_sync: which is a sync method 
# 2. run method: which runs async, must take await and used in async functions (async functions is called by a liabrary asyncio)
# 3. Runner.run_streamed():  do not take await and must be an async functions

# Note: run_sync and run are almost shows same results


# flush=False (default) : Output is buffered (stored in memory first). Time consuming
# flush=True : Forces Python to immediately write the output to the terminal (or file).