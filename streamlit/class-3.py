import streamlit as st

# checkbox
if st.checkbox("Show/Hide"):
    st.text("This text will be shown if the checkbox is checked.")

# radio button
color = st.radio("Choose a color", ["Red", "Green", "Blue", "Yellow"])
st.write("You selected", color)

# Select Box
selected_fruit = st.selectbox("Select a fruit", ["Apple", "Banana", "Cherry", "Date", "Elderberry"])
st.write("You selected", selected_fruit)

# Multi-Select Box
selected_fruits = st.multiselect("Select multiple fruits", ["Apple", "Banana", "Cherry", "Date", "Elderberry"])

# Slider
slider_value = st.slider("Slider", 0, 100, 50)
st.write("Slider value:", slider_value)

