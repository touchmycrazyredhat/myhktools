rm ins.tmp
find . -name "*.js" -exec grep -h -R  -Eo "require\(['\"]([^\.][^'\"\/]+?)['\"]\)" {} \; >>ins.tmp
grep -Eo  "['\"]([^'\"\.\/]+?)['\"]" ins.tmp |sed 's/"//g'|sed "s/'//g"|sort|uniq >>ins1.tmp
rm ins.tmp
ls -1 /usr/local/lib/node_modules/ >ins3.tmp
grep -F -f ins3.tmp ins1.tmp| sort | uniq > ins4.tmp
chmod 777 install.sh
cat ins4.tmp | awk '{print "npm i -g "$1}' > install.sh
rm ins1.tmp
rm ins4.tmp
rm ins3.tmp
chmod 555 install.sh
git add install.sh
git commit -m "update install.sh" .

