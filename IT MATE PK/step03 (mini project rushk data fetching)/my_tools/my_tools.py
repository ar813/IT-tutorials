import requests
from agents import function_tool
from decouple import config

RUSHK_URL = config("RUSHK_URL")

@function_tool
def fetch_user_data() -> list:
    """Fetch function for user data and return list"""

    url = RUSHK_URL
    res = requests.get(url)
    return res.json()
