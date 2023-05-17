import requests
from bs4 import BeautifulSoup
import re

url = 'https://news.yahoo.co.jp/topics/top-picks'
res = requests.get(url)
soup = BeautifulSoup(res.content, "html.parser")

#classの場合class_ = "class名"
topic = soup.find_all(class_ = "newsFeed_item_title")
link = soup.find_all(class_ = "newsFeed_item_link")


elementjson = []
for (element, link) in zip(topic, link):
    new_data = {"title": element.text, "a": link["href"]}
    elementjson.append(new_data)


#値を取ってきてpタグを削除
ans = []
for urlinfo in elementjson:
    url = urlinfo["a"]
    res = requests.get(url)
    soup = BeautifulSoup(res.text, "html.parser")
    data = soup.find_all("p", class_="sc-liIFw hfDeSd highLightSearchTarget")
    data[0] = str(data[0]).replace('<p class="sc-liIFw hfDeSd highLightSearchTarget">', "")
    data[0] = str(data[0]).replace('</p>', "")

    #数値化して表示
    for d in ans:
        kanjivallist = re.findall("[一-龥]", d)
        ans1 = len(kanjivallist) / len(d)
        print(ans1)
