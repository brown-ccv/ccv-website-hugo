---
title: "Shutting Down Server"
project: JupyterHub
section: Using Your Notebook
date: 2019-01-14T13:06:08-05:00
draft: false
---

# Shutting Down Your Server

Once you are done working, we recommend you manually close down your JupyterHub server by using the JupyterHub Control Panel. This will ensure your session is safely shutdown and the resources you were using are released back to the hub.

1.  Hub &gt; Control Panel
2.  Click **Stop My Server**.

![Stop My Server will halt any kernels and logout.](../.gitbook/assets/screenshot-from-2018-09-19-15-49-26.png)

This method is highly recommended as it stores the state of the machine prior to booting down. This means that the next time you connect to your server, any notebooks running will be automatically resumed.

Alternatively, if your server is timed out due to inactivity \(ie: simply walking away from your live server\), we cannot guarantee automatic notebook booting upon your next login.

{% hint style="success" %}
Manually shutting down your sever is the recommended best practice procedure for when you are done working on your server.
{% endhint %}
