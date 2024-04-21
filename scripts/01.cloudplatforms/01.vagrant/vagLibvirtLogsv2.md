cmadmin@vabu00:~/ansible/ansible-nas$ vim inventories/my-ansible-nas/group_vars/nas.yml
cmadmin@vabu00:~/ansible/ansible-nas$ ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K
BECOME password:

PLAY [Ansible-NAS] ****************************************************************************************************

TASK [Gathering Facts] ************************************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu03]
ok: [vabu01]
ok: [vabu04]

TASK [ansible-nas-users : Create ansible-nas group] *******************************************************************
changed: [vabu03]
changed: [vabu04]
changed: [vabu02]
changed: [vabu01]
changed: [ansible-nas]

TASK [ansible-nas-users : Create ansible-nas user] ********************************************************************
changed: [vabu03]
changed: [vabu02]
changed: [vabu04]
changed: [vabu01]
changed: [ansible-nas]

TASK [bertvv.samba : Include OS specific variables] *******************************************************************
ok: [ansible-nas] => (item=/home/cmadmin/.ansible/roles/bertvv.samba/vars/os_Debian.yml)
ok: [vabu01] => (item=/home/cmadmin/.ansible/roles/bertvv.samba/vars/os_Debian.yml)
ok: [vabu02] => (item=/home/cmadmin/.ansible/roles/bertvv.samba/vars/os_Debian.yml)
ok: [vabu03] => (item=/home/cmadmin/.ansible/roles/bertvv.samba/vars/os_Debian.yml)
ok: [vabu04] => (item=/home/cmadmin/.ansible/roles/bertvv.samba/vars/os_Debian.yml)

TASK [bertvv.samba : Install Samba packages] **************************************************************************
changed: [vabu02]
changed: [vabu04]
changed: [vabu03]
changed: [vabu01]
changed: [ansible-nas]

TASK [bertvv.samba : Install Samba VFS extensions packages] ***********************************************************
ok: [vabu02]
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [bertvv.samba : Register Samba version] **************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu03]
ok: [vabu01]
ok: [vabu04]

TASK [bertvv.samba : Install SELinux package] *************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [bertvv.samba : Make sure SELinux boolean settings are correct] **************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [bertvv.samba : Create Samba shares root directory] **************************************************************
changed: [vabu02]
changed: [ansible-nas]
changed: [vabu03]
changed: [vabu04]
changed: [vabu01]

TASK [bertvv.samba : Create share directories] ************************************************************************
changed: [ansible-nas] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [vabu02] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [vabu01] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [vabu03] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [vabu04] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [ansible-nas] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [vabu02] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [vabu01] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [vabu03] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [vabu04] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [ansible-nas] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [vabu02] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [vabu01] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [vabu03] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [vabu04] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [ansible-nas] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [vabu02] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [vabu01] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [vabu03] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [vabu04] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [ansible-nas] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [vabu02] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [vabu01] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [vabu03] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [vabu04] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [ansible-nas] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [vabu02] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [vabu01] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [vabu03] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [vabu04] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [ansible-nas] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu02] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu01] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu03] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu04] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [ansible-nas] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [vabu02] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [vabu01] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [vabu03] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [vabu04] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [ansible-nas] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu02] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu01] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu03] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu04] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu02] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [ansible-nas] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [vabu01] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [vabu03] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [vabu04] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [vabu02] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [ansible-nas] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [vabu01] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [vabu03] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [vabu04] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [vabu02] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [ansible-nas] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [vabu01] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [vabu03] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [vabu04] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [vabu02] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
changed: [ansible-nas] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
changed: [vabu01] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
changed: [vabu03] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
changed: [vabu04] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})

TASK [bertvv.samba : Ensure webserver document root exists] ***********************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [bertvv.samba : Create link to shares in webserver document root] ************************************************
skipping: [ansible-nas] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [ansible-nas] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [ansible-nas] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [ansible-nas] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [ansible-nas] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [ansible-nas] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu01] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [ansible-nas] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [vabu01] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [ansible-nas] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu01] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [ansible-nas] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu01] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [ansible-nas] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu01] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [ansible-nas] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu01] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [ansible-nas] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu01] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [ansible-nas] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [ansible-nas]
skipping: [vabu02] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [vabu01] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu01] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu02] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [vabu01] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu01] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu02] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [vabu03] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [vabu01] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu01] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [vabu03] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [vabu02] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [vabu01]
skipping: [vabu03] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [vabu03] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [vabu02] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [vabu03] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [vabu02] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu03] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu03] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [vabu02] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [vabu03] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu02] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu03] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu02] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu03] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu02] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu03] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu02] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu03] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu02] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu03] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [vabu03]
skipping: [vabu02] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [vabu02]
skipping: [vabu04] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [vabu04] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [vabu04] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [vabu04] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [vabu04] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [vabu04] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu04] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [vabu04] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu04] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu04] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu04] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu04] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu04] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [vabu04]

TASK [bertvv.samba : Samba configuration] *****************************************************************************
changed: [vabu03]
changed: [vabu02]
changed: [ansible-nas]
changed: [vabu01]
changed: [vabu04]

TASK [bertvv.samba : Install global include file] *********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [bertvv.samba : Install home include file] ***********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [bertvv.samba : Install share specific include files] ************************************************************
skipping: [ansible-nas] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [vabu01] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [ansible-nas] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [vabu01] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [vabu01] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [ansible-nas] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [vabu01] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [ansible-nas] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [vabu01] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [ansible-nas] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [vabu01] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu01] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [ansible-nas] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu01] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [ansible-nas] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [vabu01] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [ansible-nas] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu02] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [vabu03] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [vabu01] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [ansible-nas] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu02] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [vabu01] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu03] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [ansible-nas] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu02] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [vabu01] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu03] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [ansible-nas] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu02] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [vabu03] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [vabu01] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [vabu01]
skipping: [ansible-nas] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu02] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [vabu03] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [vabu02] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu03] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu04] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
skipping: [ansible-nas] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [ansible-nas]
skipping: [vabu02] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [vabu03] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [vabu04] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
skipping: [vabu02] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu03] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu04] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
skipping: [vabu02] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu03] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu04] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
skipping: [vabu02] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu03] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu04] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
skipping: [vabu02] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu03] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu04] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
skipping: [vabu02] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu03] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu04] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
skipping: [vabu02] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [vabu04] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
skipping: [vabu02]
skipping: [vabu03] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [vabu03]
skipping: [vabu04] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
skipping: [vabu04] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
skipping: [vabu04] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
skipping: [vabu04] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
skipping: [vabu04] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
skipping: [vabu04]

TASK [bertvv.samba : Create username map file if needed] **************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [bertvv.samba : Start Samba service(s)] **************************************************************************
ok: [vabu01] => (item=smbd)
ok: [vabu03] => (item=smbd)
ok: [vabu04] => (item=smbd)
ok: [ansible-nas] => (item=smbd)
ok: [vabu02] => (item=smbd)
ok: [ansible-nas] => (item=nmbd)
ok: [vabu02] => (item=nmbd)
ok: [vabu01] => (item=nmbd)
ok: [vabu04] => (item=nmbd)
ok: [vabu03] => (item=nmbd)

TASK [bertvv.samba : Create Samba users if they don't exist yet] ******************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.nfs : Include OS-specific variables.] ***************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.nfs : Include overrides specific to Fedora.] ********************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.nfs : include_tasks] ********************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.nfs : include_tasks] ********************************************************************************
included: /home/cmadmin/.ansible/roles/geerlingguy.nfs/tasks/setup-Debian.yml for ansible-nas, vabu01, vabu02, vabu03, vabu04

TASK [geerlingguy.nfs : Ensure NFS utilities are installed.] **********************************************************
changed: [vabu04]
changed: [vabu03]
changed: [vabu02]
changed: [vabu01]
changed: [ansible-nas]

TASK [geerlingguy.nfs : Ensure directories to export exist] ***********************************************************
changed: [ansible-nas] => (item=/mnt/Volume3/public *(rw,sync,no_root_squash))
changed: [vabu02] => (item=/mnt/Volume3/public *(rw,sync,no_root_squash))
changed: [vabu01] => (item=/mnt/Volume3/public *(rw,sync,no_root_squash))
changed: [vabu03] => (item=/mnt/Volume3/public *(rw,sync,no_root_squash))
changed: [vabu04] => (item=/mnt/Volume3/public *(rw,sync,no_root_squash))

TASK [geerlingguy.nfs : Copy exports file.] ***************************************************************************
changed: [ansible-nas]
changed: [vabu02]
changed: [vabu01]
changed: [vabu04]
changed: [vabu03]

TASK [geerlingguy.nfs : Ensure nfs is running.] ***********************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.docker : Load OS-specific vars.] ********************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.docker : include_tasks] *****************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : include_tasks] *****************************************************************************
included: /home/cmadmin/.ansible/roles/geerlingguy.docker/tasks/setup-Debian.yml for ansible-nas, vabu01, vabu02, vabu03, vabu04

TASK [geerlingguy.docker : Ensure old versions of Docker are not installed.] ******************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.docker : Ensure dependencies are installed.] ********************************************************
ok: [vabu02]
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.docker : Ensure additional dependencies are installed (on Ubuntu < 20.04 and any other systems).] ***
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Ensure additional dependencies are installed (on Ubuntu >= 20.04).] ************************
ok: [vabu02]
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.docker : Add Docker apt key.] ***********************************************************************
changed: [ansible-nas]
changed: [vabu02]
changed: [vabu01]
changed: [vabu03]
changed: [vabu04]

TASK [geerlingguy.docker : Ensure curl is present (on older systems without SNI).] ************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Add Docker apt key (alternative for older systems without SNI).] ***************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Add Docker repository.] ********************************************************************
changed: [ansible-nas]
changed: [vabu01]
changed: [vabu04]
changed: [vabu02]
changed: [vabu03]

TASK [geerlingguy.docker : Install Docker packages.] ******************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Install Docker packages (with downgrade option).] ******************************************
changed: [vabu01]
changed: [ansible-nas]
changed: [vabu04]
changed: [vabu02]
changed: [vabu03]

