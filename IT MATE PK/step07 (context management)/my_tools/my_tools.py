from agents import function_tool, RunContextWrapper
from user_data_class.user_data_class import UserData

@function_tool
def get_age(wrapper: RunContextWrapper[UserData]):
    """ Age Function """
    print("Age tool is called --> ")
    return f"Your age is {wrapper.context.age}"


# jo value aap Runner may context may paas krtay hai wo aap har jaga get krsaktay hai is tarah 
# wrapper: RunContextWrapper
# wrapper.context