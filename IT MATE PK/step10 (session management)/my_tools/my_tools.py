from agents import function_tool

@function_tool
def plus(n1:int, n2:int) ->int :
    """
        This is plus function
            arg:
                n1:int
                n2:int
            return str
    """
    print("Plus tool has fired --> ")
    return f"Your Answer is {n1+n2}"

@function_tool
def subtract(n1:int, n2:int) ->int :
    """
        This is subtract function
            arg:
                n1:int
                n2:int
            return str
    """
    print("Subtract tool has fired --> ")
    return f"Your Answer is {n1-n2}"

@function_tool
def multiply(n1:int, n2:int) ->int :
    """
        This is multiply function
            arg:
                n1:int
                n2:int
            return str
    """
    print("Multiply tool has fired --> ")
    return f"Your Answer is {n1*n2}"

@function_tool
def divide(n1:int, n2:int) ->int :
    """
        This is divide function
            arg:
                n1:int
                n2:int
            return str
    """
    print("Divide tool has fired --> ")
    return f"Your Answer is {n1/n2}"


@function_tool
def weather(city:str):
    return f"The weather in {city} is sunny"