TASK [geerlingguy.docker : Install docker-compose plugin.] ************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Install docker-compose-plugin (with downgrade option).] ************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Ensure /etc/docker/ directory exists.] *****************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Configure Docker daemon options.] **********************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Ensure Docker is started and enabled at boot.] *********************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.docker : Ensure handlers are notified now to avoid firewall conflicts.] *****************************

TASK [geerlingguy.docker : Ensure handlers are notified now to avoid firewall conflicts.] *****************************

TASK [geerlingguy.docker : Ensure handlers are notified now to avoid firewall conflicts.] *****************************

TASK [geerlingguy.docker : Ensure handlers are notified now to avoid firewall conflicts.] *****************************

TASK [geerlingguy.docker : Ensure handlers are notified now to avoid firewall conflicts.] *****************************

RUNNING HANDLER [bertvv.samba : Restart Samba services] ***************************************************************
changed: [ansible-nas] => (item=smbd)
changed: [vabu02] => (item=smbd)
changed: [vabu01] => (item=smbd)
changed: [vabu03] => (item=smbd)
changed: [vabu04] => (item=smbd)
changed: [ansible-nas] => (item=nmbd)
changed: [vabu02] => (item=nmbd)
changed: [vabu01] => (item=nmbd)
changed: [vabu03] => (item=nmbd)
changed: [vabu04] => (item=nmbd)

RUNNING HANDLER [geerlingguy.nfs : reload nfs] ************************************************************************
changed: [ansible-nas]
changed: [vabu01]
changed: [vabu03]
changed: [vabu02]
changed: [vabu04]

RUNNING HANDLER [geerlingguy.docker : restart docker] *****************************************************************
changed: [ansible-nas]
changed: [vabu01]
changed: [vabu02]
changed: [vabu04]
changed: [vabu03]

TASK [geerlingguy.docker : include_tasks] *****************************************************************************
included: /home/cmadmin/.ansible/roles/geerlingguy.docker/tasks/docker-compose.yml for ansible-nas, vabu01, vabu02, vabu03, vabu04

TASK [geerlingguy.docker : Check current docker-compose version.] *****************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.docker : set_fact] **********************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [geerlingguy.docker : Delete existing docker-compose version if it's different.] *********************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu04]
ok: [vabu03]

TASK [geerlingguy.docker : Install Docker Compose (if configured).] ***************************************************
changed: [ansible-nas]
changed: [vabu03]
changed: [vabu01]
changed: [vabu02]
changed: [vabu04]

TASK [geerlingguy.docker : Get docker group info using getent.] *******************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : Check if there are any users to add to the docker group.] **********************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [geerlingguy.docker : include_tasks] *****************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [ansible-nas-general : Set login banner] *************************************************************************
changed: [ansible-nas]
changed: [vabu01]
changed: [vabu02]
changed: [vabu03]
changed: [vabu04]

TASK [ansible-nas-general : Update apt-cache] *************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [ansible-nas-general : Upgrade all packages] *********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [ansible-nas-general : Install some packages] ********************************************************************
changed: [vabu04]
changed: [vabu01]
changed: [vabu02]
changed: [vabu03]
changed: [ansible-nas]

TASK [ansible-nas-general : Set hostname to ansible-nas] **************************************************************
changed: [vabu03]
changed: [vabu04]
changed: [vabu01]
changed: [ansible-nas]
changed: [vabu02]

TASK [ansible-nas-general : Set timezone to Etc/UTC] ******************************************************************
ok: [ansible-nas]
changed: [vabu03]
changed: [vabu04]
changed: [vabu01]
changed: [vabu02]

TASK [ansible-nas-general : Permission share directories] *************************************************************
changed: [ansible-nas] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [vabu01] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [vabu03] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [vabu02] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [vabu04] => (item={'name': 'downloads', 'comment': 'Stuff downloaded', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/downloads'})
changed: [ansible-nas] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [vabu01] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [vabu02] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [vabu03] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [vabu04] => (item={'name': 'movies', 'comment': 'Movies', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/movies'})
changed: [ansible-nas] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [vabu02] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [vabu01] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [vabu04] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [vabu03] => (item={'name': 'tv', 'comment': 'TV Episodes', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/tv'})
changed: [ansible-nas] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [vabu02] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [vabu01] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [vabu04] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [vabu03] => (item={'name': 'music', 'comment': 'Music', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/music'})
changed: [ansible-nas] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [vabu02] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [vabu04] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [vabu01] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [vabu03] => (item={'name': 'podcasts', 'comment': 'Podcasts', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/podcasts'})
changed: [ansible-nas] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [vabu02] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [vabu04] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [vabu03] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [vabu01] => (item={'name': 'dump', 'comment': 'File dump', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/dump'})
changed: [ansible-nas] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu02] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu04] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu03] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu01] => (item={'name': 'games', 'comment': 'Games', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/games'})
changed: [vabu02] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [ansible-nas] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [vabu04] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [vabu03] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [vabu01] => (item={'name': 'photos', 'comment': 'Pictures', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/photos'})
changed: [ansible-nas] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu02] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu04] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu01] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [vabu03] => (item={'name': 'books', 'comment': 'Books', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/books'})
changed: [ansible-nas] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [vabu02] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [vabu04] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [vabu01] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [vabu03] => (item={'name': 'audiobooks', 'comment': 'Audiobooks', 'guest_ok': True, 'public': True, 'writable': True, 'browsable': True, 'path': '/mnt/Volume3/audiobooks'})
changed: [ansible-nas] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [vabu02] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [vabu04] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [vabu03] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [ansible-nas] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [vabu01] => (item={'name': 'comics', 'comment': 'Comics', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/comics'})
changed: [vabu02] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [vabu04] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [ansible-nas] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
changed: [vabu02] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
changed: [vabu01] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [vabu03] => (item={'name': 'documents', 'comment': 'Documents', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/documents'})
changed: [vabu04] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
changed: [vabu01] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})
changed: [vabu03] => (item={'name': 'code', 'comment': 'Code', 'guest_ok': True, 'public': True, 'writable': True, 'browseable': True, 'path': '/mnt/Volume3/code'})

TASK [ansible-nas-docker : Install python3-pip] ***********************************************************************
changed: [vabu04]
changed: [ansible-nas]
changed: [vabu02]
changed: [vabu01]
changed: [vabu03]

TASK [ansible-nas-docker : Remove docker-py python module] ************************************************************
ok: [ansible-nas]
ok: [vabu03]
ok: [vabu02]
ok: [vabu01]
ok: [vabu04]

TASK [ansible-nas-docker : Install docker python module] **************************************************************
changed: [ansible-nas]
changed: [vabu01]
changed: [vabu03]
changed: [vabu04]
changed: [vabu02]

TASK [ansible-nas-docker : Create Docker home directory] **************************************************************
changed: [ansible-nas]
changed: [vabu01]
changed: [vabu03]
changed: [vabu02]
changed: [vabu04]

TASK [ansible-nas-docker : Add user account to Docker group] **********************************************************
changed: [vabu01]
changed: [vabu03]
changed: [vabu04]
changed: [vabu02]
changed: [ansible-nas]

TASK [ansible-nas-docker : Generate Docker daemon.json] ***************************************************************
changed: [ansible-nas]
changed: [vabu02]
changed: [vabu01]
changed: [vabu04]
changed: [vabu03]

TASK [ansible-nas-docker : Restart Docker] ****************************************************************************
changed: [ansible-nas]
changed: [vabu02]
changed: [vabu03]
changed: [vabu04]
changed: [vabu01]

TASK [logging : Enable logging roles] *********************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [logging : Disable logging roles] ********************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [gitlab : Create Gitlab group account] ***************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [gitlab : Create Gitlab user account] ****************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [gitlab : Create Gitlab Directories] *****************************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/gitlab/config)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/gitlab/log)
skipping: [vabu01] => (item=/mnt/Volume2/docker/gitlab/config)
skipping: [vabu01] => (item=/mnt/Volume2/docker/gitlab/log)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/gitlab/data)
skipping: [vabu01] => (item=/mnt/Volume2/docker/gitlab/data)
skipping: [ansible-nas]
skipping: [vabu02] => (item=/mnt/Volume2/docker/gitlab/config)
skipping: [vabu02] => (item=/mnt/Volume2/docker/gitlab/log)
skipping: [vabu02] => (item=/mnt/Volume2/docker/gitlab/data)
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/gitlab/config)
skipping: [vabu03] => (item=/mnt/Volume2/docker/gitlab/log)
skipping: [vabu03] => (item=/mnt/Volume2/docker/gitlab/data)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/gitlab/config)
skipping: [vabu04] => (item=/mnt/Volume2/docker/gitlab/log)
skipping: [vabu04] => (item=/mnt/Volume2/docker/gitlab/data)
skipping: [vabu04]

TASK [gitlab : Create Gitlab Docker Container] ************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [gitlab : Stop Gitlab] *******************************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [glances : Create Glances Docker Container] **********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [glances : Stop Glances] *****************************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [healthchecks.io : Add healthchecks.io cronjob] ******************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [healthchecks.io : Remove healthchecks.io cronjob] ***************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [hello_world : Create Hello World Directories] *******************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/hello_world)
skipping: [ansible-nas]
skipping: [vabu01] => (item=/mnt/Volume2/docker/hello_world)
skipping: [vabu01]
skipping: [vabu02] => (item=/mnt/Volume2/docker/hello_world)
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/hello_world)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/hello_world)
skipping: [vabu04]

TASK [hello_world : Hello World Docker Container] *********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [hello_world : Stop Hello World] *********************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu04]
ok: [vabu03]

TASK [homepage : Create Homepage Directories] *************************************************************************
skipping: [vabu01] => (item=/mnt/Volume2/docker/homepage)
skipping: [vabu01]
skipping: [vabu02] => (item=/mnt/Volume2/docker/homepage)
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/homepage)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/homepage)
skipping: [vabu04]
changed: [ansible-nas] => (item=/mnt/Volume2/docker/homepage)

TASK [homepage : Template config files] *******************************************************************************
skipping: [vabu01] => (item=bookmarks.yaml)
skipping: [vabu01] => (item=docker.yaml)
skipping: [vabu01] => (item=settings.yaml)
skipping: [vabu02] => (item=bookmarks.yaml)
skipping: [vabu02] => (item=docker.yaml)
skipping: [vabu01] => (item=services.yaml)
skipping: [vabu02] => (item=settings.yaml)
skipping: [vabu01] => (item=widgets.yaml)
skipping: [vabu02] => (item=services.yaml)
skipping: [vabu01]
skipping: [vabu02] => (item=widgets.yaml)
skipping: [vabu03] => (item=bookmarks.yaml)
skipping: [vabu02]
skipping: [vabu03] => (item=docker.yaml)
skipping: [vabu03] => (item=settings.yaml)
skipping: [vabu03] => (item=services.yaml)
skipping: [vabu03] => (item=widgets.yaml)
skipping: [vabu03]
skipping: [vabu04] => (item=bookmarks.yaml)
skipping: [vabu04] => (item=docker.yaml)
skipping: [vabu04] => (item=settings.yaml)
skipping: [vabu04] => (item=services.yaml)
skipping: [vabu04] => (item=widgets.yaml)
skipping: [vabu04]
changed: [ansible-nas] => (item=bookmarks.yaml)
changed: [ansible-nas] => (item=docker.yaml)
changed: [ansible-nas] => (item=settings.yaml)
changed: [ansible-nas] => (item=services.yaml)
changed: [ansible-nas] => (item=widgets.yaml)

TASK [homepage : Create Homepage Docker Container] ********************************************************************
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]
changed: [ansible-nas]

TASK [homepage : Stop Homepage] ***************************************************************************************
skipping: [ansible-nas]
ok: [vabu03]
ok: [vabu01]
ok: [vabu02]
ok: [vabu04]

TASK [miniflux : Create Miniflux Directories] *************************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/miniflux/postgres)
skipping: [ansible-nas]
skipping: [vabu01] => (item=/mnt/Volume2/docker/miniflux/postgres)
skipping: [vabu01]
skipping: [vabu02] => (item=/mnt/Volume2/docker/miniflux/postgres)
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/miniflux/postgres)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/miniflux/postgres)
skipping: [vabu04]

