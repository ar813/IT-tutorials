from agents import GuardrailFunctionOutput, RunContextWrapper, Agent, Runner, output_guardrail

from my_agent.guardrail_agent import guardrail_agent

@output_guardrail
async def guardial_output_function(ctx: RunContextWrapper, agent: Agent, ouput: str ):
    result = await Runner.run(guardrail_agent, input=ouput, context=ctx.context)
    return GuardrailFunctionOutput(
        output_info=result.final_output, 
        tripwire_triggered= result.final_output.is_hotel_mehran_account_or_tax_query,
    )