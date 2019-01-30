---
title: "Creating a New Notebook"
project: JupyterHub
section: Using Your Hub
date: 2019-01-14T13:06:08-05:00
draft: false
version: beta
---

# Creating a Notebook on Google Drive

If you do not have a previously existing notebook on your drive created, or wish to create a new notebook, use the Notebook Launcher tool for Google Drive by following these steps:

![image]({{< ref "./" >}}gelin.png)

1. Select  {{< fab "google-drive">}}Google Drive browser from left sidebar
2. Create a new launcher using the ![](../.gitbook/assets/screenshot-from-2018-09-19-15-46-05.png)New Launcher button  
3. Ensure the “**GDrive**” path is displayed for your launcher as seen below
4. Navigate to the location within your drive you would like to store the new file
5. Click **Python 3** under the **Notebook** section
6. A new “Unititled\(\#\).ipynb” file will appear in your current working drive directory and a blank Notebook will launch.

![](../.gitbook/assets/screenshot-from-2018-09-18-14-21-03.png)

{{< alert warning >}}
Please ensure that your Launcher process has the “GDrive” path specified \(as seen in the examples provided above\). If this is not displayed, carefully repeat the steps listed above.
{{< /alert >}}

{{% alert danger %}}
If the “GDrive” path is not present from the launcher, then any notebook you create using the launcher **WILL NOT** **AUTOMATICALLY** **BE SAVED TO YOUR GOOGLE DRIVE AND THUS NOT SECURELY BACKED UP!**
{{% /alert %}}

# Creating a Notebook on Locally on JupyterHub

{{< alert danger >}}
Notebooks created and stored on locally on the JupyterHub are not automatically backed up.
{{< /alert >}}

If you wish to create a temporary notebook for short-term usage that you would not like to store on you Google Drive, you can use the JupyterHub local drives as a workspace for notebooks. Notebooks created and stored on locally on the JupyterHub will persist between logins, but will not have any long-term backups synced unlike [Creating a Notebook on Google Drive](creating-a-new-notebook.md#creating-a-notebook-on-google-drive). Should you lose permissions to access the hub, or should the hub crash, these files will be lost.

To create a local notebook, follow the instructions below:

1. Select the local![](../.gitbook/assets/screenshot-from-2018-09-19-09-14-01.png)File Browser from left sidebar
2. Create a new launcher using the ![](../.gitbook/assets/screenshot-from-2018-09-19-15-46-05.png)New Launcher button
3. Click **Python 3** under the **Notebook** section
4. A new “Unititled\(\#\).ipynb” file will appear in your current working drive directory and a blank Notebook will launch.

![](../.gitbook/assets/screenshot-from-2018-09-19-09-21-05.png)