TASK [miniflux : Create Miniflux network] *****************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [miniflux : Create Postgres for Miniflux] ************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [miniflux : Create Miniflux Docker Container] ********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [miniflux : Stop Miniflux] ***************************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [minio : Create Minio Directories] *******************************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/minio/data)
skipping: [ansible-nas]
skipping: [vabu01] => (item=/mnt/Volume2/docker/minio/data)
skipping: [vabu01]
skipping: [vabu02] => (item=/mnt/Volume2/docker/minio/data)
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/minio/data)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/minio/data)
skipping: [vabu04]

TASK [minio : Create minio Docker Container] **************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [minio : Stop minio] *********************************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [netdata : Get docker group id] **********************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [netdata : Netdata Docker Container] *****************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [netdata : Stop Netdata] *****************************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu03]
ok: [vabu02]
ok: [vabu04]

TASK [nextcloud : Create Nextcloud directories] ***********************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/nextcloud/nextcloud)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/nextcloud/mysql)
skipping: [vabu01] => (item=/mnt/Volume2/docker/nextcloud/nextcloud)
skipping: [vabu01] => (item=/mnt/Volume2/docker/nextcloud/mysql)
skipping: [ansible-nas]
skipping: [vabu02] => (item=/mnt/Volume2/docker/nextcloud/nextcloud)
skipping: [vabu02] => (item=/mnt/Volume2/docker/nextcloud/mysql)
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/nextcloud/nextcloud)
skipping: [vabu03] => (item=/mnt/Volume2/docker/nextcloud/mysql)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/nextcloud/nextcloud)
skipping: [vabu04] => (item=/mnt/Volume2/docker/nextcloud/mysql)
skipping: [vabu04]

TASK [nextcloud : Create Nextcloud network] ***************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [nextcloud : Nextcloud Mysql Docker Container] *******************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [nextcloud : Nextcloud Docker Container] *************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [nextcloud : Stop Nextcloud] *************************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [nextcloud : Stop Nextcloud DB] **********************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [portainer : Create Portainer Directories] ***********************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/portainer/config)
skipping: [ansible-nas]
skipping: [vabu01] => (item=/mnt/Volume2/docker/portainer/config)
skipping: [vabu01]
skipping: [vabu02] => (item=/mnt/Volume2/docker/portainer/config)
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/portainer/config)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/portainer/config)
skipping: [vabu04]

TASK [portainer : Portainer Docker Container] *************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [portainer : Stop Portainer] *************************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [stats : Create Prometheus Config Directory] *********************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [ansible-nas]
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [vabu01]
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [vabu04]

TASK [stats : Create Prometheus Data Directory] ***********************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [ansible-nas]
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/prometheus/data)
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/prometheus/config)
skipping: [vabu04]

TASK [stats : Template Prometheus config] *****************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Prometheus Docker Container] ****************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Stop Prometheus] ****************************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [stats : Create Telegraf Directory] ******************************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/telegraf/config)
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/telegraf/config)
skipping: [ansible-nas]
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/telegraf/config)
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/telegraf/config)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/telegraf/config)
skipping: [vabu04]

TASK [stats : Template telegraf.conf] *********************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Get Docker daemon uid] **********************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Telegraf Docker Container] ******************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Stop stats_telegraf] ************************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [stats : Smartctl Exporter Docker Container] *********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Hddtemp Docker Container] *******************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Speedtest Exporter Docker Container] ********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Stop Smartctl Exporter] *********************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

TASK [stats : Stop Speedtest Exporter] ********************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu03]
ok: [vabu02]
ok: [vabu04]

TASK [stats : Create Grafana Directories] *****************************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/grafana/data)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/grafana/config)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/grafana/config/dashboards)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/datasources)
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/grafana/data)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/dashboards)
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/grafana/config)
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/grafana/config/dashboards)
skipping: [ansible-nas]
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/datasources)
skipping: [vabu01] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/dashboards)
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/grafana/data)
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/grafana/config)
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/grafana/config/dashboards)
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/datasources)
skipping: [vabu02] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/dashboards)
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/grafana/data)
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/grafana/config)
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/grafana/config/dashboards)
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/datasources)
skipping: [vabu03] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/dashboards)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/grafana/data)
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/grafana/config)
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/grafana/config/dashboards)
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/datasources)
skipping: [vabu04] => (item=/mnt/Volume2/docker/stats/grafana/config/provisioning/dashboards)
skipping: [vabu04]

TASK [stats : Template Grafana data source] ***************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Copy Grafana dashboards configuration] ******************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Copy Grafana Ansible-NAS dashboard] *********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Grafana Docker Container] *******************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [stats : Stop Grafana] *******************************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu03]
ok: [vabu04]

TASK [syncthing : Create Syncthing Directories] ***********************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume3/syncthing)
skipping: [ansible-nas]
skipping: [vabu01] => (item=/mnt/Volume3/syncthing)
skipping: [vabu01]
skipping: [vabu02] => (item=/mnt/Volume3/syncthing)
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume3/syncthing)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume3/syncthing)
skipping: [vabu04]

TASK [syncthing : Syncthing Docker Container] *************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [syncthing : Stop Syncthing] *************************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu02]
ok: [vabu04]
ok: [vabu03]

TASK [traefik : Create Traefik Directories] ***************************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/traefik)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/traefik/letsencrypt)
skipping: [vabu01] => (item=/mnt/Volume2/docker/traefik)
skipping: [vabu01] => (item=/mnt/Volume2/docker/traefik/letsencrypt)
skipping: [ansible-nas]
skipping: [vabu02] => (item=/mnt/Volume2/docker/traefik)
skipping: [vabu02] => (item=/mnt/Volume2/docker/traefik/letsencrypt)
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/traefik)
skipping: [vabu03] => (item=/mnt/Volume2/docker/traefik/letsencrypt)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/traefik)
skipping: [vabu04] => (item=/mnt/Volume2/docker/traefik/letsencrypt)
skipping: [vabu04]

TASK [traefik : Template Traefik config.toml] *************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [traefik : Traefik Docker Container] *****************************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [traefik : Stop Traefik] *****************************************************************************************
ok: [vabu01]
ok: [vabu02]
ok: [ansible-nas]
ok: [vabu04]
ok: [vabu03]

TASK [watchtower : Watchtower Docker Container] ***********************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [watchtower : Stop Watchtower] ***********************************************************************************
ok: [ansible-nas]
ok: [vabu01]
ok: [vabu03]
ok: [vabu02]
ok: [vabu04]

TASK [wireshark : Create Wireshark Directories] ***********************************************************************
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/wireshark)
skipping: [ansible-nas] => (item=/mnt/Volume2/docker/wireshark/config)
skipping: [vabu01] => (item=/mnt/Volume2/docker/wireshark)
skipping: [vabu01] => (item=/mnt/Volume2/docker/wireshark/config)
skipping: [ansible-nas]
skipping: [vabu02] => (item=/mnt/Volume2/docker/wireshark)
skipping: [vabu01]
skipping: [vabu02] => (item=/mnt/Volume2/docker/wireshark/config)
skipping: [vabu02]
skipping: [vabu03] => (item=/mnt/Volume2/docker/wireshark)
skipping: [vabu03] => (item=/mnt/Volume2/docker/wireshark/config)
skipping: [vabu03]
skipping: [vabu04] => (item=/mnt/Volume2/docker/wireshark)
skipping: [vabu04] => (item=/mnt/Volume2/docker/wireshark/config)
skipping: [vabu04]

TASK [wireshark : Create Wireshark Docker Container] ******************************************************************
skipping: [ansible-nas]
skipping: [vabu01]
skipping: [vabu02]
skipping: [vabu03]
skipping: [vabu04]

TASK [wireshark : Stop Wireshark] *************************************************************************************
ok: [ansible-nas]
ok: [vabu02]
ok: [vabu01]
ok: [vabu03]
ok: [vabu04]

PLAY RECAP ************************************************************************************************************
ansible-nas                : ok=70   changed=29   unreachable=0    failed=0    skipped=72   rescued=0    ignored=0
vabu01                     : ok=68   changed=27   unreachable=0    failed=0    skipped=74   rescued=0    ignored=0
vabu02                     : ok=68   changed=27   unreachable=0    failed=0    skipped=74   rescued=0    ignored=0
vabu03                     : ok=68   changed=27   unreachable=0    failed=0    skipped=74   rescued=0    ignored=0
vabu04                     : ok=68   changed=27   unreachable=0    failed=0    skipped=74   rescued=0    ignored=0

