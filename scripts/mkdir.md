 Docker image registry
 
 docker push cmmydockerid/igs-image-registry:step-ca
The push refers to repository [docker.io/cmmydockerid/igs-image-registry]
558e1c55cb0f: Pushed
9f06ed519e66: Mounted from smallstep/step-ca
cdc85b335b14: Mounted from smallstep/step-ca
e85bd79efbdf: Mounted from smallstep/step-ca
5f70bf18a086: Mounted from smallstep/step-ca
5c2021f0e5fb: Mounted from smallstep/step-ca
352fa0354540: Mounted from smallstep/step-ca
d4fc045c9e3a: Mounted from smallstep/step-ca
step-ca: digest: sha256:9ab4b8d2f9f981aa3395a414f81df766708b76f03a53511ecd3bf1fd67b29dfc size: 1995

gitlab registry 
 With the Container Registry, every project can have its own space to store its Docker images. More Information
CLI Commands

If you are not already logged in, you need to authenticate to the Container Registry by using your GitLab username and password. If you have Two-Factor Authentication enabled, use a Personal Access Token instead of a password.

You can add an image to this registry with the following commands:
docker login registry.gitlab.com
docker build -t registry.gitlab.com/igaas/igaas .
docker push registry.gitlab.com/igaas/igaas

mkdir -p provisioning/{group_vars,roles/{lb{defaults,handlers,files,molecule/default},tasks,template},web,app,db,net,storage}}/

##  mkdir -p provisioning/{group_vars,roles/lb/{defaults,handlers,files,molecule/default,tasks,template}}/
## 
### cmadmin@cmcse580:~/test$ mkdir -p provisioning/{group_vars,roles/{web,app,db,network,storage,lb/{defaults,handlers,files,molecule/default,tasks,template}}}/
### cmadmin@cmcse580:~/test$ tree
.
└── provisioning
    ├── group_vars
    └── roles
        ├── app
        ├── db
        ├── lb
        │   ├── defaults
        │   ├── files
        │   ├── handlers
        │   ├── molecule
        │   │   └── default
        │   ├── tasks
        │   └── template
        ├── network
        ├── storage
        └── web

17 directories, 0 files
.
|-- Vagrantfile
|-- provisioning
|   |-- group_vars
|           |-- all
|   |-- roles
|           ─ minio
│   │   		├── defaults
│   │   │   		└── main.yml
│   │   		├── handlers
                 	└── main.yml
│   │   		├── files
                 	└── motd.txt
│   │   		├── molecule
│   │   │   		└── default
│   │   │       		├── molecule.yml
│   │   │       		├── side_effect.yml
│   │   │       		├── verify_stopped.yml
│   │   │       		└── verify.yml
│   │   		└── tasks
                 		└── main.yml
│   │   		└── templates
                 		└── mytemplate.j2		
				│       ├── bookmarks.yaml
				│       ├── docker.yaml
				│       ├── services.yaml
				│       ├── settings.yaml
				│       └── widgets.yaml

|           |-- foo
|   |-- playbook.yml

### example docker install playbook 
---
- hosts: all
  become: yes

  vars:
    docker_release_channel: stable
	docker_install_compose_plugin: true
    docker_users:
    - ross
    
  roles:
    - ansible-role-docker
This entry is 4 of 10 in the Linux KVM Cloud Computing/VM Tutorial series. Keep reading the rest of the series:

    Install KVM on Ubuntu 16.04 LTS Headless Server
    Reset root password for Linux KVM VM https://www.cyberciti.biz/faq/how-to-reset-forgotten-root-password-for-linux-kvm-qcow2-image-vm/
    Clone existing KVM virtual machine images on Linux  https://www.cyberciti.biz/faq/how-to-clone-existing-kvm-virtual-machine-images-on-linux/
    Reset a KVM clone virtual Machines with virt-sysprep on Linux https://www.cyberciti.biz/faq/reset-a-kvm-clone-virtual-machines-with-virt-sysprep-on-linux/
    KVM forward ports to guests VM with UFW on Linux   https://www.cyberciti.biz/faq/kvm-forward-ports-to-guests-vm-with-ufw-on-linux/
    Create VM using the qcow2 image file in KVM https://www.cyberciti.biz/faq/create-vm-using-the-qcow2-image-file-in-kvm/
    CentOS 8 KVM installation and configuration 
    Ubuntu 20.04 KVM installation and configuration https://www.cyberciti.biz/faq/how-to-install-kvm-on-ubuntu-20-04-lts-headless-server/

