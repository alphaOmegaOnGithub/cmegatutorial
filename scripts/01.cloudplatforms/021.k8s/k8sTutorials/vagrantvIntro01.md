Provision a virtual machine and install HTTPd

Prerequisites

    Install the latest version of Vagrant.
    Install a virtualization product such as: VirtualBox, VMware Fusion, or Hyper-V.
	
	Create an HTML directory

On your local machine, create a directory from where Apache will serve your content.

 mkdir html
 
 Next, create the file index.html in the new directory with the contents for the index page.

<!DOCTYPE html>
<html>
  <body>
    <h1>Get started with Vagrant!</h1>
  </body>
</html>

	Write a provisioning script

Set up Apache with a shell script. Create the following shell script and save it as bootstrap.sh in the same directory as your Vagrantfile.

#!/usr/bin/env bash

apt-get update
apt-get install -y apache2
if ! [ -L /var/www ]; then
  rm -rf /var/www
  ln -fs /vagrant /var/www
fi


Configure Vagrant

Next, edit the Vagrantfile to use the script when you provision the environment.

Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"
  config.vm.provision :shell, path: "bootstrap.sh"
end

Deploy the webserver

Use vagrant up to create your machine and have Vagrant automatically provision it.

 vagrant up
 
 
SSH into the guest machine.

 vagrant ssh

Now get the HTML file that was created during provisioning.

vagrant@vagrant:~

 wget -qO- 127.0.0.1
<!DOCTYPE html>
<html>
  <body>
    <h1>Get started with Vagrant!</h1>
  </body>
</html>

Logout of your SSH session.

vagrant@vagrant:~

 logout
Connection to 127.0.0.1 closed.

Next steps

For complex provisioning scripts, it may be more efficient to package a custom Vagrant box with those packages pre-installed instead of building them each time. Learn more in the packaging custom boxes documentation.

You have successfully provisioned your first virtual machine with Vagrant. Read on to learn about networking.

Configure the network

    2min
    |
    Vagrant

    Vagrant

Reference this often? Create an account to bookmark tutorials.

In this tutorial, you will use Vagrant's networking features to provide access to the guest machine from your host machine.
Prerequisites

In the previous tutorial, Provision a Virtual Machine, you deployed a web server with the ability to modify files from your host and have them automatically synced to the guest. We recommend that you complete the previous tutorial, however, you can also get started if you have the following prerequisites.

## Configure port forwarding

Port forwarding allows you to specify ports on the guest machine to share via a port on the host machine. This allows you to access a port on your own machine, but actually have all the network traffic forwarded to a specific port on the guest machine.

To set up a forwarded port so you can access Apache on your guest, add the config.vm.network parameter to your Vagrantfile. Below is the full file with port forwarding.

Vagrant.configure("2") do |config|
  config.vm.box = "hashicorp/bionic64"
  config.vm.provision :shell, path: "bootstrap.sh"
  config.vm.network :forwarded_port, guest: 80, host: 4567
end

Reload so that these changes can take effect.

 vagrant reload

## Access the served files

Once the machine has loaded, you can access http://127.0.0.1:4567 in your browser. You will find a web page that is being served from the guest virtual machine.

## Next steps

Vagrant also has other forms of networking, allowing you to assign a static IP address to the guest machine, or to bridge the guest machine onto an existing network. If you are interested in other options, read the networking page.
https://developer.hashicorp.com/vagrant/docs/networking

You have successfully configured networking for your virtual machine using Vagrant. Read on to learn about setting up shares with Vagrant.

## Explore other providers

### Install a new provider

Read the documentation of each provider for more information on how to set it them up.

## Boot with the new provider

Once you have a provider installed, you do not need to make any modifications to your Vagrantfile; just run vagrant up with the proper provider and Vagrant will do the rest.

 vagrant up --provider=vmware_desktop
 
 For more information on providers, read the full documentation on providers.
 https://developer.hashicorp.com/vagrant/docs/providers

## Synced Folders

Synced folders enable Vagrant to sync a folder on the host machine to the guest machine, allowing you to continue working on your project's files on your host machine, but use the resources in the guest machine to compile or run your project.

By default, Vagrant will share your project directory (the directory with the Vagrantfile) to /vagrant.

## Basic Usage
Configuration

Synced folders are configured within your Vagrantfile using the config.vm.synced_folder method. Usage of the configuration directive is very simple:

Vagrant.configure("2") do |config|
  # other config here

  config.vm.synced_folder "src/", "/srv/website"
end

The first parameter is a path to a directory on the host machine. If the path is relative, it is relative to the project root. The second parameter must be an absolute path of where to share the folder within the guest machine. This folder will be created (recursively, if it must) if it does not exist. By default, Vagrant mounts the synced folders with the owner/group set to the SSH user and any parent folders set to root.

Enabling

Synced folders are automatically setup during vagrant up and vagrant reload.
Disabling

Synced folders can be disabled by adding the disabled option to any definition:

Vagrant.configure("2") do |config|
  config.vm.synced_folder "src/", "/srv/website", disabled: true
end

Disabling the default /vagrant share can be done as follows:

config.vm.synced_folder ".", "/vagrant", disabled: true


Modifying the Owner/Group

Sometimes it is preferable to mount folders with a different owner/group than the default SSH user. Keep in mind that these options will only affect the synced folder itself. If you want to modify the owner/group of the synced folder's parent folders use a script. It is possible to set these options:

config.vm.synced_folder "src/", "/srv/website",
  owner: "root", group: "root"

NOTE: Owner and group IDs defined within mount_options will have precedence over the owner and group options.

For example, given the following configuration:

config.vm.synced_folder ".", "/vagrant", owner: "vagrant",
  group: "vagrant", mount_options: ["uid=1234", "gid=1234"]

the mounted synced folder will be owned by the user with ID 1234 and the group with ID 1234. The owner and group options will be ignored.
Symbolic Links

Support for symbolic links across synced folder implementations and host/guest combinations is not consistent. Vagrant does its best to make sure symbolic links work by configuring various hypervisors (such as VirtualBox), but some host/guest combinations still do not work properly. This can affect some development environments that rely on symbolic links.

The recommendation is to make sure to test symbolic links on all the host/guest combinations you sync folders on if this is important to you.