import collections, requests

def ChainProxy(a,proxies,url):
    r=a
    while True:
        try:
            r=r+1
            d = collections.deque(proxies)
            d.rotate(r)
            pp = list(d)
            pp = pp[0]
            stuff = requests.get(url, proxies={'http': 'http://'+pp}).content
            break
        except:
            pass
    return (r,stuff)
proxies = ['103.43.146.138:8080','128.201.99.152:53281','170.79.88.116:8080']
r=0
url="http://ip.cn"
#And then repeat this everytime,
r,stuff=ChainProxy(r,proxies,url)
print stuff