View related articles:

    How to Configure GitLab FreeIPA Authentication https://computingforgeeks.com/how-to-configure-gitlab-freeipa-authentication/
    How to Manage Users and Roles in Jenkins https://computingforgeeks.com/manage-users-and-roles-in-jenkins/
    Configure Jenkins behind Nginx reverse proxy and Let’s Encrypt SSL https://computingforgeeks.com/configure-jenkins-behind-nginx-reverse-proxy-and-lets-encrypt-ssl/

NGINX Unit an Universal web app server  https://unit.nginx.org/howto/nextcloud/ 
NGINX Unit is a lightweight and versatile application runtime that provides the essential components for your web application as a single open-source server: running application code (including WebAssembly), serving static assets, handling TLS and request routing.

# Open Source Docker Registry 
	https://github.com/quay/quay/tree/master
	Project Quay builds, stores, and distributes your container images.

 ## High-level features include:

  -  Docker Registry Protocol v2 https://docs.docker.com/registry/spec/api/
  -  Docker Manifest Schema v2.1, v2.2
  -  AppC Image Discovery via on-demand transcoding
  -  Image Squashing via on-demand transcoding
  -  Authentication provided by LDAP, Keystone, OIDC, Google, and GitHub
  -  ACLs, team management, and auditability logs
  -  Geo-replicated storage provided by local filesystems, S3, GCS, Swift, and Ceph https://aws.amazon.com/s3
  -  Continuous Integration integrated with GitHub, Bitbucket, GitLab, and git https://developer.github.com/v3/oauth
  -  Security Vulnerability Analysis via Clair
  -  Swagger-compliant HTTP API  http://swagger.io/


	Getting Started
    Explore a live instance of Project Quay hosted at Quay.io  https://quay.io/
    Watch talks given about Project Quay https://github.com/quay/quay/blob/master/docs/talks.md
    Review the documentation for Red Hat Quay
    Get up and running with our getting started guide for developing or deploying Quay https://github.com/quay/quay/blob/master/docs/getting-started.md
    Deploy on Kubernetes using the Quay Operator https://github.com/quay/quay-operator

	
# OpenSSL create certificate chain [Root & Intermediate CA]
	https://www.golinuxcloud.com/openssl-create-certificate-chain-linux/

Topics we will cover hide
##Root vs Intermediate Certificate
## Pre-requisites: Install OpenSSL
## OpenSSL encrypted data with salted password (Optional)
### Step 1: Create OpenSSL Root CA directory structure
### Step 2: Configure openssl.cnf for Root and Intermediate CA Certificate
### Step 3: Generate the root CA key pair and certificate
### Step 4: Generate the intermediate CA key pair and certificate
### Step 5: Generate OpenSSL Create Certificate Chain (Certificate Bundle)
### Step 6: Generate and sign server certificate using Intermediate CA
### Bonus Tip: Signing and Revoking a certificate using Intermediate CA
### Conclusion
### References
yum -y install openssl
mkdir -p ~/myCA/rootCA/{certs,crl,newcerts,private,csr}
mkdir -p ~/myCA/intermediateCA/{certs,crl,newcerts,private,csr}
echo 1000 > ~/myCA/rootCA/serial
echo 1000 > ~/myCA/intermediateCA/serial
touch ~/myCA/rootCA/index.txt
touch ~/myCA/intermediateCA/index.txt
├── intermediateCA
│   ├── certs
│   ├── crl
│   ├── csr
│   ├── crlnumber
│   ├── index.txt
│   ├── newcerts
│   ├── private
│   └── serial
└── rootCA
    ├── certs
    ├── crl
    ├── csr
    ├── crlnumber
    ├── index.txt
    ├── newcerts
    ├── private
    └── serial

