from pymongo import MongoClient
from datetime import datetime

client = MongoClient()
client = MongoClient("mongodb://127.0.0.1:27017")
db = client.ip2domain

def fnInsert(o):
	result = db.restaurants.insert_one(o)
	return