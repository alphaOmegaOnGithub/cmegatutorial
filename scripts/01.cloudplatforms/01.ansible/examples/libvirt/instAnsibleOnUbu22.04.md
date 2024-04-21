grep -E -c '(vmx|svm)' /proc/cpuinfo
sudo apt-get -y update && sudo apt-get -y upgrade
## Enable Password-less Sudo
When the Vagrant libvirt plugin starts or stops a virtual machine, it requires root priviliges to configure NFS. To avoid having to enter your password every time you start or stop a guest, it’s best to enable password-less sudo for your username. To enable password-less sudo, run the following commands:

sudo su -c "echo \"$(id -un) ALL=(ALL) NOPASSWD: ALL\" > /etc/sudoers.d/$(id -un)"
sudo su -c "chmod 0440 /etc/sudoers.d/$(id -un)"

## Install Virtualization
### Install KVM Packages and Start libvirt
sudo apt-get -y install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
sudo systemctl enable --now libvirtd
### optional can use xming for remote x11 UI
sudo apt-get -y install virt-manager

###Add Your Username to Virtualization Groups
sudo adduser "$(id -un)" libvirt
sudo adduser "$(id -un)" kvm

### Log Out and Log Back In
### test
virsh list --all


### Install Vagrant

wget -O- https://apt.releases.hashicorp.com/gpg | sudo gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install vagrant

### Verify that Vagrant

vagrant --version

### Install the Vagrant libvirt Plugin
### Enable “universe” Source Code Repositories
Some of the prerequisites for the Vagrant libvirt plugin are in Ubuntu’s “universe” source code repositories. By default, the source code repositories are disabled (commented out) in /etc/apt/sources.list. To enable the source code repositories, run the following commands:

sudo cp /etc/apt/sources.list /etc/apt/sources.list."$(date +"%F")"
sudo sed -i -e '/^# deb-src.*universe$/s/# //g' /etc/apt/sources.list
sudo apt-get -y update

### Install Prerequisites Needed by the Plugin
sudo apt-get -y install nfs-kernel-server
sudo systemctl enable --now nfs-server
sudo apt-get -y build-dep vagrant ruby-libvirt
sudo apt-get -y install ebtables dnsmasq-base
sudo apt-get -y install libxslt-dev libxml2-dev libvirt-dev zlib1g-dev ruby-dev

### Install the Plugin
vagrant plugin install vagrant-libvirt

## Vagrant public Box catalog
https://app.vagrantup.com/boxes/search


### a python3 
 python3 -m http.server --directory .