=============== Dashy  =========================================================
cmadmin@ansible-nas:~/ansible/ansible-nas$ ansible-playbook -vvv -i inventories/my-ansible-nas/inventory -l vabu00 nas.yml  -t dashy
ansible-playbook [core 2.16.5]
  config file = /home/cmadmin/ansible/ansible-nas/ansible.cfg
  configured module search path = ['/home/cmadmin/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /home/cmadmin/.local/pipx/venvs/ansible/lib/python3.10/site-packages/ansible
  ansible collection location = /home/cmadmin/.ansible/collections:/usr/share/ansible/collections
  executable location = /home/cmadmin/.local/bin/ansible-playbook
  python version = 3.10.12 (main, Nov 20 2023, 15:14:05) [GCC 11.4.0] (/home/cmadmin/.local/pipx/venvs/ansible/bin/python)
  jinja version = 3.1.3
  libyaml = True
Using /home/cmadmin/ansible/ansible-nas/ansible.cfg as config file
host_list declined parsing /home/cmadmin/ansible/ansible-nas/inventories/my-ansible-nas/inventory as it did not pass its verify_file() method
script declined parsing /home/cmadmin/ansible/ansible-nas/inventories/my-ansible-nas/inventory as it did not pass its verify_file() method
auto declined parsing /home/cmadmin/ansible/ansible-nas/inventories/my-ansible-nas/inventory as it did not pass its verify_file() method
Parsed /home/cmadmin/ansible/ansible-nas/inventories/my-ansible-nas/inventory inventory source with ini plugin
redirecting (type: modules) ansible.builtin.seboolean to ansible.posix.seboolean
statically imported: /home/cmadmin/ansible/ansible-nas/roles/stats/tasks/prometheus.yml
statically imported: /home/cmadmin/ansible/ansible-nas/roles/stats/tasks/telegraf.yml
statically imported: /home/cmadmin/ansible/ansible-nas/roles/stats/tasks/exporters.yml
statically imported: /home/cmadmin/ansible/ansible-nas/roles/stats/tasks/grafana.yml
Skipping callback 'default', as we already have a stdout callback.
Skipping callback 'minimal', as we already have a stdout callback.
Skipping callback 'oneline', as we already have a stdout callback.

PLAYBOOK: nas.yml ****************************************************************************************************************
1 plays in nas.yml

PLAY [Ansible-NAS] ***************************************************************************************************************

TASK [Gathering Facts] ***********************************************************************************************************
task path: /home/cmadmin/ansible/ansible-nas/nas.yml:2
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' 192.168.138.230 '/bin/sh -c '"'"'echo ~ && sleep 0'"'"''
<192.168.138.230> (0, b'/home/cmadmin\n', b'')
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' 192.168.138.230 '/bin/sh -c '"'"'( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825 `" && echo ansible-tmp-1712403681.9181123-166165-167306954967825="` echo /home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825 `" ) && sleep 0'"'"''
<192.168.138.230> (0, b'ansible-tmp-1712403681.9181123-166165-167306954967825=/home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825\n', b'')
Using module file /home/cmadmin/.local/pipx/venvs/ansible/lib/python3.10/site-packages/ansible/modules/setup.py
<192.168.138.230> PUT /home/cmadmin/.ansible/tmp/ansible-local-166162t6vhgkzo/tmp_vtcuona TO /home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825/AnsiballZ_setup.py
<192.168.138.230> SSH: EXEC sftp -b - -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' '[192.168.138.230]'
<192.168.138.230> (0, b'sftp> put /home/cmadmin/.ansible/tmp/ansible-local-166162t6vhgkzo/tmp_vtcuona /home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825/AnsiballZ_setup.py\n', b'')
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' 192.168.138.230 '/bin/sh -c '"'"'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825/ /home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825/AnsiballZ_setup.py && sleep 0'"'"''

