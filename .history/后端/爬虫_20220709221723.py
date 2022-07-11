import requests
url="https://jwxt.gdupt.edu.cn/",
method="POST",
res = requests.get(url,method)
print(res.text)