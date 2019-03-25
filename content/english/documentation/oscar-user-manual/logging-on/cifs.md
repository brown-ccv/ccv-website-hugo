---
title: CIFS
date: 2019-01-31 22:06:09 +0000
project: Oscar
section: Connecting to Oscar
weight: 0
icon: check

---
# Mounting the Oscar filesystem on your machine

CCV users can access their home, data, and scratch directories as a local mount on their own Windows, Mac, or Linux system using the Common Internet File System (CIFS) protocol (also called Samba). This allows you to use applications on your machine to open files stored on Oscar.  It is also a convienient way to move files between Oscar and your own machine, as you can drag and drop files.

{{< alert >}}
To use CIFS you will need to be on the Brown network. On campus use the 'Brown' wifi network. Off campus use the Brown VPN [VPN](https://vpn.brown.edu) client.
{{</ alert >}}

Users should ensure that the date and time are set correctly on
their machine. Once the date and time are correct, [use SSH to connect to Oscar](/../ssh) to set your CIFS password. Once logged in, run the command:

```shell
     smbpasswd
```

First, you will be prompted for your "old" password, which is the
temporary password you were given by CCV when your account was created. Next, you will be asked to enter a new CIFS password twice. You may choose to use the same password that you use for Oscar, if you wish.

{{< alert warning >}}
smbpasswd does not change your SSH login password, and changing the SSH login password does not change the CIFS password. However, if you ever need to request that your Oscar password be reset, both your smbpasswd and SSH login password to the same reset value.
{{</ alert >}}

Now you are ready to mount your CCV directories locally. Instructions for each of the various operating systems are given below.

## macOS

* In the Finder, press "Command + K" or select "Connect to Server..."
  from the "Go" menu.
* For "Server Address", enter `smb://oscarcifs.ccv.brown.edu/<user>`
  and click "Connect".
* Enter your username and CIFS password.
* You may choose to add your login credentials to your keychain so you will not need to enter this again.

**Optional.** If you would like to automatically connect to the share at startup:

* Open "System Preferences" (leave the Finder window open).
* Go to "Accounts" > "(your account name)".
* Select "Login Items".
* Drag your data share from the "Finder" window to the "Login Items" window.

## Linux

* Install the `cifs-utils` package:
```bash
      CentOS/RHEL:   $ sudo yum install cifs-utils
      
      Ubuntu:        $ sudo apt-get install cifs-utils
```
* Make a directory to mount the share into:
```bash
      $ sudo mkdir /mnt/rdata
```
* Create a credentials file and add your CCV account information (use the CIFS password):
```bash
        $ sudo gedit /etc/cifspw

        username=<user>
        password=<password>
```

* Allow only root access to the credentials files:
```bash
        $ sudo chmod 0600 /etc/cifspw
```

* Add an entry to the `fstab`:
```bash
        $ sudo gedit /etc/fstab
```

    The `fstab` entry is the single line:
```bash
         //oscarcifs.ccv.brown.edu/<user> /mnt/rdata cifs credentials=/etc/cifspw,vers=1.0,nounix,uid=<localUser> 0 0
```
    Change `<localUser>` to the login used on your Linux workstation.
* Mount the share:
```bash    
            $ mount -a
```

## Windows

* Right-click "Computer" and select "Map Network Drive".
* Select an unassigned drive letter.
* Enter `\\oscarcifs.ccv.brown.edu\<user>` as the Folder.
* Check "Connect using different credentials"
* Click "Finish"
* Enter your CCV user name as "ccv\\username" (no quotes)
* Enter your CIFS password and click "OK".

You can now access your home directory through Windows Explorer with the assigned drive letter. Your data and scratch directories are available as the subdirectories (`~/data` and `~/scratch`) of your home directory.