10 directories, 6 files
Step 2: Configure openssl.cnf for Root and Intermediate CA Certificate
We will create 2 separate openssl.cnf file (each for root and intermediate CA).
Here is our openssl_root.cnf file:
[ ca ]                                                   # The default CA section
default_ca = CA_default                                  # The default CA name

[ CA_default ]                                           # Default settings for the CA
dir               = /root/myCA/rootCA                    # CA directory
certs             = $dir/certs                           # Certificates directory
crl_dir           = $dir/crl                             # CRL directory
new_certs_dir     = $dir/newcerts                        # New certificates directory
database          = $dir/index.txt                       # Certificate index file
serial            = $dir/serial                          # Serial number file
RANDFILE          = $dir/private/.rand                   # Random number file
private_key       = $dir/private/ca.key.pem              # Root CA private key
certificate       = $dir/certs/ca.cert.pem               # Root CA certificate
crl               = $dir/crl/ca.crl.pem                  # Root CA CRL
crlnumber         = $dir/crlnumber                       # Root CA CRL number
crl_extensions    = crl_ext                              # CRL extensions
default_crl_days  = 30                                   # Default CRL validity days
default_md        = sha256                               # Default message digest
preserve          = no                                   # Preserve existing extensions
email_in_dn       = no                                   # Exclude email from the DN
name_opt          = ca_default                           # Formatting options for names
cert_opt          = ca_default                           # Certificate output options
policy            = policy_strict                        # Certificate policy
unique_subject    = no                                   # Allow multiple certs with the same DN

[ policy_strict ]                                        # Policy for stricter validation
countryName             = match                          # Must match the issuer's country
stateOrProvinceName     = match                          # Must match the issuer's state
organizationName        = match                          # Must match the issuer's organization
organizationalUnitName  = optional                       # Organizational unit is optional
commonName              = supplied                       # Must provide a common name
emailAddress            = optional                       # Email address is optional

[ req ]                                                  # Request settings
default_bits        = 2048                               # Default key size
distinguished_name  = req_distinguished_name             # Default DN template
string_mask         = utf8only                           # UTF-8 encoding
default_md          = sha256                             # Default message digest
prompt              = no                                 # Non-interactive mode

[ req_distinguished_name ]                               # Template for the DN in the CSR
countryName                     = Country Name (2 letter code)
stateOrProvinceName             = State or Province Name (full name)
localityName                    = Locality Name (city)
0.organizationName              = Organization Name (company)
organizationalUnitName          = Organizational Unit Name (section)
commonName                      = Common Name (your domain)
emailAddress                    = Email Address

[ v3_ca ]                                           # Root CA certificate extensions
subjectKeyIdentifier = hash                         # Subject key identifier
authorityKeyIdentifier = keyid:always,issuer        # Authority key identifier
basicConstraints = critical, CA:true                # Basic constraints for a CA
keyUsage = critical, keyCertSign, cRLSign           # Key usage for a CA

[ crl_ext ]                                         # CRL extensions
authorityKeyIdentifier = keyid:always,issuer        # Authority key identifier

[ v3_intermediate_ca ]
subjectKeyIdentifier = hash
authorityKeyIdentifier = keyid:always,issuer
basicConstraints = critical, CA:true, pathlen:0
keyUsage = critical, digitalSignature, cRLSign, keyCertSign

Here is our openssl_intermediate.cnf file:
[ ca ]                           # The default CA section
default_ca = CA_default          # The default CA name

