---
title: "Large Files"
date: 2019-01-22T13:29:08-05:00
draft: false
category: "Data Storage"
icon: "database2"
lead: "CCV provides storage for large research files connected to our HPC system. A default allocation of 256 GB (also called Rdata) is given to all faculty members at Brown, on a per request basis, with the option of purchasing additional storage as needed."
weight: 1
---

# Research Data Storage

CCV provides storage for large research files connected to our HPC system. A default allocation of 256 GB (also called Rdata) is given to all faculty members at Brown, on a per request basis, with the option of purchasing additional storage as needed.   
Long term storage and backups are available on a fee basis. Storage can be purchased in increments of terabytes for periods of up to 6 years. The cost for backups is included when storage is purchased. Data is incrementally backed up to tape on a daily basis.   
In addition, snapshots for the last 7 days are available on line for quick restores. Long term archiving of files to tape (one or two copies) can be purchased as needed.
Tape libraries are housed at two separate locations to enable disaster/recovery scenarios. These research storage allocations can be easily mounted to desktops or other computer systems to allow for easy access and sharing files. Brown users can check the rates here. For further information please contact support@ccv.brown.edu.

### Details of HPC file storage
- Rdata is accessible from all CCV systems `/gpfs/data`
- Can be mounted to all desktops on Brown's campus network
- Is backed up on a daily incremental basis
- Rdata allocations can be increased by purchasing additional storage

**Home directory on Oscar**: All users will have access to a home `/gpfs/home` allocation of 10 GB. This allocation is backed up on a daily basis.  
**Group storage**: Premium accounts (see premium) will be entitled to an additional allocation of 256 Gb that may be merged with Rdata (for primary PI). Likewise, group premium accounts will be entitled to additional 25 GB per user.  
**Snapshots**: Daily snapshots are available for both Rdata and Home file systems for 7 consecutive days.  
**Scratch**: Space for temporary files is available as `/gpfs/scratch`. These files are not backed up and is strictly for temporary files. Files may be purged after 30 days or as the file system is being utilized. This allocation will be managed by an application called xdisk (time versus space) (work in progress).  
**Sharing data**: Sharing files that are too big to be sent via email. There is a 10 GB quota and a limit of 2 GB per file. See [BrownBox]({{< ref "brown-box.md" >}}) for more information.
