from decouple import config
from agents import AsyncOpenAI, OpenAIChatCompletionsModel

groq_api_key = config("GROQ_API_KEY")
groq_base_url = config("GROQ_BASE_URL")

groq_client = AsyncOpenAI(
    api_key=groq_api_key,
    base_url=groq_base_url
)

groq_model = OpenAIChatCompletionsModel(
    model="llama-3.3-70b-versatile",
    openai_client=groq_client 
)