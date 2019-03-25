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

Using VNC, you can run GUI-based applications such as Matlab, Mathematica and Rstudio, with fast access to Oscar's high performance file system. This allows you to analyze and visualize data without needing to move it off of Oscar.

The CCV VNC requires that you download a VNC client onto your machine.

## Instructions

1. Download the [CCV VNC client](https://brownbox.brown.edu/download.php?hash=b00a6c89)
2. Ensure you have a recent version of the Java JDK or JRE. These can be found on [Oracle's Java Download Page](http://www.oracle.com/technetwork/java/javase/downloads/).
3. If Java has been installed correctly you can now run `CCV\_VNC\_2.x.jar` by double clicking on it. On a Mac, you may need to first right click on the jar, choose "Open", and give the jar permission to run.
4. In the "Username" and "Password" fields, enter your Oscar username and password, respectively. The server should remain `desktop.ccv.brown.edu`.
   Press "Connect".
5. On the window that pops up, select the memory/CPU parameters you want for your VNC session.
6. Your VNC session should appear. If you see a window saying your job was queued, it means there were not enough free resources to start your job and it has been placed into the scheduling queue. You will continue to receive that message until your VNC job actually starts. You can monitor the progress of your job in the queue using normal scheduler commands.
7. Once your VNC session starts, you should see your desktop. There are two new buttons on the menubar at the top, **Suspend VNC session** and **End VNC session**.

When you are finished with your VNC session, click the "EXIT" button.
You now have two choices:

**Disconnect from VNC session** closes the client but leaves your VNC session running. When you log in again, you will be automatically
connected to your existing VNC session.

**Kill VNC session** closes the client and stops your VNC session from running.

{{% alert warning %}}
Closing the VNC window will only disconnect you from the VNC session,
it will not kill the session.

Sessions are limited to a designated period of time (maximum of 7 days, depending on the resources selected for the session). After this time, the session will expire.
{{% /alert %}}