from agents import GuardrailFunctionOutput, RunContextWrapper, Agent, Runner, input_guardrail

from my_agent.guardrail_agent import guardrail_agent

@input_guardrail
async def guardial_input_function(ctx: RunContextWrapper, agent: Agent, input: str ):
    result = await Runner.run(guardrail_agent, input=input, context=ctx.context)
    return GuardrailFunctionOutput(
        output_info=result.final_output, 
        tripwire_triggered= not result.final_output.is_hotel_mehran_query,
    )




# Note: Here 'not' key is not necessory
# hamara guardial kaam ulta kr rha tha
# yaani if user_input is 'How many rooms are available in hotel' then  is_hotel_mehran_query will be True
# or agr tripwire_triggered ki value True ho jai to wo guardal ko trip krdeta hai so 
# if result.final_output.is_hotel_mehran_query = True
# not key work convert it to False
# not result.final_output.is_hotel_mehran_query = False