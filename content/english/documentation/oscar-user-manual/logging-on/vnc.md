---
title: Vnc
date: 2019-01-31 22:06:05 +0000
project: Oscar
section: Connecting to Oscar
weight: 0
icon: check

---
# Desktop VNC

[Virtual Network Computing](http://en.wikipedia.org/wiki/Virtual_Network_Computing) (VNC) nodes allow users to connect remotely to a graphical desktop environment running on an Oscar compute node.

Using VNC, you can run GUI applications such as Matlab, Mathematica and Rstudio, with fast access to Oscar's high performance file system. This allows you to analyze and visualize data without needing to move the data off Oscar.

The CCV VNC requires that you download a client onto your machine.

## Instructions

1. Download the [CCV VNC client 2.0.1](https://brownbox.brown.edu/download.php?hash=a74c6723)
2. Ensure you have a recent version of the Java JDK or JRE. These can
   be found on [Oracle's Java Download
   Page](http://www.oracle.com/technetwork/java/javase/downloads/).
3. If Java has been installed correctly you can now run
   `CCV\_VNC\_2.x.jar` by double clicking on it. On MAC, you may need to
   first right click on the jar and chose "Open", and give the jar
   permission to run.
4. In the "Username" and "Password" field, enter your Oscar username
   and password. The server should remain `desktop.ccv.brown.edu`.
   Press "Connect."
5. On the window that pops up, select the memory/CPU parameters for
   your VNC session.
6. Your VNC session should appear. If you see a window saying your job
   was queued, it means there were not enough free resources to start
   your job and it was placed into the scheduling queue. You'll
   continue to get that message until your VNC job actually starts. You
   can monitor the progress of your job in the queue using normal
   scheduler commands.
7. Once your VNC session starts, you should see your desktop. There are
   two new buttons on the menubar at the top, **Suspend VNC session**
   and **End VNC session.**

When you are finished with your VNC session, click the "EXIT" button,
you now have two choices:

**Disconnect from VNC session** closes the client but leaves your VNC
session running. When you log in again, you will be automatically
forwarded to your existing VNC session.

**Kill VNC session** closes the client and stops your VNC session from
running.

{{% alert warning %}}
Closing the VNC window will only disconnect from the VNC session,
it will not kill it.

Sessions are limited to 7 days for all users, depending on resources
selected. After this time, the session will expire.
{{% /alert %}}