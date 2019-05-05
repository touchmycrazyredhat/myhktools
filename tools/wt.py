#!/usr/bin/env python3

# mkdir /tmp/xx
# mount -t cifs -o username=yhwls,password='SXrst@)!(7' //12.168.111.22/u01/  /tmp/xx
# sudo sshfs -o allow_other,defer_permissions yhwls@192.167.183.7:/u01/Middleware/user_projects/domains/yh_domain/servers/Server-64352 /mysvn/x3
# sudo sshfs -o allow_other yhwls@192.167.183.7:/u01/Middleware/user_projects/domains/yh_domain/servers/Server-64352 /mysvn/x3
# sudo umount /usr/local/droplet
# yhwls@192.167.183.7 
# SXrst@)!(7
# pip3 install watchdog

from watchdog.observers import Observer
from watchdog.events import *
import time

class FileEventHandler(FileSystemEventHandler):
    def __init__(self):
        FileSystemEventHandler.__init__(self)

    def on_moved(self, event):
        if event.is_directory:
            print("directory moved from {0} to {1}".format(event.src_path,event.dest_path))
        else:
            print("file moved from {0} to {1}".format(event.src_path,event.dest_path))

    def on_created(self, event):
        if event.is_directory:
            print("directory created:{0}".format(event.src_path))
        else:
            print("file created:{0}".format(event.src_path))

    def on_deleted(self, event):
        if event.is_directory:
            print("directory deleted:{0}".format(event.src_path))
        else:
            print("file deleted:{0}".format(event.src_path))

    def on_modified(self, event):
        if event.is_directory:
            print("directory modified:{0}".format(event.src_path))
        else:
            print("file modified:{0}".format(event.src_path))

if __name__ == "__main__":
    observer = Observer()
    event_handler = FileEventHandler()
    observer.schedule(event_handler,"/mysvn/x3",True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()


