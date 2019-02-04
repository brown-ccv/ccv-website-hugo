---
title: "Matlab Gui"
date: 2019-01-31T17:07:31-05:00
draft: false
project: Oscar
category: ""
lead: ""
weight: 0
icon: check
---

# Using the Matlab GUI on Oscar

On Oscar, the command `matlab` is actually a wrapper that sets up MATLAB
to run as a single-threaded, command-line program, which is the optimal
way to pack multiple Matlab scripts onto the Oscar compute nodes.

To run the actual multi-threaded version with JVM and Display enabled,
use:

````
    matlab-threaded
````

Similarly, to run this without the display enabled:

````
    matlab-threaded -nodisplay
````

{{< alert warning >}}
Do **not** run Matlab on the Oscar login nodes.  Request a compute node
either with an interactive session, a batch script, or using the VNC.
{{</ alert >}}

## VNC

The [VNC](https://web1.ccv.brown.edu/technologies/vnc) client provided
by CCV is the best way to launch GUI applications on Oscar, including
Matlab. From the terminal emulator in VNC use the
`matlab-threaded` command to launch the Matlab GUI. For example,

````
    matlab-threaded
````

Here is a snapshot of what it looks like:

![](https://web1.ccv.brown.edu/sites/default/files/Picture1_0.png){width="750"}

## X11 Forwarding

You can also run the MATLAB GUI in an X-forwarded interactive session.
This requires installing an X server on your workstation/PC and logging
in to Oscar with [X forwarding](x-forwarding) enabled. Use the
`interact` command to get interactive access to a compute node. Again,
for launching the GUI, you need to use the `matlab-threaded` command,
which enables the display and JVM. You may however experience a lag in
response from the Matlab GUI in an X forwarded session. Note that if
Matlab does not find the X window system available, it will launch in
command line mode (next section).

## CIFS

A workaround in some situations may be to use [CIFS](cifs) to mount the
Oscar filesystem on your PC and using the Matlab installation on your
computer. For example, if you have your simulation results residing on
Oscar, this might be a quick way to do post-processing on the data
instead of having to move the data to your computer or using the Matlab
GUI on Oscar. Note that users can connect to CIFS only from Brown
computers or on Brown WiFi.
