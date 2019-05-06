#!/usr/bin/env python3
# py3 tools/wt3.py shell-command --patterns="*.jsp;*.jspx" --recursive --command='echo "${watch_src_path}"' /mysvn/ 
# pip3 install watchdog;watchmedo shell-command --patterns="*.jsp;*.jspx" --recursive --command='echo "${watch_src_path}"' /mysvn/

import sys
import time
import logging
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler

if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')
    path = sys.argv[1] if len(sys.argv) > 1 else '.'
    event_handler = LoggingEventHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
