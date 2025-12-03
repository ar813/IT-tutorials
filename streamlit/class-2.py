import streamlit as st
from PIL import Image

# image
st.title("Image")

img = Image.open("images-1.jpg")
st.image(img)

# image with width and caption
st.image(img, width = 300, caption="300px")

# Video 
st.title("Video")

video_file = open("video.mp4" , "rb") # "r" (read mode), "b" (binary mode), "rb" (read it in binary mode) ==> Since a video file is a binary file (not plain text), we need to read it in binary mode ("rb") to properly process and display it using Streamlit.
video_file_read_in_binary_mode = video_file.read()
st.video(video_file_read_in_binary_mode)

# Audio
st.title("Audio")

audio_file = open("audio.mp3" , "rb") 
audio_file_read_in_binary_mode = audio_file.read()
st.audio(audio_file_read_in_binary_mode)