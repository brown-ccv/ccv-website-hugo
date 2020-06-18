---
title: Oscar Upgrade

tagTitle: Oscar Upgrade
hero:
  lead: CCV's Oscar cluster will be unavailable for scheduled maintenance from June 22, 2020 at 8:00 am - June 29, 2020 at 5:00 pm

lastUpdated: 18 June 2020

items:
- name: statement
  title: Oscar Planned Outage Details
  icon: cog
  text: |
        The Oscar cluster will be unavailable for scheduled maintenance, beginning Monday, June 22, 2020 at 8:00 am to Monday, June 29 at 5:00pm, 2020.

        We expect to bring the cluster back online much sooner than published downtime, but have lengthened the downtime in case of unforeseen problems. Without issues, the downtime should be 3-4 days.

        Following services will be unavailable during the downtime:

          - SSH Login
          - VNC
          - File System Mounts (CIFS, SMB)

        Existing jobs and VNC sessions will terminate. Any Slurm jobs in the queue that can’t finish before 8 am on the morning of the downtime won’t run. They will remain in the queue until the nodes are released back into production on June 29, 2020 (or earlier).

        During this downtime, we will perform several maintenance tasks, including upgrading the GPFS file-system. An update will be sent once the cluster is back in production.

        If you have any questions or concerns please let us know at support@ccv.brown.edu
---