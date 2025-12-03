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
    return f"Your Answer is {n1+n2}"