[ CA_default ]                                           # Default settings for the intermediate CA
dir               = /root/myCA/intermediateCA            # Intermediate CA directory
certs             = $dir/certs                           # Certificates directory
crl_dir           = $dir/crl                             # CRL directory
new_certs_dir     = $dir/newcerts                        # New certificates directory
database          = $dir/index.txt                       # Certificate index file
serial            = $dir/serial                          # Serial number file
RANDFILE          = $dir/private/.rand                   # Random number file
private_key       = $dir/private/intermediate.key.pem    # Intermediate CA private key
certificate       = $dir/certs/intermediate.cert.pem     # Intermediate CA certificate
crl               = $dir/crl/intermediate.crl.pem        # Intermediate CA CRL
crlnumber         = $dir/crlnumber                       # Intermediate CA CRL number
crl_extensions    = crl_ext                              # CRL extensions
default_crl_days  = 30                                   # Default CRL validity days
default_md        = sha256                               # Default message digest
preserve          = no                                   # Preserve existing extensions
email_in_dn       = no                                   # Exclude email from the DN
name_opt          = ca_default                           # Formatting options for names
cert_opt          = ca_default                           # Certificate output options
policy            = policy_loose                         # Certificate policy

[ policy_loose ]                                         # Policy for less strict validation
countryName             = optional                       # Country is optional
stateOrProvinceName     = optional                       # State or province is optional
localityName            = optional                       # Locality is optional
organizationName        = optional                       # Organization is optional
organizationalUnitName  = optional                       # Organizational unit is optional
commonName              = supplied                       # Must provide a common name
emailAddress            = optional                       # Email address is optional

[ req ]                                                  # Request settings
default_bits        = 2048                               # Default key size
distinguished_name  = req_distinguished_name             # Default DN template
string_mask         = utf8only                           # UTF-8 encoding
default_md          = sha256                             # Default message digest
x509_extensions     = v3_intermediate_ca                 # Extensions for intermediate CA certificate

[ req_distinguished_name ]                               # Template for the DN in the CSR
countryName                     = Country Name (2 letter code)
stateOrProvinceName             = State or Province Name
localityName                    = Locality Name
0.organizationName              = Organization Name
organizationalUnitName          = Organizational Unit Name
commonName                      = Common Name
emailAddress                    = Email Address

[ v3_intermediate_ca ]                                      # Intermediate CA certificate extensions
subjectKeyIdentifier = hash                                 # Subject key identifier
authorityKeyIdentifier = keyid:always,issuer                # Authority key identifier
basicConstraints = critical, CA:true, pathlen:0             # Basic constraints for a CA
keyUsage = critical, digitalSignature, cRLSign, keyCertSign # Key usage for a CA

[ crl_ext ]                                                 # CRL extensions
authorityKeyIdentifier=keyid:always                         # Authority key identifier

[ server_cert ]                                             # Server certificate extensions
basicConstraints = CA:FALSE                                 # Not a CA certificate
nsCertType = server                                         # Server certificate type
keyUsage = critical, digitalSignature, keyEncipherment      # Key usage for a server cert
extendedKeyUsage = serverAuth                               # Extended key usage for server authentication purposes (e.g., TLS/SSL servers).
authorityKeyIdentifier = keyid,issuer                       # Authority key identifier linking the certificate to the issuer's public key.

### Step 3: Generate the root CA key pair and certificate
Create an RSA key pair for the root CA without a password:
bash

openssl genrsa -out ~/myCA/rootCA/private/ca.key.pem 4096
chmod 400 ~/myCA/rootCA/private/ca.key.pem
openssl rsa -noout -text -in ~/myCA/rootCA/private/ca.key.pem
openssl req -config openssl_root.cnf -key ~/myCA/rootCA/private/ca.key.pem -new -x509 -days 7300 -sha256 -extensions v3_ca -out ~/myCA/rootCA/certs/ca.cert.pem -subj "/C=US/ST=California/L=San Francisco/O=Example Corp/OU=IT Department/CN=Root CA"
chmod 444 ~/myCA/rootCA/certs/ca.cert.pem
openssl x509 -noout -text -in ~/myCA/rootCA/certs/ca.cert.pem

