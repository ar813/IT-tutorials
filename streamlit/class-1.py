import streamlit as st

# 1. Title
st.title("Streamlit Tutorial")

# 2. Header / Subheader
st.header("This is a header")
st.subheader("This is a sub header")

# 3. Text
st.text("This is a text")

# 4. Markdown
st.markdown(" # Here is the markdown function")
st.markdown(" ## Here is the markdown function")
st.markdown(" ### Here is the markdown function")
st.markdown(" #### Here is the markdown function")
st.markdown(" ##### Here is the markdown function")
st.markdown(" ###### Here is the markdown function")
st.markdown("_Markdown_") 
st.markdown("**Bold Text** and *Italic Text* using markdown")
st.markdown("[Click here](https://streamlit.io) to visit Streamlit")
st.markdown("~~markdown~~")
st.markdown("- Mark 1\n- Mark 2\n- Mark 3")
st.markdown("<h2 style='color: red;'>Markdown using HTML</h2>", unsafe_allow_html=True)
st.markdown("```python\nprint('Hello, Streamlit!') # By Markdown \n```")

# 5. Success, Error, Warning and Information
st.success("This is a success message")
st.error("This is an error message")
st.warning("This is a warning message")
st.info("This is an information message")

# 6. Exception
st.exception("NameError('name pd is not defiened')")
st.exception("This is an exception function")

# 7. Help about python or thier liabrary
import pandas
st.help(pandas) # output: pandas documentation
st.help(range) # output: range documentation

# 8. Write
st.write("This is a write function")

# 9. Code
st.code("""for i in range(8): foo()
    print(i)""")

# 10. HTML
st.html("<h1>Hi!</h1>")