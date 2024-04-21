#!/bin/bash -x

export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get -y install git curl
# install stuff, configure env, etc

su -c "source /home/cmadmin/vagrant/user-config.sh" vagrant
