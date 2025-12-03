#   ********** Sting method **********

txt = "Muhammad Arsalan Khan, Arsalan is my friend"

# 1. casefold()
print("\n")
print(txt.casefold()) # muhammad arsalan khan, arsalan is my friend

# 2. lower()
print(txt.lower()) # muhammad arsalan khan, arsalan is my friend

# 3. center()
print(txt.center(50)) #    Muhammad Arsalan Khan, Arsalan is my friend

# 4. count()
# string.count(value, start, end)
print(txt.count("Arsalan")) # 2
print(txt.count("a")) # 7
print(txt.count("a", 9 , 15)) # 2

# 5. encode()
# The encode() method in Python is used to convert a string into bytes. This is helpful when working with files, network communication, or encryption, where data is stored in a binary format.
# Converts a String (str) → Bytes (bytes)
# The output starts with b, meaning it's a bytes object. In Python, bytes is a data type used to store binary data.

text = "Hello"
encoded_text = text.encode()  # Default encoding is 'utf-8'
print(encoded_text)  # Output: b'Hello'

byte_data = bytes([72, 101, 108, 108, 111])
print(byte_data)  # Output: b'Hello'

# 6.endswith()
# The endswith() method checks if a string ends with a specific character or set of characters. It returns True if it does and False if it doesn’t.
# string.endswith(suffix, start, end)

text = "hello world"
print(text.endswith("world"))  # Output: True
print(text.endswith("hello"))  # Output: False

text = "document.pdf"
print(text.endswith((".pdf", ".doc", ".txt")))  # Output: True

text = "Python is fun"
print(text.endswith("is", 0, 9))  # Checks "Python is" → Output: True

# Check if the string ends with either the phrase "world." or "castle.":
txt = "Hello, welcome to my castle."
x = txt.endswith(("world.", "castle."))
print(x) # True
