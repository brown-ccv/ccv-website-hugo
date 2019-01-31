---
Title: Oscar
type: Oscar 
level: Main
weight: 0
icon: jupyter.svg
---

# Introduction

Welcome to the CCV Oscar Documentation & Quickstart Guide. This document is designed to help you get started using Oscar. For any questions/comments/concerns regarding this service, please contact CCV by emailing support@ccv.brown.edu

# Oscar

Oscar is Brown University's supercomputer.  Anyone with a Brown account get access to Oscar for free. 

# Connecting to Oscar for the first time

To log in to Oscar you need Secure Shell (SSH) on your computer. 

## Mac and Linux

To login in to Oscar, open a terminal and type

````
    ssh username@ssh.ccv.brown.edu
````

## Windows

Windows users need to install an SSH client. We recommend
[PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html),
a free SSH client for Windows. In PuTTY, use
`username@ssh.ccv.brown.edu` the Host Name.

The first time you connect to Oscar you will see a message like:

````
    The authenticity of host 'ssh.ccv.brown.edu (138.16.172.8)' can't be established.
    RSA key fingerprint is SHA256:Nt***************vL3cH7A.
    Are you sure you want to continue connecting (yes/no)? 
````

You can type `yes` . You will be prompted for your password. Note
nothing will show up on the screen when you type in your password, just
type it in and press enter. You will now be in your home directory on
Oscar. In your terminal you will see a prompt like this:

````
    [mhamilton@login004 ~]$ 
````

Congratulations, you are now on one of the Oscar login nodes.