<192.168.138.230> (0, b'', b'')
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' -tt 192.168.138.230 '/bin/sh -c '"'"'/usr/bin/python3 /home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825/AnsiballZ_setup.py && sleep 0'"'"''
<192.168.138.230> (0, b'\r\n{"ansible_facts": {"ansible_loadavg": {"1m": 0.240234375, "5m": 0.08984375, "15m": 0.0244140625}, "ansible_system": "Linux", "ansible_kernel": "5.15.0-91-generic", "ansible_kernel_version": "#101-Ubuntu SMP Tue Nov 14 13:30:08 UTC 2023", "ansible_machine": "x86_64", "ansible_python_version": "3.10.12", "ansible_fqdn": "vabu00.fritz.box", "ansible_hostname": "ansible-nas", "ansible_nodename": "ansible-nas", "ansible_domain": "fritz.box", "ansible_userspace_bits": "64", "ansible_architecture": "x86_64", "ansible_userspace_architecture": "x86_64", "ansible_machine_id": "40572f2200804b028ebb76e67d818b33", "ansible_user_id": "cmadmin", "ansible_user_uid": 666, "ansible_user_gid": 1001, "ansible_user_gecos": "", "ansible_user_dir": "/home/cmadmin", "ansible_user_shell": "/bin/bash", "ansible_real_user_id": 666, "ansible_effective_user_id": 666, "ansible_real_group_id": 1001, "ansible_effective_group_id": 1001, "ansible_virtualization_role": "guest", "ansible_virtualization_type": "kvm", "ansible_virtualization_tech_guest": ["kvm"], "ansible_virtualization_tech_host": ["kvm"], "ansible_fibre_channel_wwn": [], "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABgQDKygagR9eK36DiKSo84N2kECI+bfowrBLO461VVgOYdxWVpjJ0E4mPoxXjWLW4CKXdsb8MNkWElPrlGWegCF7hXOR6ZmyQ/GEOm4XWi6P3+h0cIels6bEzzmVc3I41BMRRov08t3URkzyfBcUHxmGgg2A5nym5NMD90ngvDlIKe2HYmr6Bs4U/pg03INpbYl3TV0YGvFjoyKa3aBIxX4Xcs/cDBkPQ1Df6dqC68wJKgm6Qh8iRLac2eX+l1H1S57Pygf8pfu5Nbyjq5+m9ZGr3ExUHvQaNkZeQ9DFBB6j3n11VxhKun8r+ZKBaDn6fzydPWvABl88RxBWnfv1gaI75v7bJC4uZXYMLzzHcCTwfEADM9UQ/MeLJDhJs1vlvCMur/VXHUQUI82YwpaaTAFJ7tCLGgFtA+Y0MJBns2FmtMD7U25UetU+wlNsddS6huh+b56P0FmrGQqLfVy6hlcjywRMzpGPmSigVIvlmeqpFWndfmEx7ACqVBPS4mgd50BM=", "ansible_ssh_host_key_rsa_public_keytype": "ssh-rsa", "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBA46uNd17wJQlnp7aQJXXBf7cgt4nIJBkVGRM8+EQjSGzj9uwxceGd7mhV9aE/llkI2GYtPNum0JDHmxAeHr/PI=", "ansible_ssh_host_key_ecdsa_public_keytype": "ecdsa-sha2-nistp256", "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAIL+pMlfN/+xdwjjIqnCNyO6LYh4hbu/RYg/vL+tvNRmT", "ansible_ssh_host_key_ed25519_public_keytype": "ssh-ed25519", "ansible_distribution": "Ubuntu", "ansible_distribution_release": "jammy", "ansible_distribution_version": "22.04", "ansible_distribution_major_version": "22", "ansible_distribution_file_path": "/etc/os-release", "ansible_distribution_file_variety": "Debian", "ansible_distribution_file_parsed": true, "ansible_os_family": "Debian", "ansible_cmdline": {"BOOT_IMAGE": "/vmlinuz-5.15.0-91-generic", "root": "/dev/mapper/ubuntu--vg-ubuntu--lv", "ro": true, "": "", "net.ifnames": "0", "biosdevname": "0"}, "ansible_proc_cmdline": {"BOOT_IMAGE": "/vmlinuz-5.15.0-91-generic", "root": "/dev/mapper/ubuntu--vg-ubuntu--lv", "ro": true, "": "", "net.ifnames": "0", "biosdevname": "0"}, "ansible_hostnqn": "", "ansible_system_capabilities_enforced": "True", "ansible_system_capabilities": [""], "ansible_is_chroot": false, "ansible_date_time": {"year": "2024", "month": "04", "weekday": "Saturday", "weekday_number": "6", "weeknumber": "14", "day": "06", "hour": "11", "minute": "41", "second": "23", "epoch": "1712403683", "epoch_int": "1712403683", "date": "2024-04-06", "time": "11:41:23", "iso8601_micro": "2024-04-06T11:41:23.000056Z", "iso8601": "2024-04-06T11:41:23Z", "iso8601_basic": "20240406T114123000056", "iso8601_basic_short": "20240406T114123", "tz": "UTC", "tz_dst": "UTC", "tz_offset": "+0000"}, "ansible_iscsi_iqn": "", "ansible_apparmor": {"status": "enabled"}, "ansible_selinux_python_present": true, "ansible_selinux": {"status": "disabled"}, "ansible_local": {}, "ansible_env": {"USER": "cmadmin", "SSH_CLIENT": "192.168.138.230 34512 22", "XDG_SESSION_TYPE": "tty", "SHLVL": "0", "MOTD_SHOWN": "pam", "HOME": "/home/cmadmin", "SSH_TTY": "/dev/pts/2", "DBUS_SESSION_BUS_ADDRESS": "unix:path=/run/user/666/bus", "LOGNAME": "cmadmin", "_": "/bin/sh", "XDG_SESSION_CLASS": "user", "TERM": "xterm", "XDG_SESSION_ID": "312", "PATH": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", "XDG_RUNTIME_DIR": "/run/user/666", "LANG": "en_US.UTF-8", "SHELL": "/bin/bash", "PWD": "/home/cmadmin", "SSH_CONNECTION": "192.168.138.230 34512 192.168.138.230 22"}, "ansible_dns": {"nameservers": ["127.0.0.53"], "options": {"edns0": true, "trust-ad": true}, "search": ["."]}, "ansible_fips": false, "ansible_python": {"version": {"major": 3, "minor": 10, "micro": 12, "releaselevel": "final", "serial": 0}, "version_info": [3, 10, 12, "final", 0], "executable": "/usr/bin/python3", "has_sslcontext": true, "type": "cpython"}, "ansible_lsb": {"id": "Ubuntu", "description": "Ubuntu 22.04.4 LTS", "release": "22.04", "codename": "jammy", "major_release": "22"}, "ansible_pkg_mgr": "apt", "ansible_interfaces": ["eth1", "vethd74e01f", "eth0", "docker0", "lo"], "ansible_eth1": {"device": "eth1", "macaddress": "52:54:00:19:ee:ed", "mtu": 1500, "active": true, "module": "virtio_net", "type": "ether", "pciid": "virtio3", "speed": -1, "promisc": false, "ipv4": {"address": "192.168.138.230", "broadcast": "192.168.138.255", "netmask": "255.255.255.0", "network": "192.168.138.0", "prefix": "24"}, "ipv6": [{"address": "2003:df:7748:8b00:5054:ff:fe19:eeed", "prefix": "64", "scope": "global"}, {"address": "fe80::5054:ff:fe19:eeed", "prefix": "64", "scope": "link"}], "features": {"rx_checksumming": "on [fixed]", "tx_checksumming": "on", "tx_checksum_ipv4": "off [fixed]", "tx_checksum_ip_generic": "on", "tx_checksum_ipv6": "off [fixed]", "tx_checksum_fcoe_crc": "off [fixed]", "tx_checksum_sctp": "off [fixed]", "scatter_gather": "on", "tx_scatter_gather": "on", "tx_scatter_gather_fraglist": "off [fixed]", "tcp_segmentation_offload": "on", "tx_tcp_segmentation": "on", "tx_tcp_ecn_segmentation": "on", "tx_tcp_mangleid_segmentation": "off", "tx_tcp6_segmentation": "on", "generic_segmentation_offload": "on", "generic_receive_offload": "on", "large_receive_offload": "off [fixed]", "rx_vlan_offload": "off [fixed]", "tx_vlan_offload": "off [fixed]", "ntuple_filters": "off [fixed]", "receive_hashing": "off [fixed]", "highdma": "on [fixed]", "rx_vlan_filter": "on [fixed]", "vlan_challenged": "off [fixed]", "tx_lockless": "off [fixed]", "netns_local": "off [fixed]", "tx_gso_robust": "on [fixed]", "tx_fcoe_segmentation": "off [fixed]", "tx_gre_segmentation": "off [fixed]", "tx_gre_csum_segmentation": "off [fixed]", "tx_ipxip4_segmentation": "off [fixed]", "tx_ipxip6_segmentation": "off [fixed]", "tx_udp_tnl_segmentation": "off [fixed]", "tx_udp_tnl_csum_segmentation": "off [fixed]", "tx_gso_partial": "off [fixed]", "tx_tunnel_remcsum_segmentation": "off [fixed]", "tx_sctp_segmentation": "off [fixed]", "tx_esp_segmentation": "off [fixed]", "tx_udp_segmentation": "off [fixed]", "tx_gso_list": "off [fixed]", "fcoe_mtu": "off [fixed]", "tx_nocache_copy": "off", "loopback": "off [fixed]", "rx_fcs": "off [fixed]", "rx_all": "off [fixed]", "tx_vlan_stag_hw_insert": "off [fixed]", "rx_vlan_stag_hw_parse": "off [fixed]", "rx_vlan_stag_filter": "off [fixed]", "l2_fwd_offload": "off [fixed]", "hw_tc_offload": "off [fixed]", "esp_hw_offload": "off [fixed]", "esp_tx_csum_hw_offload": "off [fixed]", "rx_udp_tunnel_port_offload": "off [fixed]", "tls_hw_tx_offload": "off [fixed]", "tls_hw_rx_offload": "off [fixed]", "rx_gro_hw": "on", "tls_hw_record": "off [fixed]", "rx_gro_list": "off", "macsec_hw_offload": "off [fixed]", "rx_udp_gro_forwarding": "off", "hsr_tag_ins_offload": "off [fixed]", "hsr_tag_rm_offload": "off [fixed]", "hsr_fwd_offload": "off [fixed]", "hsr_dup_offload": "off [fixed]"}, "timestamping": [], "hw_timestamp_filters": []}, "ansible_vethd74e01f": {"device": "vethd74e01f", "macaddress": "9e:ed:e8:91:c9:64", "mtu": 1500, "active": true, "type": "ether", "speed": 10000, "promisc": true, "features": {"rx_checksumming": "on", "tx_checksumming": "on", "tx_checksum_ipv4": "off [fixed]", "tx_checksum_ip_generic": "on", "tx_checksum_ipv6": "off [fixed]", "tx_checksum_fcoe_crc": "off [fixed]", "tx_checksum_sctp": "on", "scatter_gather": "on", "tx_scatter_gather": "on", "tx_scatter_gather_fraglist": "on", "tcp_segmentation_offload": "on", "tx_tcp_segmentation": "on", "tx_tcp_ecn_segmentation": "on", "tx_tcp_mangleid_segmentation": "on", "tx_tcp6_segmentation": "on", "generic_segmentation_offload": "on", "generic_receive_offload": "off", "large_receive_offload": "off [fixed]", "rx_vlan_offload": "on", "tx_vlan_offload": "on", "ntuple_filters": "off [fixed]", "receive_hashing": "off [fixed]", "highdma": "on", "rx_vlan_filter": "off [fixed]", "vlan_challenged": "off [fixed]", "tx_lockless": "on [fixed]", "netns_local": "off [fixed]", "tx_gso_robust": "off [fixed]", "tx_fcoe_segmentation": "off [fixed]", "tx_gre_segmentation": "on", "tx_gre_csum_segmentation": "on", "tx_ipxip4_segmentation": "on", "tx_ipxip6_segmentation": "on", "tx_udp_tnl_segmentation": "on", "tx_udp_tnl_csum_segmentation": "on", "tx_gso_partial": "off [fixed]", "tx_tunnel_remcsum_segmentation": "off [fixed]", "tx_sctp_segmentation": "on", "tx_esp_segmentation": "off [fixed]", "tx_udp_segmentation": "on", "tx_gso_list": "on", "fcoe_mtu": "off [fixed]", "tx_nocache_copy": "off", "loopback": "off [fixed]", "rx_fcs": "off [fixed]", "rx_all": "off [fixed]", "tx_vlan_stag_hw_insert": "on", "rx_vlan_stag_hw_parse": "on", "rx_vlan_stag_filter": "off [fixed]", "l2_fwd_offload": "off [fixed]", "hw_tc_offload": "off [fixed]", "esp_hw_offload": "off [fixed]", "esp_tx_csum_hw_offload": "off [fixed]", "rx_udp_tunnel_port_offload": "off [fixed]", "tls_hw_tx_offload": "off [fixed]", "tls_hw_rx_offload": "off [fixed]", "rx_gro_hw": "off [fixed]", "tls_hw_record": "off [fixed]", "rx_gro_list": "off", "macsec_hw_offload": "off [fixed]", "rx_udp_gro_forwarding": "off", "hsr_tag_ins_offload": "off [fixed]", "hsr_tag_rm_offload": "off [fixed]", "hsr_fwd_offload": "off [fixed]", "hsr_dup_offload": "off [fixed]"}, "timestamping": [], "hw_timestamp_filters": []}, "ansible_docker0": {"device": "docker0", "macaddress": "02:42:cb:18:bf:1f", "mtu": 1500, "active": true, "type": "bridge", "interfaces": ["vethd74e01f"], "id": "8000.0242cb18bf1f", "stp": false, "speed": 10000, "promisc": false, "ipv4": {"address": "172.17.0.1", "broadcast": "172.17.255.255", "netmask": "255.255.0.0", "network": "172.17.0.0", "prefix": "16"}, "features": {"rx_checksumming": "off [fixed]", "tx_checksumming": "on", "tx_checksum_ipv4": "off [fixed]", "tx_checksum_ip_generic": "on", "tx_checksum_ipv6": "off [fixed]", "tx_checksum_fcoe_crc": "off [fixed]", "tx_checksum_sctp": "off [fixed]", "scatter_gather": "on", "tx_scatter_gather": "on", "tx_scatter_gather_fraglist": "on", "tcp_segmentation_offload": "on", "tx_tcp_segmentation": "on", "tx_tcp_ecn_segmentation": "on", "tx_tcp_mangleid_segmentation": "on", "tx_tcp6_segmentation": "on", "generic_segmentation_offload": "on", "generic_receive_offload": "on", "large_receive_offload": "off [fixed]", "rx_vlan_offload": "off [fixed]", "tx_vlan_offload": "on", "ntuple_filters": "off [fixed]", "receive_hashing": "off [fixed]", "highdma": "on", "rx_vlan_filter": "off [fixed]", "vlan_challenged": "off [fixed]", "tx_lockless": "on [fixed]", "netns_local": "on [fixed]", "tx_gso_robust": "off [requested on]", "tx_fcoe_segmentation": "off [requested on]", "tx_gre_segmentation": "on", "tx_gre_csum_segmentation": "on", "tx_ipxip4_segmentation": "on", "tx_ipxip6_segmentation": "on", "tx_udp_tnl_segmentation": "on", "tx_udp_tnl_csum_segmentation": "on", "tx_gso_partial": "on", "tx_tunnel_remcsum_segmentation": "on", "tx_sctp_segmentation": "on", "tx_esp_segmentation": "on", "tx_udp_segmentation": "on", "tx_gso_list": "on", "fcoe_mtu": "off [fixed]", "tx_nocache_copy": "off", "loopback": "off [fixed]", "rx_fcs": "off [fixed]", "rx_all": "off [fixed]", "tx_vlan_stag_hw_insert": "on", "rx_vlan_stag_hw_parse": "off [fixed]", "rx_vlan_stag_filter": "off [fixed]", "l2_fwd_offload": "off [fixed]", "hw_tc_offload": "off [fixed]", "esp_hw_offload": "off [fixed]", "esp_tx_csum_hw_offload": "off [fixed]", "rx_udp_tunnel_port_offload": "off [fixed]", "tls_hw_tx_offload": "off [fixed]", "tls_hw_rx_offload": "off [fixed]", "rx_gro_hw": "off [fixed]", "tls_hw_record": "off [fixed]", "rx_gro_list": "off", "macsec_hw_offload": "off [fixed]", "rx_udp_gro_forwarding": "off", "hsr_tag_ins_offload": "off [fixed]", "hsr_tag_rm_offload": "off [fixed]", "hsr_fwd_offload": "off [fixed]", "hsr_dup_offload": "off [fixed]"}, "timestamping": [], "hw_timestamp_filters": []}, "ansible_lo": {"device": "lo", "mtu": 65536, "active": true, "type": "loopback", "promisc": false, "ipv4": {"address": "127.0.0.1", "broadcast": "", "netmask": "255.0.0.0", "network": "127.0.0.0", "prefix": "8"}, "features": {"rx_checksumming": "on [fixed]", "tx_checksumming": "on", "tx_checksum_ipv4": "off [fixed]", "tx_checksum_ip_generic": "on [fixed]", "tx_checksum_ipv6": "off [fixed]", "tx_checksum_fcoe_crc": "off [fixed]", "tx_checksum_sctp": "on [fixed]", "scatter_gather": "on", "tx_scatter_gather": "on [fixed]", "tx_scatter_gather_fraglist": "on [fixed]", "tcp_segmentation_offload": "on", "tx_tcp_segmentation": "on", "tx_tcp_ecn_segmentation": "on", "tx_tcp_mangleid_segmentation": "on", "tx_tcp6_segmentation": "on", "generic_segmentation_offload": "on", "generic_receive_offload": "on", "large_receive_offload": "off [fixed]", "rx_vlan_offload": "off [fixed]", "tx_vlan_offload": "off [fixed]", "ntuple_filters": "off [fixed]", "receive_hashing": "off [fixed]", "highdma": "on [fixed]", "rx_vlan_filter": "off [fixed]", "vlan_challenged": "on [fixed]", "tx_lockless": "on [fixed]", "netns_local": "on [fixed]", "tx_gso_robust": "off [fixed]", "tx_fcoe_segmentation": "off [fixed]", "tx_gre_segmentation": "off [fixed]", "tx_gre_csum_segmentation": "off [fixed]", "tx_ipxip4_segmentation": "off [fixed]", "tx_ipxip6_segmentation": "off [fixed]", "tx_udp_tnl_segmentation": "off [fixed]", "tx_udp_tnl_csum_segmentation": "off [fixed]", "tx_gso_partial": "off [fixed]", "tx_tunnel_remcsum_segmentation": "off [fixed]", "tx_sctp_segmentation": "on", "tx_esp_segmentation": "off [fixed]", "tx_udp_segmentation": "on", "tx_gso_list": "on", "fcoe_mtu": "off [fixed]", "tx_nocache_copy": "off [fixed]", "loopback": "on [fixed]", "rx_fcs": "off [fixed]", "rx_all": "off [fixed]", "tx_vlan_stag_hw_insert": "off [fixed]", "rx_vlan_stag_hw_parse": "off [fixed]", "rx_vlan_stag_filter": "off [fixed]", "l2_fwd_offload": "off [fixed]", "hw_tc_offload": "off [fixed]", "esp_hw_offload": "off [fixed]", "esp_tx_csum_hw_offload": "off [fixed]", "rx_udp_tunnel_port_offload": "off [fixed]", "tls_hw_tx_offload": "off [fixed]", "tls_hw_rx_offload": "off [fixed]", "rx_gro_hw": "off [fixed]", "tls_hw_record": "off [fixed]", "rx_gro_list": "off", "macsec_hw_offload": "off [fixed]", "rx_udp_gro_forwarding": "off", "hsr_tag_ins_offload": "off [fixed]", "hsr_tag_rm_offload": "off [fixed]", "hsr_fwd_offload": "off [fixed]", "hsr_dup_offload": "off [fixed]"}, "timestamping": [], "hw_timestamp_filters": []}, "ansible_eth0": {"device": "eth0", "macaddress": "52:54:00:30:9a:1a", "mtu": 1500, "active": true, "module": "virtio_net", "type": "ether", "pciid": "virtio2", "speed": -1, "promisc": false, "ipv4": {"address": "192.168.121.105", "broadcast": "", "netmask": "255.255.255.0", "network": "192.168.121.0", "prefix": "24"}, "ipv6": [{"address": "fe80::5054:ff:fe30:9a1a", "prefix": "64", "scope": "link"}], "features": {"rx_checksumming": "on [fixed]", "tx_checksumming": "on", "tx_checksum_ipv4": "off [fixed]", "tx_checksum_ip_generic": "on", "tx_checksum_ipv6": "off [fixed]", "tx_checksum_fcoe_crc": "off [fixed]", "tx_checksum_sctp": "off [fixed]", "scatter_gather": "on", "tx_scatter_gather": "on", "tx_scatter_gather_fraglist": "off [fixed]", "tcp_segmentation_offload": "on", "tx_tcp_segmentation": "on", "tx_tcp_ecn_segmentation": "on", "tx_tcp_mangleid_segmentation": "off", "tx_tcp6_segmentation": "on", "generic_segmentation_offload": "on", "generic_receive_offload": "on", "large_receive_offload": "off [fixed]", "rx_vlan_offload": "off [fixed]", "tx_vlan_offload": "off [fixed]", "ntuple_filters": "off [fixed]", "receive_hashing": "off [fixed]", "highdma": "on [fixed]", "rx_vlan_filter": "on [fixed]", "vlan_challenged": "off [fixed]", "tx_lockless": "off [fixed]", "netns_local": "off [fixed]", "tx_gso_robust": "on [fixed]", "tx_fcoe_segmentation": "off [fixed]", "tx_gre_segmentation": "off [fixed]", "tx_gre_csum_segmentation": "off [fixed]", "tx_ipxip4_segmentation": "off [fixed]", "tx_ipxip6_segmentation": "off [fixed]", "tx_udp_tnl_segmentation": "off [fixed]", "tx_udp_tnl_csum_segmentation": "off [fixed]", "tx_gso_partial": "off [fixed]", "tx_tunnel_remcsum_segmentation": "off [fixed]", "tx_sctp_segmentation": "off [fixed]", "tx_esp_segmentation": "off [fixed]", "tx_udp_segmentation": "off [fixed]", "tx_gso_list": "off [fixed]", "fcoe_mtu": "off [fixed]", "tx_nocache_copy": "off", "loopback": "off [fixed]", "rx_fcs": "off [fixed]", "rx_all": "off [fixed]", "tx_vlan_stag_hw_insert": "off [fixed]", "rx_vlan_stag_hw_parse": "off [fixed]", "rx_vlan_stag_filter": "off [fixed]", "l2_fwd_offload": "off [fixed]", "hw_tc_offload": "off [fixed]", "esp_hw_offload": "off [fixed]", "esp_tx_csum_hw_offload": "off [fixed]", "rx_udp_tunnel_port_offload": "off [fixed]", "tls_hw_tx_offload": "off [fixed]", "tls_hw_rx_offload": "off [fixed]", "rx_gro_hw": "on", "tls_hw_record": "off [fixed]", "rx_gro_list": "off", "macsec_hw_offload": "off [fixed]", "rx_udp_gro_forwarding": "off", "hsr_tag_ins_offload": "off [fixed]", "hsr_tag_rm_offload": "off [fixed]", "hsr_fwd_offload": "off [fixed]", "hsr_dup_offload": "off [fixed]"}, "timestamping": [], "hw_timestamp_filters": []}, "ansible_default_ipv4": {"gateway": "192.168.121.1", "interface": "eth0", "address": "192.168.121.105", "broadcast": "", "netmask": "255.255.255.0", "network": "192.168.121.0", "prefix": "24", "macaddress": "52:54:00:30:9a:1a", "mtu": 1500, "type": "ether", "alias": "eth0"}, "ansible_default_ipv6": {"gateway": "fe80::e228:6dff:fe7a:261d", "interface": "eth1", "address": "2003:df:7748:8b00:5054:ff:fe19:eeed", "prefix": "64", "scope": "global", "macaddress": "52:54:00:19:ee:ed", "mtu": 1500, "type": "ether"}, "ansible_all_ipv4_addresses": ["192.168.138.230", "172.17.0.1", "192.168.121.105"], "ansible_all_ipv6_addresses": ["2003:df:7748:8b00:5054:ff:fe19:eeed", "fe80::5054:ff:fe19:eeed", "fe80::5054:ff:fe30:9a1a"], "ansible_locally_reachable_ips": {"ipv4": ["127.0.0.0/8", "127.0.0.1", "172.17.0.1", "192.168.121.105", "192.168.138.230"], "ipv6": ["2003:df:7748:8b00:5054:ff:fe19:eeed", "fe80::5054:ff:fe19:eeed", "fe80::5054:ff:fe30:9a1a"]}, "ansible_processor": ["0", "GenuineIntel", "Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)", "1", "GenuineIntel", "Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)", "2", "GenuineIntel", "Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)", "3", "GenuineIntel", "Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)", "4", "GenuineIntel", "Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)", "5", "GenuineIntel", "Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)", "6", "GenuineIntel", "Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)", "7", "GenuineIntel", "Intel Xeon E3-12xx v2 (Ivy Bridge, IBRS)"], "ansible_processor_count": 8, "ansible_processor_cores": 1, "ansible_processor_threads_per_core": 1, "ansible_processor_vcpus": 8, "ansible_processor_nproc": 8, "ansible_memtotal_mb": 15988, "ansible_memfree_mb": 8759, "ansible_swaptotal_mb": 2047, "ansible_swapfree_mb": 2047, "ansible_memory_mb": {"real": {"total": 15988, "used": 7229, "free": 8759}, "nocache": {"free": 14962, "used": 1026}, "swap": {"total": 2047, "free": 2047, "used": 0, "cached": 0}}, "ansible_bios_date": "04/01/2014", "ansible_bios_vendor": "SeaBIOS", "ansible_bios_version": "1.13.0-1ubuntu1.1", "ansible_board_asset_tag": "NA", "ansible_board_name": "NA", "ansible_board_serial": "NA", "ansible_board_vendor": "NA", "ansible_board_version": "NA", "ansible_chassis_asset_tag": "NA", "ansible_chassis_serial": "NA", "ansible_chassis_vendor": "QEMU", "ansible_chassis_version": "pc-i440fx-focal", "ansible_form_factor": "Other", "ansible_product_name": "Standard PC (i440FX + PIIX, 1996)", "ansible_product_serial": "NA", "ansible_product_uuid": "NA", "ansible_product_version": "pc-i440fx-focal", "ansible_system_vendor": "QEMU", "ansible_devices": {"loop1": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "4096", "partitions": {}, "rotational": "1", "scheduler_mode": "none", "sectors": "229272", "sectorsize": "512", "size": "111.95 MB", "host": "", "holders": []}, "loop6": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "0", "partitions": {}, "rotational": "1", "scheduler_mode": "none", "sectors": "0", "sectorsize": "512", "size": "0.00 Bytes", "host": "", "holders": []}, "loop4": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "4096", "partitions": {}, "rotational": "1", "scheduler_mode": "none", "sectors": "178216", "sectorsize": "512", "size": "87.02 MB", "host": "", "holders": []}, "loop2": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "4096", "partitions": {}, "rotational": "1", "scheduler_mode": "none", "sectors": "109072", "sectorsize": "512", "size": "53.26 MB", "host": "", "holders": []}, "loop0": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "4096", "partitions": {}, "rotational": "1", "scheduler_mode": "none", "sectors": "129944", "sectorsize": "512", "size": "63.45 MB", "host": "", "holders": []}, "dm-0": {"virtual": 1, "links": {"ids": ["dm-name-ubuntu--vg-ubuntu--lv", "dm-uuid-LVM-ACjNqd1Zl2QjhcczrpSwbzAtvQGqBs7hCkaa3QcAR5hj2KxtXfP8h9VmZqba2mou"], "uuids": ["950e6bdf-a9a9-425c-8f8c-4a41d4a18529"], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "512", "partitions": {}, "rotational": "1", "scheduler_mode": "", "sectors": "132112384", "sectorsize": "512", "size": "63.00 GB", "host": "", "holders": []}, "loop7": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "0", "partitions": {}, "rotational": "1", "scheduler_mode": "none", "sectors": "0", "sectorsize": "512", "size": "0.00 Bytes", "host": "", "holders": []}, "loop5": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "4096", "partitions": {}, "rotational": "1", "scheduler_mode": "none", "sectors": "0", "sectorsize": "512", "size": "0.00 Bytes", "host": "", "holders": []}, "vda": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": "0x1af4", "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "512", "partitions": {"vda2": {"links": {"ids": [], "uuids": ["78641a2c-5849-4c2f-9395-a0311e169523"], "labels": [], "masters": []}, "start": "4096", "sectors": "4194304", "sectorsize": 512, "size": "2.00 GB", "uuid": "78641a2c-5849-4c2f-9395-a0311e169523", "holders": []}, "vda3": {"links": {"ids": ["lvm-pv-uuid-iXeKSw-VqzZ-A2Tj-js0O-PUV8-uGO9-3UfGiu"], "uuids": [], "labels": [], "masters": ["dm-0"]}, "start": "4198400", "sectors": "264235008", "sectorsize": 512, "size": "126.00 GB", "uuid": null, "holders": ["ubuntu--vg-ubuntu--lv"]}, "vda1": {"links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "start": "2048", "sectors": "2048", "sectorsize": 512, "size": "1.00 MB", "uuid": null, "holders": []}}, "rotational": "1", "scheduler_mode": "mq-deadline", "sectors": "268435456", "sectorsize": "512", "size": "128.00 GB", "host": "SCSI storage controller: Red Hat, Inc. Virtio block device", "holders": []}, "loop3": {"virtual": 1, "links": {"ids": [], "uuids": [], "labels": [], "masters": []}, "vendor": null, "model": null, "sas_address": null, "sas_device_handle": null, "removable": "0", "support_discard": "4096", "partitions": {}, "rotational": "1", "scheduler_mode": "none", "sectors": "130880", "sectorsize": "512", "size": "63.91 MB", "host": "", "holders": []}}, "ansible_device_links": {"ids": {"dm-0": 

["dm-name-ubuntu--vg-ubuntu--lv", "dm-uuid-LVM-ACjNqd1Zl2QjhcczrpSwbzAtvQGqBs7hCkaa3QcAR5hj2KxtXfP8h9VmZqba2mou"], "vda3": ["lvm-pv-uuid-iXeKSw-VqzZ-A2Tj-js0O-PUV8-uGO9-3UfGiu"]}, "uuids": {"dm-0": ["950e6bdf-a9a9-425c-8f8c-4a41d4a18529"], "vda2": ["78641a2c-5849-4c2f-9395-a0311e169523"]}, "labels": {}, "masters": {"vda3": ["dm-0"]}}, "ansible_uptime_seconds": 143665, "ansible_lvm": "N/A", "ansible_mounts": [{"mount": "/", "device": "/dev/mapper/ubuntu--vg-ubuntu--lv", "fstype": "ext4", "options": "rw,relatime", "size_total": 66257006592, "size_available": 53913628672, "block_size": 4096, "block_total": 16176027, "block_available": 13162507, "block_used": 3013520, "inode_total": 4128768, "inode_available": 3903329, "inode_used": 225439, "uuid": "950e6bdf-a9a9-425c-8f8c-4a41d4a18529"}, {"mount": "/boot", "device": "/dev/vda2", "fstype": "ext4", "options": "rw,relatime", "size_total": 2040373248, "size_available": 1543581696, "block_size": 4096, "block_total": 498138, "block_available": 376851, "block_used": 121287, "inode_total": 131072, "inode_available": 130751, "inode_used": 321, "uuid": "78641a2c-5849-4c2f-9395-a0311e169523"}, {"mount": "/snap/snapd/19457", "device": "/dev/loop2", "fstype": "squashfs", "options": "ro,nodev,relatime,errors=continue", "size_total": 55967744, "size_available": 0, "block_size": 131072, "block_total": 427, "block_available": 0, "block_used": 427, "inode_total": 658, "inode_available": 0, "inode_used": 658, "uuid": "N/A"}, {"mount": "/snap/core20/1974", "device": "/dev/loop0", "fstype": "squashfs", "options": "ro,nodev,relatime,errors=continue", "size_total": 66584576, "size_available": 0, "block_size": 131072, "block_total": 508, "block_available": 0, "block_used": 508, "inode_total": 11995, "inode_available": 0, "inode_used": 11995, "uuid": "N/A"}, {"mount": "/snap/lxd/24322", "device": "/dev/loop1", "fstype": "squashfs", "options": "ro,nodev,relatime,errors=continue", "size_total": 117440512, "size_available": 0, "block_size": 131072, "block_total": 896, "block_available": 0, "block_used": 896, "inode_total": 873, "inode_available": 0, "inode_used": 873, "uuid": "N/A"}, {"mount": "/snap/core20/2182", "device": "/dev/loop3", "fstype": "squashfs", "options": "ro,nodev,relatime,errors=continue", "size_total": 67108864, "size_available": 0, "block_size": 131072, "block_total": 512, "block_available": 0, "block_used": 512, "inode_total": 12041, "inode_available": 0, "inode_used": 12041, "uuid": "N/A"}, {"mount": "/snap/lxd/27948", "device": "/dev/loop4", "fstype": "squashfs", "options": "ro,nodev,relatime,errors=continue", "size_total": 91357184, "size_available": 0, "block_size": 131072, "block_total": 697, "block_available": 0, "block_used": 697, "inode_total": 959, "inode_available": 0, "inode_used": 959, "uuid": "N/A"}], "ansible_service_mgr": "systemd", "gather_subset": ["all"], "module_setup": true}, "invocation": {"module_args": {"gather_subset": ["all"], "gather_timeout": 10, "filter": [], "fact_path": "/etc/ansible/facts.d"}}}\r\n', b'Shared connection to 192.168.138.230 closed.\r\n')

