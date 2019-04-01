---
title: "Linux Workstation"
project: Stronghold
section: Usage
date: 2019-02-13T13:27:42-05:00
draft: false
---

# Stronghold Linux Environments
## RHEL7

Stronghold tenants with Linux workstations can access their environments using FastX. These sessions are persistent, which allows users to disconnect and resume them at another time and from different devices. CIS has configured a lightweight graphical panel for users to launch terminal sessions and other software packages.

Due to the sensitive nature of the data contained in Stronghold, CIS has taken measures to restrict the ability to accidentally or intentionally move data out of the environment. Direct SSH access is not enabled for end users, as there is no way to restrict copying and pasting the contents of a file from an SSH session. Copying and pasting from remote applications to local applications is also disabled (and vice versa).

To get started, you’ll need to download and install FastX from software.brown.edu.

You’ll need to be on Brown wireless or logged in through Brown CIS VPN to connect.

Launch FastX.


In the FastX connections window, click the “+” icon and select “SSH”.


Enter the details for your Stronghold connection.

Replace <tenant> with your assigned tenant name.
Replace <username> with your Brown login.
Click “Save”.


Double click the connection entry you just created.


Enter your credentials and click “Continue”.


You will be prompted to select a Duo two-factor authentication method. Enter the number of your choice, and click “Continue”.


The first time you log in, you may see a window asking to confirm the authenticity of your workstation. If this is your first time logging in, type “yes” in the text box and click “OK”.


After logging in, you’ll see the sessions window. If you had any running sessions, they would be listed here. Since this is your first time logging in, we’ll need to start a new session. Click the “+” icon.


Click “Stronghold” and “OK” to start the launcher panel.


A drop down menu of applications is found on the upper left hand side of the window.










If you click the terminal icon from the drop down, you’ll open a new terminal window. In it, you can load pymodules, conda environments, and run other commands. Expect to do most of your work here.










To save and disconnect your session, click the “person” icon and select “Disconnect”. The next time you log in you can resume your existing session by clicking the triangular “play” icon.

Note: you can only run one Stronghold panel at a time. Launching an additional panel will automatically terminate any other running sessions.
