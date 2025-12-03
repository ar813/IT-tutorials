import streamlit as st

# sidebar
st.sidebar.title("Personal Information")
name = st.sidebar.text_input("Enter your name")

# main area
st.markdown(f"## 🎉 Happy Birthday {name}! 🎂 🎊")
st.write("🌟 On this special day, I pray that happiness fills your heart, success follows your path, and peace surrounds your life. May your dreams come true, your laughter never fade, and your days be filled with endless joy and blessings.")
st.write("💖 May Allah (or God) bless you with good health, immense prosperity, and unwavering faith. May He protect you from all hardships, guide you on the right path, and shower you with His endless mercy and love.")
st.write("🎈 Wishing you a year full of happiness, success, and love! Keep shining and spreading positivity wherever you go. 🌸")
st.write(f"Happy Birthday once again, {name}! 🥳🎁")

st.balloons()


