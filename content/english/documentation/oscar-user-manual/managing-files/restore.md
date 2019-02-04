---
title: "Restore"
date: 2019-02-01T08:43:12-05:00
draft: false
project: Oscar
category: ""
lead: ""
weight: 0
icon: check
---

# Restoring files

Nightly snapshots of the file system are available for the last 5-7
days.

{{< alert warning >}}
CCV does not guarentee that each of the last 7 days will be available
in snapshots because ocasionally the snapshot process does not complete
within 24 hours.
{{</ alert >}}

Snapshots can be found in the following directories.

**Home** directory snapshot

`````
    /gpfs_home/.snapshots/<date>/<username>/<path_to_file>
`````

**Data** directory snapshot
````
    /gpfs/.snapshots/<date>/data/<groupname>/<path_to_file>
````

**Scratch** directory snapshot
````
    /gpfs/.snapshots/<date>/scratch/<username>/<path_to_file>
````

To restore a file copy the file from the snapshot.

{{< alert warning>}}
Do **not** use the links in your home directory snapshot to try and
retrieve snapshots of data and scratch. The links will always point to
the current versions of these files. An easy way to check what a link is
pointing to is to use `ls -l`
{{</ alert >}}

e.g.

````
    ls -l /gpfs_home/.snapshots/April_03/ghopper/data
    lrwxrwxrwx 1 ghopper navy 22 Mar  1  2016 /gpfs_home/.snapshots/April_03/ghopper/scratch -> /gpfs/data/navy
````

{{< alert info >}}
If files to be restored were modified/deleted more than 7 days (and less
than 30 days) ago and were in the HOME or DATA directory, you may
contact us to retrieve them from nightly backups by providing the full
path. Note that home and data directory backups are saved for the last
30 days only.
{{</ alert >}}
