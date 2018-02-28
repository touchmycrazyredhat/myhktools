rm ins.tmp
find . -name "*.js" -exec grep -h -R  -Eo "require\(['\"]([^'\"\.\/]+?)['\"]\)" {} \; >>ins.tmp
grep -Eo  "['\"]([^'\"\.\/]+?)['\"]" ins.tmp |sed 's/"//g'|sed "s/'//g"|sort|uniq >>ins1.tmp
rm ins.tmp
cat ins1.tmp | awk '{print "npm i -g "$1}' > install.sh
rm ins1.tmp
chmod 555 install.sh
git add install.sh
git commit -m "update install.sh" install.sh

