import urllib2
import simplejson

def locate(mac, ssid):
    url = "http://www.google.com/loc/json"
    ap = {"mac_address":mac, "ssid":ssid, "signal_strength":-81}
    aps = [ap]
    data = {
        'version': '1.1.0',
        'host': 'www.google.com',
        'request_address': True,
        'wifi_towers': aps,
    }

    jdata = simplejson.dumps(data)
    resp = urllib2.urlopen(url, jdata).read()
    return simplejson.loads(resp)
if __name__ == '__main__':
    print locate('a8:58:40:89:ed:40','a8:58:40:89:ed:40')