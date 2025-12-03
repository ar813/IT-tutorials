from agents import InputGuardrailTripwireTriggered, Runner, set_tracing_disabled, OutputGuardrailTripwireTriggered
from my_agent.agents import hotel_assistant

set_tracing_disabled(True)

try:
    result = Runner.run_sync(
        starting_agent = hotel_assistant, 
        input = "tell me about your account",
    )
    print(result.final_output)

except InputGuardrailTripwireTriggered as e:
    print(f"Input Guardrail tripped: \n {e}")

except OutputGuardrailTripwireTriggered as e:
    print(f"Output Guardrail tripped: \n {e}")




# Read the Documentation
# https://openai.github.io/openai-agents-python/guardrails/