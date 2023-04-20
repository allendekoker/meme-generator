# web_scraper.py

import requests
from bs4 import BeautifulSoup
import csv

url = "https://example.com"

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, "html.parser")
else:
    print(f"Failed to fetch the URL with status code: {response.status_code}")

links = soup.find_all("a")

with open("links.csv", "w", newline="") as csvfile:
    fieldnames = ["URL"]
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()

    for link in links:
        writer.writerow({"URL": link.get("href")})
