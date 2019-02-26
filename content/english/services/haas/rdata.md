---
title: "RData"
date: 2019-01-24T15:12:10-05:00
draft: false
category: "High-Performance Computing"
lead: "CCV's high-performance storage system for use with our HPC systems."
weight: 0
icon: server2
haas: true
---
RData is a high-performance storage system built on [IBM's GPFS](https://researcher.watson.ibm.com/researcher/view_group.php?id=4840) parallel filesytem. It is a tiered system with mutliple internal disk pools of both flash drives and spinning disks.

### Accessing Files on RData
Files stored on RData can be accessed in three different ways:
- On CCV's HPC systems, RData is mounted directly
- On other computers on Brown's campus network, RData can be mounted using the CIFS file access protocol 
- On any computer, files on RData can be accessed by a variety of file transfer tools

#### Instructions
##### CIFS

If you already have a CCV account, first [contact us](mailto:support@ccv.brown.edu) to confirm that your account is CIFS-enabled. Then follow our guide to access the share on your workstation or laptop.

##### File Transfer Tools

You can access files on RData using command-line tools like Secure Copy (SCP), Secure FTP (SFTP), and rsync by connecting to CCV's file transfer portal (transfer.ccv.brown.edu). You can also use any of a variety of GUI-based file transfer applications, such as: 

- [WinSCP](http://winscp.net) (Windows)
- [Fugu](http://rsug.itd.umich.edu/software/fugu/) (Mac)
- [Cyberduck](http://cyberduck.ch) (Mac)

Simply configure the application to connect to RData through CCV's file transfer portal (transfer.ccv.brown.edu) and login using your CCV username and password.
