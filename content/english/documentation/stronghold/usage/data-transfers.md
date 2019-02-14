---
title: "Data Transfers"
project: Stronghold
section: Usage
date: 2019-01-14T13:06:12-05:00
draft: false
version:
---

# XFER Server

Stronghold tenants use xfer servers to export data from and to import data into their silos through SFTP. Access to the xfer servers is granted by group membership. These groups designate which areas (e.g. export, import) users have permission to, as well as read and write privileges to those locations.

Additionally, uploading to the import area is restricted to users that log in from outside of Stronghold. The reverse is also true, uploading to the export area is restricted to users that log in from inside of Stronghold.

# FileZilla
The instructions below are based on FileZilla, which is an open source SFTP client for Windows, Mac, and Linux. Any SFTP client software should work as long as the transfer setting can be configured to use the browser connection or be limited to a single connection; otherwise the user will be prompted for multiple password/Duo authentications.     

FileZilla can be downloaded by going to Brown’s software catalog and selecting the FileZilla link near the bottom of the page:
https://www.brown.edu/information-technology/software/free-alternatives-brown-licensed-software
Please download and install on your computer or system.

In order to import data into Stronghold or download data exported from Stronghold, you must first set up a Stronghold site outside of Stronghold. To download data imported to Stronghold or to export data from Stronghold, you have to set up a Stronghold site inside of your Stronghold workstation.

Data deletion:
Uploaded data is automatically deleted from xfer servers after 24 hours. To manually delete data, users will need:

ownership of the files
membership in the appropriate write group (sh_tenant_import_w or sh_tenant_export_w)
to be logged in from outside when deleting import files and from inside when deleting export files

## Creating Stronghold Site Outside of Stronghold

From a system outside of Stronghold, open FileZilla and click File > Site Manager

Click New Site and enter a name for it (e.g. stronghold).

Under the General tab, add the following entries, replacing <tenant> with the tenant you were assigned and <username> with the same username used to log in to Workday.
	Host: <tenant>.stronghold.brown.edu
	Port: 2222
	Protocol: SFTP - SSH File Transfer Protocol
	Logon Type: Interactive
	User: <username>








Under the Transfer Settings tab:
	Transfer mode: Active
	Limit number of simultaneous connections: CHECK
	Maximum number of connections: 1
If Transfer mode is not visible, click on the Edit drop down menu and select Settings…
In Select Page and under Connection, click on FTP
Change Transfer Mode to Active


Click Connect to begin the login process.



Accept the server’s host key by clicking OK.  You can check the box to “always trust this host”.  



You will first be prompted for your password, enter the same password used to log in to Workday and click OK.



Next you will see what looks like another password prompt, but if you read the text you’ ll see it’s actually prompting you to select a Duo authentication method. Enter the number of your choice and click OK. Confirm your Duo authentication in the manner you selected.





























Uploading Import Data:
On the Remote site (right) pane, you should see an import and export directory. Double-click the import directory to expand it.

On the Local site (left) pane, browse to the location of the file(s) you’d like to upload. Drag the file(s) to your user directory in the Remote site under your import directory and wait for the upload process to complete.


Downloading Export Data:
On the Remote site (right) pane, you should see an import and export directory. Double-click the export directory to expand it.

On the Local site (left) pane, browse to a folder located somewhere inside /data.  Drag the file(s) to your user directory in the Remote site under your export directory to the folder you selected and wait for the download process to complete.





Creating Stronghold Site Inside of Stronghold

From your workstation inside Stronghold, open FileZilla and click File > Site Manager

Click New Site and enter a name for it (e.g. stronghold).

Under the General tab, add the following entries, replacing <tenant> with the tenant you were assigned and <username> with the same username used to log in to Workday
	Host: <tenant>-xfer.stronghold.brown.edu
	Port: 2222
	Protocol: SFTP - SSH File Transfer Protocol
	Logon Type: Interactive
	User: <username>





Under the Transfer Settings tab:
	Transfer mode: Active
	Limit number of simultaneous connections: CHECK
	Maximum number of connections: 1

Click Connect to begin the login process.



Accept the server’s host key by clicking OK.



You will first be prompted for your password, enter the same password used to log in to Workday and click OK.



Next you will see what looks like another password prompt, but if you read the text you’ll see it’s actually prompting you to select a Duo authentication method. Enter the number of your choice and click OK. Confirm your Duo authentication in the manner you selected.



Downloading Import Data:

On the Remote site (right) pane, you should see an import and export directory. Double-click the import directory to expand it.

On the Local site (left) pane, browse to a folder located somewhere inside /data.  Drag the file(s) to your user directory in the Remote site under your import directory and wait for the download process to complete.




 Uploading Export Data:
On the Remote site (right) pane, you should see an import and export directory. Double-click the export directory to expand it.

On the Local site (left) pane, browse to the location of the file(s) you’d like to upload. Drag the file(s) to your user directory in the Remote site under your export directory and wait for the upload process to complete.




DIRECT DOWNLOADS

Data sets can be downloaded from the web directly to a tenant’s xfer server. This functionality is not enabled by default and has some caveats. CIS will need to know where the data will be downloaded from so the IP addresses can be whitelisted on the campus firewall and on the xfer server. These direct download sessions are not as restricted as SFTP logins, so we limit access only to members of a special download group (sh_<tenant>_dwnld). FastX client software will need to be installed on the user’s local workstation. This functionality will need to be explicitly requested by the PI for CIS to enable it.

Download and install FastX from software.brown.edu

Run FastX from your local workstation.





Click the + icon and select SSH








Complete the SSH connection fields. Replace <tenant> with your group name and <username> with your login id. Then click Save.
Name: <tenant>-download
Host: <tenant>.stronghold.brown.edu
Port: 2223
User: <username>






You will be prompted for your password and then a Duo two-factor confirmation.





The first time you log into this service, you may see a message regarding the authenticity of the the host. Enter “yes” in the text field and click “Continue”.





Click the + icon, select Firefox or Filezilla and click OK.







A Firefox or Filezilla window will open, it may take a minute or two to load. Files will need to be saved to your ~/Downloads directory to be importable. Using Firefox you can navigate to any website that you have requested to be whitelisted. Using Filezilla you can create SFTP sessions to any remote servers that you have requested to be whitelisted.






When you’re done with the download, you should exit or “X” out of Firefox/Filezilla. Skipping this step may prevent the data from being properly virus scanned and moved to the import area.

You can then log into your Stronghold workstation node to complete the transfer. Start Filezilla and connect to the xfer server. There you can browse to your import/<username> directory which should contain your data to import.
