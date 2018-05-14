xxx# mac os 系统完美命令大全
author: M.T.X. 2018-05-14 hktalent@qq.com 
<hr>
## other awesome-macos-command-line
https://github.com/hktalent/awesome-macos-command-line


## brew install
```
xcode-select --install
cd /usr/local/
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew

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
## base64编码、解码，在后渗透中编码命令很有用
```
base64 -D -i gfwlist.txt
cat ok.txt|base64
```
## 查看当前ip
```
ipconfig getifaddr en0
```
## 显示网络配置
```
scselect
```
## 设置静态ip
```
networksetup -setmanual "Ethernet" 192.168.2.100 255.255.255.0 192.168.2.1
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
md5 ysoserial-master.jar 
openssl md5 ysoserial-master.jar 
openssl sha1 ysoserial-master.jar
openssl sha512 ysoserial-master.jar 
```
## 防火墙命令
```
man pfctl
sudo pfctl -t badhosts -T add 192.168.24.180
sudo pfctl -t badhosts -T show
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /usr/local/bin/node
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /usr/bin/ruby
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Users/xxx/.rvm/rubies/ruby-2.4.3/bin/ruby
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Users/xxx/.rvm/rubies/ruby-2.4.1/bin/ruby

sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp /Users/xxx/.rvm/rubies/ruby-2.4.3/bin/ruby
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
## 发现sniffer的人
```
brew install nmap
nmap --script=sniffer-detect 192.168.24.0/24
```

## 防止ARP中间人攻击、设置静态mac 地址
```
sudo arp -s 192.168.24.1 84:5b:12:4a:bc:3a
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
/Users/xxx/Library/Containers/com.tencent.Foxmail
com.tencent.qq
com.tencent.xinWeChat
com.tencent.QQMusicMac

sudo mv /Users/`whoami`/Library/Containers/com.tencent.Foxmail /Volumes/mtx_hktalent/`whoami`/
ln -s /Volumes/mtx_hktalent/`whoami`/com.tencent.Foxmail /Users/`whoami`/Library/Containers/com.tencent.Foxmail 

sudo mv /Users/`whoami`/Library/Containers/com.tencent.xinWeChat /Volumes/mtx_hktalent/`whoami`/
ln -s /Volumes/mtx_hktalent/xxx/com.tencent.xinWeChat /Users/`whoami`/Library/Containers/com.tencent.xinWeChat

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
lrwxr-xr-x  1 xxx  staff  36 Aug  7  2016 /opt/local/var/macports -> /Volumes/BOOK/`whoami`/local/macports
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
cd /Users/xxx/safe/metasploit-framework;./msfupdate;bundle install;gem update --system;gem update
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

python /Users/xxx/safe/top20/sqlmap-dev/sqlmap.py --update
```
### 更新kali中openvas;更新kali linux
```
apt-get autoclean ;  apt-get update ; apt-get upgrade -y ; apt-get dist upgrade -y
openvas-nvt-sync
apt-get update;apt-get upgrade;apt-get dist-upgrade;apt-get autoclean
```
### brew自身更新和更新所有软件
```
sudo chown -R xxx:wheel /usr/local/Homebrew
cd /usr/local && sudo chown -R xxx:staff .
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
cd /Users/xxx/safe;
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
cd /Users/xxx/safe/metasploit-framework;rvm --default use 2.3.1;./msfupdate
cd /Users/xxx/safe/metasploit-framework;./msfupdate
bundle update
env ARCHFLAGS="-arch x86_64" bundle install
env ARCHFLAGS="-arch i386" gem install pg
env ARCHFLAGS="-arch i386 -arch x86_64" gem install pg
```