<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' 192.168.138.230 '/bin/sh -c '"'"'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1712403681.9181123-166165-167306954967825/ > /dev/null 2>&1 && sleep 0'"'"''
<192.168.138.230> (0, b'', b'')
ok: [vabu00]

PLAY RECAP ***********************************************************************************************************************
vabu00                     : ok=1    changed=0    unreachable=0    failed=0    skipped=0    rescued=0    ignored=0

=============================== Minio =========================================================
cmadmin@ansible-nas:~/ansible/ansible-nas$ ansible-playbook -vvv -i inventories/my-ansible-nas/inventory -l vabu00 nas.yml  -t minio
cmadmin@ansible-nas:~/ansible/ansible-nas$ ansible-playbook -vvv -i inventories/my-ansible-nas/inventory -l vabu00 nas.yml  -t minio
ansible-playbook [core 2.16.5]
  config file = /home/cmadmin/ansible/ansible-nas/ansible.cfg
  configured module search path = ['/home/cmadmin/.ansible/plugins/modules', '/usr/share/ansible/plugins/modules']
  ansible python module location = /home/cmadmin/.local/pipx/venvs/ansible/lib/python3.10/site-packages/ansible
  ansible collection location = /home/cmadmin/.ansible/collections:/usr/share/ansible/collections
  executable location = /home/cmadmin/.local/bin/ansible-playbook
  python version = 3.10.12 (main, Nov 20 2023, 15:14:05) [GCC 11.4.0] (/home/cmadmin/.local/pipx/venvs/ansible/bin/python)
  jinja version = 3.1.3
  libyaml = True
