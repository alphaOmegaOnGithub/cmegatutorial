# Ansible

This repository contains a collection of playbooks and other scripts that are referenced in my series on Ansible on my [Blog](http://leftasexercise.com/ "Blog"). Roughly, the contents are organized as follows:

* Part I: Basics, this directory contains just a few scripts to quickly bring up test environments
* Part II: This post introduces ad-hoc commands with Ansible and various modules (and there is no corresponding directory in this repository)
* Part III: Playbooks, what they are, how they are structured, and instructions to spin up a test environment locally with Vagrant
* Part IV: Variables and facts, templating with Jinja2
* Part V: Working with inventories and using Docker containers as Ansible hosts
* Part VI: Control structures and roles
* Part VII: Using Ansible with cloud providers
* Part VIII (folder terraform): Using Ansible with Terraform
* Part IX (folder jumphost): Using Ansible with a bastion host

========================== Test run yield =======================================

## cmadmin@cmcse580:~/state/ansible-samples/libvirt$ ansible-playbook -vvvv site.yaml

## ensure the correct python is used 

ansible-playbook -vvvv -i inventory.yml site.yaml -2 -e 'ansible_python_interpreter=/usr/bin/python3'


cat inventory.yml
localhost ansible_connection=local ansible_python_interpreter=/usr/bin/python3

ansible-playbook -vvvv -i inventory.yml site.yaml


cmadmin@cmcse580:~/state/ansible-samples/libvirt$ ansible-playbook -vvvv site.yaml
ansible-playbook [core 2.16.4]
  config file = /etc/ansible/ansible.cfg
  configured module search path = ['/home/cmadmin/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /home/cmadmin/.local/pipx/venvs/ansible-core/lib/python3.11/site-packages/ansible
  ansible collection location = /home/cmadmin/.ansible/collections:/usr/share/ansible/collections
  executable location = /home/cmadmin/.local/bin/ansible-playbook
  python version = 3.11.6 (main, Oct  8 2023, 05:06:43) [GCC 13.2.0] (/home/cmadmin/.local/pipx/venvs/ansible-core/bin/python)
  jinja version = 3.1.3
  libyaml = True
Using /etc/ansible/ansible.cfg as config file
setting up inventory plugins
Loading collection ansible.builtin from
host_list declined parsing /etc/ansible/hosts as it did not pass its verify_file() method
script declined parsing /etc/ansible/hosts as it did not pass its verify_file() method
auto declined parsing /etc/ansible/hosts as it did not pass its verify_file() method
Parsed /etc/ansible/hosts inventory source with ini plugin
redirecting (type: modules) ansible.builtin.virt_pool to community.libvirt.virt_pool
Loading collection community.libvirt from /home/cmadmin/.ansible/collections/ansible_collections/community/libvirt
redirecting (type: modules) ansible.builtin.virt_pool to community.libvirt.virt_pool
redirecting (type: modules) ansible.builtin.virt_net to community.libvirt.virt_net
redirecting (type: modules) ansible.builtin.virt_net to community.libvirt.virt_net
redirecting (type: modules) ansible.builtin.virt to community.libvirt.virt
Loading callback plugin default of type stdout, v2.0 from /home/cmadmin/.local/pipx/venvs/ansible-core/lib/python3.11/site-packages /ansible/plugins/callback/default.py
Skipping callback 'default', as we already have a stdout callback.
Skipping callback 'minimal', as we already have a stdout callback.
Skipping callback 'oneline', as we already have a stdout callback.

PLAYBOOK: site.yaml ***************************************************************************************************************
Positional arguments: site.yaml
verbosity: 4
connection: ssh
become_method: sudo
tags: ('all',)
inventory: ('/etc/ansible/hosts',)
forks: 5
3 plays in site.yaml

PLAY [Preparations] ***************************************************************************************************************

TASK [Gathering Facts] ************************************************************************************************************
task path: /home/cmadmin/state/ansible-samples/libvirt/site.yaml:21
<127.0.0.1> ESTABLISH LOCAL CONNECTION FOR USER: cmadmin
<127.0.0.1> EXEC /bin/sh -c 'echo ~cmadmin && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tm p/ansible-tmp-1710243134.252979-33016-258680784938332 `" && echo ansible-tmp-1710243134.252979-33016-258680784938332="` echo /home/ cmadmin/.ansible/tmp/ansible-tmp-1710243134.252979-33016-258680784938332 `" ) && sleep 0'
Using module file /home/cmadmin/.local/pipx/venvs/ansible-core/lib/python3.11/site-packages/ansible/modules/setup.py
<127.0.0.1> PUT /home/cmadmin/.ansible/tmp/ansible-local-330138dkdi46f/tmplppniiym TO /home/cmadmin/.ansible/tmp/ansible-tmp-171024 3134.252979-33016-258680784938332/AnsiballZ_setup.py
<127.0.0.1> EXEC /bin/sh -c 'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1710243134.252979-33016-258680784938332/ /home/cmadmi n/.ansible/tmp/ansible-tmp-1710243134.252979-33016-258680784938332/AnsiballZ_setup.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '/home/cmadmin/.local/pipx/venvs/ansible-core/bin/python /home/cmadmin/.ansible/tmp/ansible-tmp-1710243 134.252979-33016-258680784938332/AnsiballZ_setup.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c 'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1710243134.252979-33016-258680784938332/ > /dev/null 2 >&1 && sleep 0'
ok: [localhost]

TASK [Load variables] *************************************************************************************************************
task path: /home/cmadmin/state/ansible-samples/libvirt/site.yaml:25
ok: [localhost] => {
    "ansible_facts": {
        "base_image_checksum": "sha256:b566d0eb52b8fd51195cc25ba6bb138f9a9924a29ed4b48a41d7a371f77f5030",
        "base_image_path": "{{playbook_dir}}/state/jammy.qcow2",
        "base_image_url": "http://cloud-images.ubuntu.com/jammy/20240227/jammy-server-cloudimg-amd64.img",
        "network_bridge": "ansible-bridge",
        "network_dhcp_end": "192.168.202.100",
        "network_dhcp_start": "192.168.202.2",
        "network_gateway_ip": "192.168.202.1",
        "network_name": "ansible",
        "pool_dir": "{{state_dir}}/pool",
        "state_dir": "{{playbook_dir}}/state",
        "vm_memory": 1024,
        "vm_name": "test-instance",
        "vm_vcpus": 1,
        "volume_name": "test-volume",
        "volume_pool": "ansible",
        "volume_type": "qcow2"
    },
    "ansible_included_var_files": [
        "/home/cmadmin/state/ansible-samples/libvirt/config.yaml"
    ],
    "changed": false
}

TASK [Make sure that state directory exists] **************************************************************************************
task path: /home/cmadmin/state/ansible-samples/libvirt/site.yaml:28
<127.0.0.1> ESTABLISH LOCAL CONNECTION FOR USER: cmadmin
<127.0.0.1> EXEC /bin/sh -c 'echo ~cmadmin && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tm p/ansible-tmp-1710243136.1363785-33155-149348326567661 `" && echo ansible-tmp-1710243136.1363785-33155-149348326567661="` echo /hom e/cmadmin/.ansible/tmp/ansible-tmp-1710243136.1363785-33155-149348326567661 `" ) && sleep 0'
Using module file /home/cmadmin/.local/pipx/venvs/ansible-core/lib/python3.11/site-packages/ansible/modules/file.py
<127.0.0.1> PUT /home/cmadmin/.ansible/tmp/ansible-local-330138dkdi46f/tmplqa8kszs TO /home/cmadmin/.ansible/tmp/ansible-tmp-171024 3136.1363785-33155-149348326567661/AnsiballZ_file.py
<127.0.0.1> EXEC /bin/sh -c 'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1710243136.1363785-33155-149348326567661/ /home/cmadm in/.ansible/tmp/ansible-tmp-1710243136.1363785-33155-149348326567661/AnsiballZ_file.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '/home/cmadmin/.local/pipx/venvs/ansible-core/bin/python /home/cmadmin/.ansible/tmp/ansible-tmp-1710243 136.1363785-33155-149348326567661/AnsiballZ_file.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c 'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1710243136.1363785-33155-149348326567661/ > /dev/null  2>&1 && sleep 0'
ok: [localhost] => {
    "changed": false,
    "diff": {
        "after": {
            "path": "/home/cmadmin/state/ansible-samples/libvirt/state"
        },
        "before": {
            "path": "/home/cmadmin/state/ansible-samples/libvirt/state"
        }
    },
    "gid": 1000,
    "group": "cmadmin",
    "invocation": {
        "module_args": {
            "_diff_peek": null,
            "_original_basename": null,
            "access_time": null,
            "access_time_format": "%Y%m%d%H%M.%S",
            "attributes": null,
            "follow": true,
            "force": false,
            "group": null,
            "mode": null,
            "modification_time": null,
            "modification_time_format": "%Y%m%d%H%M.%S",
            "owner": null,
            "path": "/home/cmadmin/state/ansible-samples/libvirt/state",
            "recurse": false,
            "selevel": null,
            "serole": null,
            "setype": null,
            "seuser": null,
            "src": null,
            "state": "directory",
            "unsafe_writes": false
        }
    },
    "mode": "0775",
    "owner": "cmadmin",
    "path": "/home/cmadmin/state/ansible-samples/libvirt/state",
    "size": 4096,
    "state": "directory",
    "uid": 1000
}

TASK [Make sure that we have downloaded the base image] ***************************************************************************
task path: /home/cmadmin/state/ansible-samples/libvirt/site.yaml:32
<127.0.0.1> ESTABLISH LOCAL CONNECTION FOR USER: cmadmin
<127.0.0.1> EXEC /bin/sh -c 'echo ~cmadmin && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tm p/ansible-tmp-1710243136.3811119-33180-279906846898856 `" && echo ansible-tmp-1710243136.3811119-33180-279906846898856="` echo /hom e/cmadmin/.ansible/tmp/ansible-tmp-1710243136.3811119-33180-279906846898856 `" ) && sleep 0'
Using module file /home/cmadmin/.local/pipx/venvs/ansible-core/lib/python3.11/site-packages/ansible/modules/get_url.py
<127.0.0.1> PUT /home/cmadmin/.ansible/tmp/ansible-local-330138dkdi46f/tmp8vdkoc_i TO /home/cmadmin/.ansible/tmp/ansible-tmp-171024 3136.3811119-33180-279906846898856/AnsiballZ_get_url.py
<127.0.0.1> EXEC /bin/sh -c 'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1710243136.3811119-33180-279906846898856/ /home/cmadm in/.ansible/tmp/ansible-tmp-1710243136.3811119-33180-279906846898856/AnsiballZ_get_url.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '/home/cmadmin/.local/pipx/venvs/ansible-core/bin/python /home/cmadmin/.ansible/tmp/ansible-tmp-1710243 136.3811119-33180-279906846898856/AnsiballZ_get_url.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c 'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1710243136.3811119-33180-279906846898856/ > /dev/null  2>&1 && sleep 0'
changed: [localhost] => {
    "changed": true,
    "checksum_dest": null,
    "checksum_src": "98bf51f74920724433319a2ff8b96a9aa3c3f821",
    "dest": "/home/cmadmin/state/ansible-samples/libvirt/state/jammy.qcow2",
    "elapsed": 39,
    "gid": 1000,
    "group": "cmadmin",
    "invocation": {
        "module_args": {
            "attributes": null,
            "backup": false,
            "checksum": "sha256:b566d0eb52b8fd51195cc25ba6bb138f9a9924a29ed4b48a41d7a371f77f5030",
            "ciphers": null,
            "client_cert": null,
            "client_key": null,
            "decompress": true,
            "dest": "/home/cmadmin/state/ansible-samples/libvirt/state/jammy.qcow2",
            "force": false,
            "force_basic_auth": false,
            "group": null,
            "headers": null,
            "http_agent": "ansible-httpget",
            "mode": null,
            "owner": null,
            "selevel": null,
            "serole": null,
            "setype": null,
            "seuser": null,
            "timeout": 10,
            "tmp_dest": null,
            "unredirected_headers": [],
            "unsafe_writes": false,
            "url": "http://cloud-images.ubuntu.com/jammy/20240227/jammy-server-cloudimg-amd64.img",
            "url_password": null,
            "url_username": null,
            "use_gssapi": false,
            "use_netrc": true,
            "use_proxy": true,
            "validate_certs": true
        }
    },
    "md5sum": "b3c431b010946b47f9f324d999a8905c",
    "mode": "0664",
    "msg": "OK (648741376 bytes)",
    "owner": "cmadmin",
    "size": 648741376,
    "src": "/home/cmadmin/.ansible/tmp/ansible-tmp-1710243136.3811119-33180-279906846898856/tmpsrj_nit3",
    "state": "file",
    "status_code": 200,
    "uid": 1000,
    "url": "http://cloud-images.ubuntu.com/jammy/20240227/jammy-server-cloudimg-amd64.img"
}

TASK [Determine ID of kvm group] **************************************************************************************************
task path: /home/cmadmin/state/ansible-samples/libvirt/site.yaml:37
<127.0.0.1> ESTABLISH LOCAL CONNECTION FOR USER: cmadmin
<127.0.0.1> EXEC /bin/sh -c 'echo ~cmadmin && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tm p/ansible-tmp-1710243178.9825504-33220-43741781624142 `" && echo ansible-tmp-1710243178.9825504-33220-43741781624142="` echo /home/ cmadmin/.ansible/tmp/ansible-tmp-1710243178.9825504-33220-43741781624142 `" ) && sleep 0'
Using module file /home/cmadmin/.local/pipx/venvs/ansible-core/lib/python3.11/site-packages/ansible/modules/command.py
<127.0.0.1> PUT /home/cmadmin/.ansible/tmp/ansible-local-330138dkdi46f/tmpgljv0gni TO /home/cmadmin/.ansible/tmp/ansible-tmp-171024 3178.9825504-33220-43741781624142/AnsiballZ_command.py
<127.0.0.1> EXEC /bin/sh -c 'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1710243178.9825504-33220-43741781624142/ /home/cmadmi n/.ansible/tmp/ansible-tmp-1710243178.9825504-33220-43741781624142/AnsiballZ_command.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '/home/cmadmin/.local/pipx/venvs/ansible-core/bin/python /home/cmadmin/.ansible/tmp/ansible-tmp-1710243 178.9825504-33220-43741781624142/AnsiballZ_command.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c 'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1710243178.9825504-33220-43741781624142/ > /dev/null 2 >&1 && sleep 0'
changed: [localhost] => {
    "changed": true,
    "cmd": "cat /etc/group | grep \"kvm:\" | awk -F \":\" '{print $3'}\n",
    "delta": "0:00:00.004059",
    "end": "2024-03-12 11:32:59.179351",
    "invocation": {
        "module_args": {
            "_raw_params": "cat /etc/group | grep \"kvm:\" | awk -F \":\" '{print $3'}\n",
            "_uses_shell": true,
            "argv": null,
            "chdir": null,
            "creates": null,
            "executable": null,
            "expand_argument_vars": true,
            "removes": null,
            "stdin": null,
            "stdin_add_newline": true,
            "strip_empty_ends": true
        }
    },
    "msg": "",
    "rc": 0,
    "start": "2024-03-12 11:32:59.175292",
    "stderr": "",
    "stderr_lines": [],
    "stdout": "103",
    "stdout_lines": [
        "103"
    ]
}

TASK [set_fact] *******************************************************************************************************************
task path: /home/cmadmin/state/ansible-samples/libvirt/site.yaml:42
ok: [localhost] => {
    "ansible_facts": {
        "kvm_group_id": "103"
    },
    "changed": false
}

PLAY [Create volume and network] **************************************************************************************************

TASK [Gathering Facts] ************************************************************************************************************
task path: /home/cmadmin/state/ansible-samples/libvirt/site.yaml:45
<127.0.0.1> ESTABLISH LOCAL CONNECTION FOR USER: cmadmin
<127.0.0.1> EXEC /bin/sh -c 'echo ~cmadmin && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tm p/ansible-tmp-1710243179.2511125-33251-105309855229785 `" && echo ansible-tmp-1710243179.2511125-33251-105309855229785="` echo /hom e/cmadmin/.ansible/tmp/ansible-tmp-1710243179.2511125-33251-105309855229785 `" ) && sleep 0'
Using module file /home/cmadmin/.local/pipx/venvs/ansible-core/lib/python3.11/site-packages/ansible/modules/setup.py
<127.0.0.1> PUT /home/cmadmin/.ansible/tmp/ansible-local-330138dkdi46f/tmpffkhhgyy TO /home/cmadmin/.ansible/tmp/ansible-tmp-171024 3179.2511125-33251-105309855229785/AnsiballZ_setup.py
<127.0.0.1> EXEC /bin/sh -c 'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1710243179.2511125-33251-105309855229785/ /home/cmadm in/.ansible/tmp/ansible-tmp-1710243179.2511125-33251-105309855229785/AnsiballZ_setup.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '/home/cmadmin/.local/pipx/venvs/ansible-core/bin/python /home/cmadmin/.ansible/tmp/ansible-tmp-1710243 179.2511125-33251-105309855229785/AnsiballZ_setup.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c 'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1710243179.2511125-33251-105309855229785/ > /dev/null  2>&1 && sleep 0'
ok: [localhost]

TASK [libvirt_volume : Make sure that pool directory exists] **********************************************************************
task path: /home/cmadmin/state/ansible-samples/libvirt/roles/libvirt_volume/tasks/main.yml:5
<127.0.0.1> ESTABLISH LOCAL CONNECTION FOR USER: cmadmin
<127.0.0.1> EXEC /bin/sh -c 'echo ~cmadmin && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tm p/ansible-tmp-1710243181.0156505-33389-56248987684716 `" && echo ansible-tmp-1710243181.0156505-33389-56248987684716="` echo /home/ cmadmin/.ansible/tmp/ansible-tmp-1710243181.0156505-33389-56248987684716 `" ) && sleep 0'
Using module file /home/cmadmin/.local/pipx/venvs/ansible-core/lib/python3.11/site-packages/ansible/modules/file.py
<127.0.0.1> PUT /home/cmadmin/.ansible/tmp/ansible-local-330138dkdi46f/tmpxx4cv4yo TO /home/cmadmin/.ansible/tmp/ansible-tmp-171024 3181.0156505-33389-56248987684716/AnsiballZ_file.py
<127.0.0.1> EXEC /bin/sh -c 'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1710243181.0156505-33389-56248987684716/ /home/cmadmi n/.ansible/tmp/ansible-tmp-1710243181.0156505-33389-56248987684716/AnsiballZ_file.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '/home/cmadmin/.local/pipx/venvs/ansible-core/bin/python /home/cmadmin/.ansible/tmp/ansible-tmp-1710243 181.0156505-33389-56248987684716/AnsiballZ_file.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c 'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1710243181.0156505-33389-56248987684716/ > /dev/null 2 >&1 && sleep 0'
changed: [localhost] => {
    "changed": true,
    "diff": {
        "after": {
            "path": "/home/cmadmin/state/ansible-samples/libvirt/state/pool",
            "state": "directory"
        },
        "before": {
            "path": "/home/cmadmin/state/ansible-samples/libvirt/state/pool",
            "state": "absent"
        }
    },
    "gid": 1000,
    "group": "cmadmin",
    "invocation": {
        "module_args": {
            "_diff_peek": null,
            "_original_basename": null,
            "access_time": null,
            "access_time_format": "%Y%m%d%H%M.%S",
            "attributes": null,
            "follow": true,
            "force": false,
            "group": null,
            "mode": null,
            "modification_time": null,
            "modification_time_format": "%Y%m%d%H%M.%S",
            "owner": null,
            "path": "/home/cmadmin/state/ansible-samples/libvirt/state/pool",
            "recurse": false,
            "selevel": null,
            "serole": null,
            "setype": null,
            "seuser": null,
            "src": null,
            "state": "directory",
            "unsafe_writes": false
        }
    },
    "mode": "0775",
    "owner": "cmadmin",
    "path": "/home/cmadmin/state/ansible-samples/libvirt/state/pool",
    "size": 4096,
    "state": "directory",
    "uid": 1000
}

TASK [libvirt_volume : Create storage pool] ***************************************************************************************

task path: /home/cmadmin/state/ansible-samples/libvirt/roles/libvirt_volume/tasks/main.yml:9
File lookup using /home/cmadmin/state/ansible-samples/libvirt/roles/libvirt_volume/templates/pool.xml.j2 as file
redirecting (type: modules) ansible.builtin.virt_pool to community.libvirt.virt_pool
<127.0.0.1> ESTABLISH LOCAL CONNECTION FOR USER: cmadmin
<127.0.0.1> EXEC /bin/sh -c 'echo ~cmadmin && sleep 0'
<127.0.0.1> EXEC /bin/sh -c '( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tm p/ansible-tmp-1710243181.2017283-33414-28505063105643 `" && echo ansible-tmp-1710243181.2017283-33414-28505063105643="` echo /home/ cmadmin/.ansible/tmp/ansible-tmp-1710243181.2017283-33414-28505063105643 `" ) && sleep 0'
redirecting (type: modules) ansible.builtin.virt_pool to community.libvirt.virt_pool
Using module file /home/cmadmin/.ansible/collections/ansible_collections/community/libvirt/plugins/modules/virt_pool.py
<127.0.0.1> PUT /home/cmadmin/.ansible/tmp/ansible-local-330138dkdi46f/tmps9utx6e2 TO /home/cmadmin/.ansible/tmp/ansible-tmp-171024 3181.2017283-33414-28505063105643/AnsiballZ_virt_pool.py
<127.0.0.1> EXEC /bin/sh -c 'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1710243181.2017283-33414-28505063105643/ /home/cmadmi n/.ansible/tmp/ansible-tmp-1710243181.2017283-33414-28505063105643/AnsiballZ_virt_pool.py && sleep 0'

<127.0.0.1> EXEC /bin/sh -c '/home/cmadmin/.local/pipx/venvs/ansible-core/bin/python /home/cmadmin/.ansible/tmp/ansible-tmp-1710243 181.2017283-33414-28505063105643/AnsiballZ_virt_pool.py && sleep 0'
<127.0.0.1> EXEC /bin/sh -c 'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1710243181.2017283-33414-28505063105643/ > /dev/null 2 >&1 && sleep 0'

fatal: [localhost]: FAILED! => {
    "changed": false,
    "invocation": {
        "module_args": {
            "autostart": null,
            "command": "define",
            "mode": null,
            "name": "ansible",
            "state": null,
            "uri": "qemu:///system",
            "xml": "<pool type='dir'>\n  <name>ansible</name>\n  <source>\n  </source>\n  <target>\n    <path>/home/cmadmin/state/a nsible-samples/libvirt/state/pool</path>\n    <permissions>\n      <mode>0755</mode>\n      <owner>0</owner>\n      <group>0</group >\n    </permissions>\n  </target>\n</pool>\n"
        }
    },
    "msg": "The `libvirt` module is not importable. Check the requirements."
}

PLAY RECAP ************************************************************************************************************************
localhost                  : ok=8    changed=3    unreachable=0    failed=1    skipped=0    rescued=0    ignored=0