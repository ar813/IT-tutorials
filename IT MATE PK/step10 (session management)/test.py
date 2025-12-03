from agents import SQLiteSession
from my_agent.agents import agent
import asyncio

session = SQLiteSession("user_123", "conversations.db") 


async def main():
    # items = await session.get_items() # Get all items in a session
    # print(items)

    # new_items = [
    #     {"role": "user", "content": "Hello"},
    #     {"role": "assistant", "content": "Hi there!"}
    # ]
    # await session.add_items(new_items) # Add new items to a session

    # await session.pop_item() # Remove and return the most recent item

    await session.clear_session() # Clear all items from a session
    

asyncio.run(main())