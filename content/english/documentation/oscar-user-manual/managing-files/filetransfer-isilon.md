---
title: "Filetransfer"
date: 2019-01-31T17:06:52-05:00
draft: false
category: ""
lead: ""
weight: 0
icon: check
---

# Moving files from files.brown.edu

The department file servers (also known as Isilon) are:

-   \\\\files.brown.edu\\dfs (departmental/personal shares)
-   \\\\files.brown.edu\\research (research shares)
-   \\\\files.brown.edu{sharename} (miscellaneous shares)

You can transfer files between Department File Servers and Oscar using
[smbclient](https://www.samba.org/samba/docs/man/manpages-3/smbclient.1.html).

1\) Log into our dedicated system for transferring files in/out of Oscar:

````
   ssh transfer.ccv.brown.edu
````

2\) Start a screen session. This will allow you reattach to your terminal
window if you disconnect.

````
    screen
````

3\) Use Oscar's  high speed connection to files.brown.edu 



````
    smbclient "//hpcsmb.isi.ccv.brown.edu/SHARE_NAME" -D DIRECTORY_NAME -U "ad\BROWN_ID"`
````

Replace SHARE\_NAME, DIRECTORY\_NAME, and BROWN\_ID. DIRECTORY\_NAME is an optional
parameter.  The password required is your **Brown** password.

4\) Upload/download your data using the FTP "put"/"get" commands. Replace
DIRECTORY\_NAME with the folder you'd like to upload.

````
   put DIRECTORY_NAME
````

5\) You can detach from the screen session with a "CTRL+A D" keypress. To
reattach to your session:

````
   screen -r
````

## smbclient basics

-   `put` is upload to Department File Servers

Usage: `put <local_file> [remote file name]`

Copy `<local_file>` from Oscar to Deparment File Servers. The remote
file name is optional (use if you want to rename the file)

-   `get` is download to Oscar

Usage: `get <remote_file> [local file name]` Copy `<remote_file>` from
the Deparment File Servers to Oscar. The local file name is optional
(use if you want to rename the file)

### Moving more than one file:

To move more than one file at once use `mput` or `mget`. By default:

`recurse` is OFF. smbclient will not recurse into any subdirectories
when copying files

`prompt` is ON. smbclient will ask for confirmation for each file in the
subdirectories

You can toggle recursion ON/OFF with:

`recurse`

You can toggle prompt OFF/ON with:

`prompt`

