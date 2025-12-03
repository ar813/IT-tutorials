from agents import Runner, set_tracing_disabled, RunConfig, set_default_openai_api, set_default_openai_client
from my_agent.agents import math_agent, history_agent # Here, math_agent uses gemini's LLM and history_agent uses groq's LLM
from my_config.gemini_config import gemini_client, gemini_model

set_tracing_disabled(True)
set_default_openai_api("chat_completions")
set_default_openai_client(gemini_client)

result = Runner.run_sync(
    starting_agent = math_agent, 
    input = "2+2=",
    run_config = RunConfig(
        model=gemini_model, 
        model_provider=gemini_client
    ) # This is the Runner Level Configuration
)

print(result.final_output)


# To use Global Level Configuration you have to import set_default_openai_api, set_default_openai_client from agents, 
# just call them write chat_completions in set_default_openai_api and give LLM client to set_default_openai_client
# It has done, now just pass the models to each agent such as model="gemini-2.0-flash" you can use different models of same LLM or Company