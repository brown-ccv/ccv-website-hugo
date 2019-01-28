---
title: "FAQ"
project: JupyterHub
section: Help and Support
date: 2019-01-14T13:06:08-05:00
draft: false
version: 1.0.0
---

# Why can't I sign into the JupyterHub?

There are two main reasons why you are unable to log into JupyterHub.

First, you may not have been approved to use the hub. If you are not actively enrolled in a class at Brown which is utilizing this service, then you will not have access to the Hub. Furthermore, if you previously had access and the class has since ended, permissions to the Hub are revoked at the end of semester.

Second, you may be trying to login with an unauthorized email address \(not a @brown.edu login email\). Please ensure you are using your Brown email address, and that you permitted to access the Hub.

{{< alert info >}}
If you believe you should have access to the Hub and don't, please contact us at jupyter-help@brown.edu
{{< /alert >}}

# My server is taking a long time to start or not starting! What do I do?

Resources on the Hub may be experiencing heavy load at the moment. We implement an auto-scaling of Hub resources when we detect the system is reaching capacity. If your server is taking a few moments to start, it is likely that the system is currently scaling up more resources, and this should only take a few minutes.

{{< alert info >}}
If your server continues to not launch after a few minutes, disconnect and attempt to connect again. If the issue persists, please contact us at jupyter-help@brown.edu
{{< /alert >}}

# My server just says "Your server is stopping". What do I do?

This means that your server has been halted and is rebooting. This may be because you were inactive for an extended period of time. If you experience this message, please wait a few moments and try to login again.

# My notebooks are running really slow. What is wrong?

You may have several active notebooks running in the background which could be consuming resources. It is recommended you close any unused notebooks as seen in the instructions [Managing Active Notebooks](../using-your-hub/managing-active-notebooks.md#shutting-down-notebooks)

If the notebook continues to run slow, we recommend you restart the notebooks kernel as seen in the [Managing Active Notebooks](../using-your-hub/managing-active-notebooks.md#restarting-notebook-kernel).

# My notebook is completely frozen! How can I restart it?

First try restarting the notebook kernel as seen in the [Managing Active Notebooks](../using-your-hub/managing-active-notebooks.md#restarting-notebook-kernel). If the issue persists, restart your server by following the instructions in [Shutting Down Server](../using-your-hub/shutting-down-server.md#shutting-down-your-server).

# I keep getting a "File Save Error" or "Insufficient Permissions". What is wrong?

This error happens when you are launching a notebook file from Google Drive which you do not have write permissions to. If you are using a notebook shared through Google Drive which you are not permitted to write to, please first copy the file to your personal Drive by right clicking on the file and selecting "Add to my Drive".

# Can I create notebooks directly on the hub without using Google Drive?

Yes, you can created files and run notebooks on the hub disk space, but they are not backed up. This means that if hub shuts down \(for rolling restarts, system failures, etc\), all the local data will be lost. We advice you use this at own risk as it is not an intended workspace for long-term notebooks.

# Can I collaborate with other users on a notebook at the same time?

Currently, the collaborate feature for notebooks has been disabled due to developmental reasons. You can share notebooks with other users the same way you would share any file on Google Drive, but they cannot be actively worked on by multiple users simultaneously.

# I have my own notebooks. How can I run them on the hub?

Yes you can, but please remember that the Brown JupyterHub is for academic purposes only. You can use the upload feature within the JupyterHub, or simply upload it to your google drive externally and launch it from within the Hub.

# Can I use a different programming language such as python 2.x or Julia?

While JupyterHub does support this, Brown CIS is currently only supporting Python 3.x. Sorry for any inconvenience this may cause.

# I can’t find my notebook I was working on last session.

Ensure you are looking in the right drive folder where you saved it. Please follow the steps provided in the [Launch an Existing Notebook](../getting-started/launch-an-existing-notebook.md#opening-an-existing-notebook).

# I am having an issue not discussed here. How can I get help?

Please feel free to contact us at jupyter-help@brown.edu with any questions/comments/concerns regarding anything JupyterHub.
