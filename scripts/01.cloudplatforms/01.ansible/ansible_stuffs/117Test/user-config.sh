#!/bin/bash -x

echo "export EDITOR=vim" >> $HOME/.bashrc
## add kevin
useradd -m -s /bin/bash -U cmadmin -u 666 --groups wheel
cp -pr /home/vagrant/.ssh /home/cmadmin/
chown -R cmadmin:cmadmin /home/cmadmin
echo "%cmadmin ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/cmadmin
