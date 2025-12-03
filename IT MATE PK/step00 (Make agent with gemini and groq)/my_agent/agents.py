from agents import Agent
from my_config.gemini_config import gemini_model
from my_config.groq_config import groq_model

math_agent = Agent(
    name="Math Teacher", 
    instructions="You are a math tutor", 
    model=gemini_model # Here, the all configration of gemini is hold by the name of "gemini_model" (This configuration is known as agent level configuration) 
)

history_agent = Agent(
    name="History Teacher", 
    instructions="You are a history tutor", 
    model=groq_model # Here, the all configration of groq is hold by the name of "groq_model" (This configuration is known as agent level configuration)
)

# There are three types if configuration
# (i) Agent Level Configuration
# (ii) Runner Level Configuration
# (iii) Global Level Configuration

# Note: 
# i. If we provide Runner level configuration, we don't need Agent Level Configuration (Means if you do not have agent level configuration but have Runner level you are safe)
# ii. If we say the agent to use gemini model and give groq model in Runner level, The agent use groq because Runner have priority
# iii. If in the Runner’s configuration you specify that the Gemini model should be used, but at the agent level configuration you’ve mentioned that the agents should use the Groq model, then when you call the agent loop, it will still use Gemini for all agents, not Groq.
# iv. The Advantage of Runner Level Configuration is we don't need to tell multi agents which LLM to use manually one by one 
# v. Global Level Configuration: Use only one LLM (Large Language Model) throughout the whole project, Allow different agents to use different models. 
# vi. Global Level Configuration → applies to the entire project (highest priority, overrides runner and agent level).
