import streamlit as st

# Button
if st.button("Click me"):
    st.write("Button clicked!")
    
# Text Input
text_input = st.text_input("Enter your name", "Your name")
if text_input == "Arsalan":
    st.write("I know, You are admin")
else:
    st.write("Hello", text_input)
    
# Text Area
text_area = st.text_area("Enter your address", "Your address")
if st.button("submit", key = "1"):
    st.write("Address:", text_area)

# Date Input
import datetime
date_input = st.date_input("Select a date", value = datetime.datetime.now())
st.write("Date selected:", date_input)

# Time Input
time_input = st.time_input("Select a time", value = datetime.datetime.now())
st.write("Time selected:", time_input)

# Json
st.text("Display JSON Data")
st.json({
    "name":"Arsalan",
    "age": 28,
    "city": "Dhaka",
    "hobbies": ["Reading", "Running", "Swimming"]
    })

# with st.echo()
with st.echo():
    import pandas
    df = pandas.DataFrame({
        "Name": ["Arsalan", "Shahid", "Rahim"],
        "Age": [28, 30, 25],
        "City": ["Dhaka", "Chittagong", "Kolkata"]
        })
    
# progress bar
my_bar = st.progress(0)
if st.button("50%", key="2"):
    my_bar.progress(50)
if st.button("100%", key="3"):
    my_bar.progress(100)
    
# spinner
with st.spinner("waiting..."):
    import time
    time.sleep(5)
st.success("Finished")
    
