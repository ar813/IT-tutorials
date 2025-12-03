from agents import function_tool, FunctionTool, RunContextWrapper
from tool_schema.tool_schema import SubtractionSchema
from validate_tool.validate_tool import validate_tool

async def ForSubtractTool(ctx: RunContextWrapper[SubtractionSchema], args: str) -> str: # ye do parameter layga aak ctx or dusra args (args k under n1 or n2 ki property hai) required
    parsed = SubtractionSchema.model_validate_json(args) # yha se pydentic validate karega k is object k under n1 or n2 hon a lazmi hai 
    print("Subtraction tool is called --> ")
    return f"Your answer is {parsed.n1 - parsed.n2}"

subtraction = FunctionTool(
    name="Subtract", # We can not add space here like "Subtract Function" (It raise error). we will have to write it like "Subtract_Function" 
    description="Subtraction Function",
    params_json_schema= SubtractionSchema.model_json_schema(), # model_json_schema() hamarai class schema ka json schema bnata hai ye zarori hai, Json ka schema bnanay ka maqsad hai k LLM k paas hamara yhi schema jata hai normal schema nhi
    on_invoke_tool= ForSubtractTool, # Yha aasa function dena hai jo async ho or str return kare
    is_enabled=validate_tool # Not required para (If False the schema of this tool will not send to the LLM) True   (Default)
)

@function_tool # jo tmama kaam aap custom function k lya manually krtay hai wo tmama kaam function_tool nami decorator khud krta hai 
def addition(n1:int, n2:int) -> str: # Here (n1:int, n2:int) is the schema
    """ Addition Function """ # It is the description
    print("Addition tool is called --> ")
    return f"Your answer is {n1 + n2}"

# ******************************************************************************************* #
@function_tool(name_override="multiply_tool", description_override="multiply tool", is_enabled=validate_tool)
def multiplication(n1:int, n2:int) -> str: 
    """ Multiplication Function """ 
    print("Multiplication tool is called --> ")
    return f"Your answer is {n1 * n2}"