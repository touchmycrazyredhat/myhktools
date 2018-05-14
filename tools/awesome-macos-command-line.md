# mac os 系统完美命令大全
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
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Users/xiatian/.rvm/rubies/ruby-2.4.3/bin/ruby
sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Users/xiatian/.rvm/rubies/ruby-2.4.1/bin/ruby

sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp /Users/xiatian/.rvm/rubies/ruby-2.4.3/bin/ruby
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

