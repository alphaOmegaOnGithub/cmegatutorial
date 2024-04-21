#!/usr/bin/bash -x
##
echo "export EDITOR=vim" >> $HOME/.bashrc
###
apt update 
#
apt-get install ca-certificates curl lsb-release software-properties-common 
### add user cmadmin 
useradd -m -s /bin/bash -U cmadmin -u 666 --groups sudo
cp -pr /home/vagrant/.ssh /home/cmadmin/
chown -R cmadmin:cmadmin /home/cmadmin
echo "Defaults:cmadmin !fqdn "           > /etc/sudoers.d/cmadmin
echo "Defaults:cmadmin !requiretty"     >> /etc/sudoers.d/cmadmin
echo "%cmadmin ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers.d/cmadmin
###
curl -fsSL https://get.docker.com -o \
get-docker.sh
sh get-docker.sh
####
usermod -aG docker cmadmin
#
apt-get install x11-apps gnupg
#