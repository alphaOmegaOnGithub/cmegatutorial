#!/bin/bash

# insatll python2
sudo yum -y install python2

# install Enum34 mock nose-parameterized pyyaml
sudo pip2 install Enum34 mock nose-parameterized pyyaml

# install python2-devel
sudo yum -y install python2-devel

# install subprocess32
sudo pip2 install subprocess32

# install fasteners
sudo pip2 install fasteners

# install ps
sudo yum -y install procps

# install protobuf
sudo pip2 install protobuf==3.17.0

# install wheel
sudo pip2 install wheel

# install etcd3
sudo pip2 install etcd3

