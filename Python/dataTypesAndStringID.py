# Data Types

name:str = "Arsalan"
age:int = 21
height:float = 5.9
isMale:bool = True
hobbies:list = ["reading", "playing"]
city:list[str] = ["Karachi", "Lahore"]
obj:dict = {
    "name": "Arsalan",
    "age": 21,
    "height": 5.9,
    "isMale": True,
    "hobbies": ["reading", "playing"],
    "city": ["Karachi", "Lahore"]
}

print("\nname:", type(name)) # name: <class 'str'>
print("age:", type(age)) # age: <class 'int'>
print("height:", type(height)) # height: <class 'float'>
print("isMale:", type(isMale)) # isMale: <class 'bool'>
print("hobbies:", type(hobbies)) # hobbies: <class 'list'>
print("city:", type(city)) # city: <class 'list'>
print("Object:", type(obj)) # Object: <class 'dict'>


# ID
print(id(name)) # 1798306510480
print(id(age)) # 140708881434152