### Step 4: Generate the intermediate CA key pair and certificate
Create an RSA key pair for the intermediate CA without a password and secure the file by removing permissions to groups and others:
bash
openssl genrsa -out ~/myCA/intermediateCA/private/intermediate.key.pem 4096
chmod 400 ~/myCA/intermediateCA/private/intermediate.key.pem

Create the intermediate CA certificate signing request (CSR). If you are not familiar with the content to be provided with CSR then you should read Things to consider when creating CSR with OpenSSL
bash

openssl req -config openssl_intermediate.cnf -key ~/myCA/intermediateCA/private/intermediate.key.pem -new -sha256 -out ~/myCA/intermediateCA/certs/intermediate.csr.pem -subj "/C=US/ST=California/L=San Francisco/O=Example Corp/OU=IT Department/CN=Intermediate CA"

Sign the intermediate CSR with the root CA key:
Sign the intermediate CSR with the root CA key:
bash

openssl ca -config openssl_root.cnf -extensions v3_intermediate_ca -days 3650 -notext -md sha256 -in ~/myCA/intermediateCA/certs/intermediate.csr.pem -out ~/myCA/intermediateCA/certs/intermediate.cert.pem

chmod 444 ~/myCA/intermediateCA/certs/intermediate.cert.pem
# cat ~/myCA/rootCA/index.txt
V 330503082700Z 1000 unknown /C=US/ST=California/O=Example Corp/OU=IT Department/CN=Intermediate CA

### Verify the Intermediate CA Certificate content
bash 
openssl x509 -noout -text -in ~/myCA/intermediateCA/certs/intermediate.cert.pem
Sample Output:
Next openssl verify intermediate certificate against the root certificate. An OK indicates that the chain of trust is intact.
bash
openssl verify -CAfile ~/myCA/rootCA/certs/ca.cert.pem ~/myCA/intermediateCA/certs/intermediate.cert.pem

Output:
### step 5: Generate OpenSSL Create Certificate Chain (Certificate Bundle)

### To openssl create certificate chain (certificate bundle), concatenate the intermediate and root certificates together.
In the below example I have combined my Root and Intermediate CA certificates to openssl create certificate chain in Linux. We will use this file later to verify certificates signed by the intermediate CA.
bash

cat ~/myCA/intermediateCA/certs/intermediate.cert.pem ~/myCA/rootCA/certs/ca.cert.pem > ~/myCA/intermediateCA/certs/ca-chain.cert.pem

### After openssl create certificate chain, to verify certificate chain use below command:
bash

openssl verify -CAfile ~/myCA/intermediateCA/certs/ca-chain.cert.pem ~/myCA/intermediateCA/certs/intermediate.cert.pem

Output:

Step 6: Generate and sign server certificate using Intermediate CA

Create a private key for the server:
bash

openssl genpkey -algorithm RSA -out ~/myCA/intermediateCA/private/www.example.com.key.pem
chmod 400 ~/myCA/intermediateCA/private/www.example.com.key.pem

### Create a certificate signing request (CSR) for the server:
bash

openssl req -config ~/myCA/openssl_intermediate.cnf -key ~/myCA/intermediateCA/private/www.example.com.key.pem -new -sha256 -out ~/myCA/intermediateCA/csr/www.example.com.csr.pem

You'll be asked a series of questions about the certificate. For the Common Name question, you should enter the domain name of the server (e.g., www.example.com).
ou can automate the certificate signing request (CSR) creation by supplying default answers to the questions asked by the openssl req command.

These defaults can be specified in the openssl.cnf (or openssl_intermediate.cnf in this case) file, under the [ req_distinguished_name ] section.
bash

[ req_distinguished_name ]
countryName_default = US
stateOrProvinceName_default = California
localityName_default = San Francisco
0.organizationName_default = Example Corp
organizationalUnitName_default = IT Department
commonName_default = www.example.com
emailAddress_default = admin@example.com

By including these lines in your openssl_intermediate.cnf file, openssl req will use these as the default values for the corresponding fields, allowing the command to be run non-interactively.
ALSO READ
Revoke certificate and generate CRL OpenSSL [Step-by-Step]

