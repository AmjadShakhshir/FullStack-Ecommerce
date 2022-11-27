import requests

BASE = "http://127.0.0.1:5000/"

data = {"name": "Google", "url": "https://www.google.com/"}

response = requests.get(BASE + "bookmark/1")
print(response.json())