Using /home/cmadmin/ansible/ansible-nas/ansible.cfg as config file
host_list declined parsing /home/cmadmin/ansible/ansible-nas/inventories/my-ansible-nas/inventory as it did not pass its verify_file() method
script declined parsing /home/cmadmin/ansible/ansible-nas/inventories/my-ansible-nas/inventory as it did not pass its verify_file() method
auto declined parsing /home/cmadmin/ansible/ansible-nas/inventories/my-ansible-nas/inventory as it did not pass its verify_file() method
Parsed /home/cmadmin/ansible/ansible-nas/inventories/my-ansible-nas/inventory inventory source with ini plugin
redirecting (type: modules) ansible.builtin.seboolean to ansible.posix.seboolean
statically imported: /home/cmadmin/ansible/ansible-nas/roles/stats/tasks/prometheus.yml
statically imported: /home/cmadmin/ansible/ansible-nas/roles/stats/tasks/telegraf.yml
statically imported: /home/cmadmin/ansible/ansible-nas/roles/stats/tasks/exporters.yml
statically imported: /home/cmadmin/ansible/ansible-nas/roles/stats/tasks/grafana.yml
Skipping callback 'default', as we already have a stdout callback.
Skipping callback 'minimal', as we already have a stdout callback.
Skipping callback 'oneline', as we already have a stdout callback.

