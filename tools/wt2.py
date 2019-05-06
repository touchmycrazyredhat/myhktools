#!/usr/bin/env python3

# mkdir /tmp/xx
# mount -t cifs -o username=yhwls,password='SXrst@)!(7' //12.168.111.22/u01/  /tmp/xx
# sudo sshfs -o allow_other,defer_permissions yhwls@192.167.183.7:/u01/Middleware/user_projects/domains/yh_domain/servers/Server-64352 /mysvn/x3
# sudo umount /usr/local/droplet
# apt install sshfs

# mkdir -p /mysvn/x3
# pip3 install watchdog
# sudo sshfs -o allow_other yhwls@192.167.183.7:/u01/Middleware/user_projects/domains/yh_domain/servers/Server-64352 /mysvn/x3
# SXrst@)!(7
# yhwls@192.167.183.7 
# py3 tools/wt2.py -R -p "*.jsp" --debug-force-polling -d /mysvn
# py3 tools/wt2.py log /mysvn/ -R

import re
import os
import subprocess
import signal

import argh
from watchdog import watchmedo
from watchdog import tricks
from watchdog import utils

class SignalTrick(tricks.Trick):
    def __init__(
        self,
        command,
        patterns=None,
        ignore_patterns=None,
        ignore_directories=False,
        stop_signal=signal.SIGINT,
    ):
        super().__init__(patterns, ignore_patterns, ignore_directories)
        self.command = command
        self.stop_signal = stop_signal
        self.process = None

    def start(self):
        self.process = subprocess.Popen(self.command, preexec_fn=os.setsid)

    def stop(self):
        if self.process is None:
            return

        os.killpg(os.getpgid(self.process.pid), self.stop_signal)

    @utils.echo.echo
    def on_any_event(self, event):
        self.stop()

@argh.arg(
    "command",
    help="""Long-running command to run in a subprocess.
    """,
)
@argh.arg(
    "command_args",
    metavar="arg",
    nargs="*",
    help="""Command arguments.

Note: Use -- before the command arguments, otherwise watchmedo will
try to interpret them.
""",
)
@argh.arg(
    "-d",
    "--directory",
    dest="directories",
    metavar="directory",
    action="append",
    help="Directory to watch. Use another -d or --directory option "
    "for each directory.",
)
@argh.arg(
    "-p",
    "--pattern",
    "--patterns",
    dest="patterns",
    default="*",
    help="matches event paths with these patterns (separated by ;).",
)
@argh.arg(
    "-i",
    "--ignore-pattern",
    "--ignore-patterns",
    dest="ignore_patterns",
    default="",
    help="ignores event paths with these patterns (separated by ;).",
)
@argh.arg(
    "-D",
    "--ignore-directories",
    dest="ignore_directories",
    default=False,
    help="ignores events for directories",
)
@argh.arg(
    "-R",
    "--recursive",
    dest="recursive",
    default=False,
    help="monitors the directories recursively",
)
@argh.arg(
    "--interval",
    "--timeout",
    dest="timeout",
    default=1.0,
    help="use this as the polling interval/blocking timeout",
)
@argh.arg(
    "--signal",
    "-s",
    dest="signal",
    default="SIGUSR1",
    help="send the subprocess this signal (default SIGUSR1)",
)
@argh.arg("--debug-force-polling", default=False, help="[debug] forces polling")
@argh.expects_obj
def send_signal(args):
    """
    Subcommand to start a long-running subprocess and restart it
    on matched events.

    :param args:
        Command line argument options.
    """

    if args.debug_force_polling:
        from watchdog.observers.polling import PollingObserver as Observer
    else:
        from watchdog.observers import Observer

    if not args.directories:
        args.directories = ["."]

    # Allow either signal name or number.
    if re.fullmatch(r"[A-Za-z]+\d?", args.signal):
        stop_signal = getattr(signal, args.signal)
    else:
        stop_signal = int(args.signal)

    # Handle SIGTERM in the same manner as SIGINT so that
    # this program has a chance to stop the child process.
    def handle_sigterm(_signum, _frame):
        raise KeyboardInterrupt()

    signal.signal(signal.SIGTERM, handle_sigterm)

    patterns, ignore_patterns = watchmedo.parse_patterns(
        args.patterns, args.ignore_patterns
    )
    command = [args.command]
    command.extend(args.command_args)
    handler = SignalTrick(
        command=command,
        patterns=patterns,
        ignore_patterns=ignore_patterns,
        ignore_directories=args.ignore_directories,
        stop_signal=stop_signal,
    )
    handler.start()
    observer = Observer(timeout=args.timeout)
    watchmedo.observe_with(observer, handler, args.directories, args.recursive)
    handler.stop()


def main():
    watchmedo.parser.add_commands([send_signal])
    watchmedo.parser.dispatch()


if __name__ == "__main__":
    main()

