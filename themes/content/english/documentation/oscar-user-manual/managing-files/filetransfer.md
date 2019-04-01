---
title: "Filetransfer"
date: 2019-01-31T17:06:52-05:00
draft: false
project: Oscar
section: Managing files
weight: 0
icon: check
---

# File transfer

{{< alert info >}}

Oscar has transfer nodes with a high speed conection for quickly moving
data.  To use the transfer nodes use `transfer.ccv.brown.edu` as the
host address.

{{</ alert >}}

# Moving files between your machine and Oscar

There are several ways to move files between your machine and Oscar.  Which
method you choose will depend on how much data you need to move and your
personal preference for each method.

  1. CIFS
  2. comand line
  3. GUI
  4. Globus online

1.\)  CIFS

You can drag and drop files from your machine to the Oscar filesystem with CIFS.
This is an easy method for a small number of files.

2.\) Command line

**Mac and Linux**

You can use `scp` to transfer files. For example to copy a file
from your computer to Oscar:
```shell
     scp /path/to/source/file <username>@transfer.ccv.brown.edu:/path/to/destination/file
```
To copy a file from Oscar to your computer:
```shell
     scp <username>@transfer.ccv.brown.edu:/path/to/source/file /path/to/destination/file
```
**Windows**
On Windows, if you have PuTTY installed, you can use it's `pscp`
function from the terminal.

3.\) GUI programs for transfering files using the `scp` or
`sftp` protocol

* [WinSCP](http://winscp.net) for Windows and
* [Fugu](http://rsug.itd.umich.edu/software/fugu/) for Mac
* [Cyberduck](http://cyberduck.ch) for Mac
* [FileZilla](https://filezilla-project.org) for all platforms

4.\) [Globus online](https://www.globus.org/)

Globus is a secure, reliable research data management service.  If you are
moving data from another institution that has a Globus endpoint, you can move data
directory to Oscar.  Oscar has two Globus endpoints:

```
    brownccv#Brown-CCV-oscar-1
    brownccv#Brown-CCV-oscar-2
```

You can use either endoint to move data to/from Oscar to another Globus endpoint.  
If you want to use Globus Online to move data to/from you own machine,
you can install Globus Connect Personal.
