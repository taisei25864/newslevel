from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from bs4 import BeautifulSoup


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def Hello():
    url = 'https://news.yahoo.co.jp/topics/top-picks'
    res = requests.get(url)
    soup = BeautifulSoup(res.content, "html.parser")

    topic = soup.find_all(class_ = "newsFeed_item_title")
    link = soup.find_all(class_ = "newsFeed_item_link")
    
    elementjson = []
    for (element, link) in zip(topic, link):
        new_data = {"title": element.text, "a": link["href"]}
        elementjson.append(new_data)
        

    return elementjson