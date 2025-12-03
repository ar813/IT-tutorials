from agents import Runner, set_tracing_disabled, SQLiteSession # install extention SQLite Viewer
from my_agent.agents import agent

set_tracing_disabled(True)

session = SQLiteSession("user_1", "conversations.db") 

# agr dusra para "conversations.db" nhi di ga to jub tak chat_bot chalayga tub tak history cashe may save rhaigi, chat_bot end hotahi history delete
# "conversations.db" ki jagah aap "arslan.db" bhi likhsaktay hai
# "user_123" ye id hay conversations.db k lya different users k lya

while True:

    propmt = input("\nWrite prompt here: ")

    if propmt == "exit":
        break

    result = Runner.run_sync(
        starting_agent = agent,
        input = propmt,
        session=session
    )

    print(result.final_output)