hen, you can use the -batch option with openssl req command to automatically use these defaults without prompting for them:
bash

openssl req -config ~/myCA/openssl_intermediate.cnf -key ~/myCA/intermediateCA/private/www.example.com.key.pem -new -sha256 -out ~/myCA/intermediateCA/csr/www.example.com.csr.pem -batch

Sign the server CSR with the intermediate CA:
bash

openssl ca -config ~/myCA/openssl_intermediate.cnf -extensions server_cert -days 375 -notext -md sha256 -in ~/myCA/intermediateCA/csr/www.example.com.csr.pem -out ~/myCA/intermediateCA/certs/www.example.com.cert.pem

Sample Output:

Verify the server certificate:
bash

openssl x509 -noout -text -in ~/myCA/intermediateCA/certs/www.example.com.cert.pem

Sample Output:

## Bonus Tip: Signing and Revoking a certificate using Intermediate CA
You can read more about certificate revocation at Revoke certificate and generate CRL OpenSSL

### Revoking a certificate is the process of invalidating a previously issued SSL/TLS certificate before its expiration date. A certificate may need to be revoked for various reasons, such as:

    The private key associated with the certificate has been compromised.
    The certificate was issued fraudulently.
    The information in the certificate has changed, and it no longer accurately represents the subject.

Here I have generated some certificates under /certs folder and signed it using my intermediate CA.
bash

# cat ~/myCA/intermediateCA/index.txt
V	240515083923Z		1000	unknown	/C=US/ST=California/L=San Francisco/O=Example Corp/OU=IT Department/CN=example.com

# cat ~/myCA/intermediateCA/serial
1001

# ls -l /certs/


OR
To revoke a certificate using OpenSSL, follow these steps:

Locate the certificate you want to revoke. You will need the certificate file (usually in PEM format, with the extension .crt, .cer, or .pem) or its serial number.

Revoke the certificate using the openssl ca command with the -revoke option. If you are revoking an end-entity (server or client) certificate signed by the intermediate CA, you will use the intermediate CA configuration file. For example:
bash

openssl ca -config ~/myCA/openssl_intermediate.cnf -revoke /certs/server.cert.pem

Output:

f you are revoking an intermediate CA certificate signed by the root CA, you will use the root CA configuration file. For example:
bash

openssl ca -config openssl_root.cnf -revoke /path/to/intermediate_certificate.pem

After revoking the certificate, update the Certificate Revocation List (CRL) to include the newly revoked certificate. The CRL is a list of revoked certificates that clients can check to determine if a certificate is still valid.

Generate an updated CRL using the openssl ca command with the -gencrl option:
bash

openssl ca -config ~/myCA/openssl_intermediate.cnf -gencrl -out ~/myCA/intermediateCA/crl/intermediate.crl.pem

Output:
bash

Using configuration from /root/myCA/openssl_intermediate.cnf

The line with 1000 in the index.txt file represents a revoked certificate with the serial number 1000. The fields indicate the certificate's status (R for revoked), revocation date, expiration date, serial number, and subject information.
bash

# cat ~/myCA/intermediateCA/index.txt
R 240515083923Z 230506084237Z 1000 unknown /C=US/ST=California/L=San Francisco/O=Example Corp/OU=IT Department/CN=example.com

The crlnumber file content 0101 represents the current CRL number, which is incremented each time a new Certificate Revocation List is generated.
bash

# cat intermediateCA/crlnumber
0101

To get the list of revoked certificates from intermediate CA, we can use below command:
bash

openssl crl -in ~/myCA/intermediateCA/crl/intermediate.crl.pem -text -noout

Output:

References

I have used below external references for this tutorial guide
OpenSSL create certificate chain with root and intermediate certificate   https://jamielinux.com/docs/openssl-certificate-authority/introduction.html
Network Security with OpenSSL  https://learning.oreilly.com/library/view/network-security-with/059600270X/
 
 