PLAYBOOK: nas.yml ******************************************************************************************************************************************************************************
1 plays in nas.yml

PLAY [Ansible-NAS] *****************************************************************************************************************************************************************************

TASK [minio : Create Minio Directories] ********************************************************************************************************************************************************
task path: /home/cmadmin/ansible/ansible-nas/roles/minio/tasks/main.yml:4
skipping: [vabu00] => (item=/mnt/Volume2/docker/minio/data)  => {
    "ansible_loop_var": "item",
    "changed": false,
    "false_condition": "minio_enabled is true",
    "item": "/mnt/Volume2/docker/minio/data",
    "skip_reason": "Conditional result was False"
}
skipping: [vabu00] => {
    "changed": false,
    "msg": "All items skipped"
}

TASK [minio : Create minio Docker Container] ***************************************************************************************************************************************************
task path: /home/cmadmin/ansible/ansible-nas/roles/minio/tasks/main.yml:12
skipping: [vabu00] => {
    "changed": false,
    "false_condition": "minio_enabled is true",
    "skip_reason": "Conditional result was False"
}

TASK [minio : Stop minio] **********************************************************************************************************************************************************************
task path: /home/cmadmin/ansible/ansible-nas/roles/minio/tasks/main.yml:40
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' 192.168.138.230 '/bin/sh -c '"'"'echo ~ && sleep 0'"'"''
<192.168.138.230> (0, b'/home/cmadmin\n', b'')
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' 192.168.138.230 '/bin/sh -c '"'"'( umask 77 && mkdir -p "` echo /home/cmadmin/.ansible/tmp `"&& mkdir "` echo /home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476 `" && echo ansible-tmp-1712404459.8239462-169275-47995563994476="` echo /home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476 `" ) && sleep 0'"'"''
<192.168.138.230> (0, b'ansible-tmp-1712404459.8239462-169275-47995563994476=/home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476\n', b'')
Using module file /home/cmadmin/.local/pipx/venvs/ansible/lib/python3.10/site-packages/ansible_collections/community/docker/plugins/modules/docker_container.py
<192.168.138.230> PUT /home/cmadmin/.ansible/tmp/ansible-local-169254mt8p7sqb/tmp8ed1rgkf TO /home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476/AnsiballZ_docker_container.py
<192.168.138.230> SSH: EXEC sftp -b - -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' '[192.168.138.230]'
<192.168.138.230> (0, b'sftp> put /home/cmadmin/.ansible/tmp/ansible-local-169254mt8p7sqb/tmp8ed1rgkf /home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476/AnsiballZ_docker_container.py\n', b'')
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' 192.168.138.230 '/bin/sh -c '"'"'chmod u+x /home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476/ /home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476/AnsiballZ_docker_container.py && sleep 0'"'"''
<192.168.138.230> (0, b'', b'')
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' -tt 192.168.138.230 '/bin/sh -c '"'"'/usr/bin/python3 /home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476/AnsiballZ_docker_container.py && sleep 0'"'"''
<192.168.138.230> (0, b'\r\n{"changed": false, "invocation": {"module_args": {"name": "minio", "state": "absent", "docker_host": "unix:///var/run/docker.sock", "api_version": "auto", "timeout": 60, "tls": false, "use_ssh_client": false, "validate_certs": false, "debug": false, "cleanup": false, "container_default_behavior": "no_defaults", "command_handling": "correct", "force_kill": false, "ignore_image": false, "image_comparison": "desired-image", "image_label_mismatch": "ignore", "keep_volumes": true, "networks_cli_compatible": true, "output_logs": false, "pull": "missing", "pull_check_mode_behavior": "image_not_present", "purge_networks": false, "recreate": false, "restart": false, "tls_hostname": null, "ca_path": null, "client_cert": null, "client_key": null, "ssl_version": null, "comparisons": null, "default_host_ip": null, "image": null, "image_name_mismatch": null, "kill_signal": null, "paused": null, "removal_wait_timeout": null, "auto_remove": null, "blkio_weight": null, "capabilities": null, "cap_drop": null, "cgroupns_mode": null, "cgroup_parent": null, "command": null, "cpu_period": null, "cpu_quota": null, "cpuset_cpus": null, "cpuset_mems": null, "cpu_shares": null, "entrypoint": null, "cpus": null, "detach": null, "interactive": null, "devices": null, "device_read_bps": null, "device_write_bps": null, "device_read_iops": null, "device_write_iops": null, "device_requests": null, "dns_servers": null, "dns_opts": null, "dns_search_domains": null, "domainname": null, "env": null, "env_file": null, "etc_hosts": null, "groups": null, "healthcheck": null, "hostname": null, "init": null, "ipc_mode": null, "kernel_memory": null, "labels": null, "links": null, "log_driver": null, "log_options": null, "mac_address": null, "memory": null, "memory_reservation": null, "memory_swap": null, "memory_swappiness": null, "stop_timeout": null, "network_mode": null, "networks": null, "oom_killer": null, "oom_score_adj": null, "pid_mode": null, "pids_limit": null, "platform": null, "privileged": null, "read_only": null, "restart_policy": null, "restart_retries": null, "runtime": null, "security_opts": null, "shm_size": null, "stop_signal": null, "storage_opts": null, "sysctls": null, "tmpfs": null, "tty": null, "ulimits": null, "user": null, "userns_mode": null, "uts": null, "volume_driver": null, "volumes_from": null, "working_dir": null, "mounts": null, "volumes": null, "exposed_ports": null, "publish_all_ports": null, "published_ports": null}}}\r\n', b'Shared connection to 192.168.138.230 closed.\r\n')
<192.168.138.230> ESTABLISH SSH CONNECTION FOR USER: None
<192.168.138.230> SSH: EXEC ssh -C -o ControlMaster=auto -o ControlPersist=60s -o KbdInteractiveAuthentication=no -o PreferredAuthentications=gssapi-with-mic,gssapi-keyex,hostbased,publickey -o PasswordAuthentication=no -o ConnectTimeout=10 -o 'ControlPath="/home/cmadmin/.ansible/cp/28107ce50a"' 192.168.138.230 '/bin/sh -c '"'"'rm -f -r /home/cmadmin/.ansible/tmp/ansible-tmp-1712404459.8239462-169275-47995563994476/ > /dev/null 2>&1 && sleep 0'"'"''
<192.168.138.230> (0, b'', b'')
ok: [vabu00] => {
    "changed": false,
    "invocation": {
        "module_args": {
            "api_version": "auto",
            "auto_remove": null,
            "blkio_weight": null,
            "ca_path": null,
            "cap_drop": null,
            "capabilities": null,
            "cgroup_parent": null,
            "cgroupns_mode": null,
            "cleanup": false,
            "client_cert": null,
            "client_key": null,
            "command": null,
            "command_handling": "correct",
            "comparisons": null,
            "container_default_behavior": "no_defaults",
            "cpu_period": null,
            "cpu_quota": null,
            "cpu_shares": null,
            "cpus": null,
            "cpuset_cpus": null,
            "cpuset_mems": null,
            "debug": false,
            "default_host_ip": null,
            "detach": null,
            "device_read_bps": null,
            "device_read_iops": null,
            "device_requests": null,
            "device_write_bps": null,
            "device_write_iops": null,
            "devices": null,
            "dns_opts": null,
            "dns_search_domains": null,
            "dns_servers": null,
            "docker_host": "unix:///var/run/docker.sock",
            "domainname": null,
            "entrypoint": null,
            "env": null,
            "env_file": null,
            "etc_hosts": null,
            "exposed_ports": null,
            "force_kill": false,
            "groups": null,
            "healthcheck": null,
            "hostname": null,
            "ignore_image": false,
            "image": null,
            "image_comparison": "desired-image",
            "image_label_mismatch": "ignore",
            "image_name_mismatch": null,
            "init": null,
            "interactive": null,
            "ipc_mode": null,
            "keep_volumes": true,
            "kernel_memory": null,
            "kill_signal": null,
            "labels": null,
            "links": null,
            "log_driver": null,
            "log_options": null,
            "mac_address": null,
            "memory": null,
            "memory_reservation": null,
            "memory_swap": null,
            "memory_swappiness": null,
            "mounts": null,
            "name": "minio",
            "network_mode": null,
            "networks": null,
            "networks_cli_compatible": true,
            "oom_killer": null,
            "oom_score_adj": null,
            "output_logs": false,
            "paused": null,
            "pid_mode": null,
            "pids_limit": null,
            "platform": null,
            "privileged": null,
            "publish_all_ports": null,
            "published_ports": null,
            "pull": "missing",
            "pull_check_mode_behavior": "image_not_present",
            "purge_networks": false,
            "read_only": null,
            "recreate": false,
            "removal_wait_timeout": null,
            "restart": false,
            "restart_policy": null,
            "restart_retries": null,
            "runtime": null,
            "security_opts": null,
            "shm_size": null,
            "ssl_version": null,
            "state": "absent",
            "stop_signal": null,
            "stop_timeout": null,
            "storage_opts": null,
            "sysctls": null,
            "timeout": 60,
            "tls": false,
            "tls_hostname": null,
            "tmpfs": null,
            "tty": null,
            "ulimits": null,
            "use_ssh_client": false,
            "user": null,
            "userns_mode": null,
            "uts": null,
            "validate_certs": false,
            "volume_driver": null,
            "volumes": null,
            "volumes_from": null,
            "working_dir": null
        }
    }
}

PLAY RECAP *************************************************************************************************************************************************************************************
vabu00                     : ok=1    changed=0    unreachable=0    failed=0    skipped=2    rescued=0    ignored=0
