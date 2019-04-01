---
title: Account Limits
date: 2019-01-31 22:01:46 +0000
project: Oscar
section: Accounts
icon: check

---
# Account Limits

{{< alert info >}} Limits on Oscar are by account and partition.  Limits are enforced by Slurm. You can email support@ccv.brown.edu if you need advice on which paritions to use {{</ alert >}}

The following partitions are available to all Oscar users:

| Name | Purpose |
| --- | --- |
| batch | general purpose computing |
| debug | short wait time, short run time partition for debugging |
| gpu | GPU nodes |
| gpu-debug | short wait time, short run time partition for gpu debugging |
| bigmem | large memory nodes |
| smp | older large memory nodes |

# batch partition

* General purpose computing
* Priority is determnined by account type (from highest
  to lowest: Condo, priority, exploratory)

| Limits | Exploratory (free) account | Premium account | Condo |
| --- | --- | --- | --- |
| Maximum number of cores in use at once | 16 | 208 | condo size |
| Maximum memory in use at once (GB) | 123 | 1024 | condo size | 
| Time limit per job (core•minutes) | 46,100 | 998,400 | condo size |

Condo limits apply to the group (i.e., thery are the sum of all users on the condo). Condo users can check the limits on their condo with the command `condos`.

{{< alert warning >}}
There is no limit on the time for condo jobs, but users should be aware that there may be CCV planned maintenance on the machine with one month’s notice given.
{{</ alert >}}

# debug partition

* Short wait time, short run time access for debugging.
* No premium or condo access to the debug partition.  All users have the same limits and priority on the debug partition.

| Limis | all users |
| --- | --- |
| Maximum number of jobs | 2 |
| Time limit on a job | 30 minutes |
| Maximum number of cores in use at once | 16 |
| Total memory limit (sum of all jobs) | 123GB |

# gpu partition

* Premium users get higher priority and more resources than free users on the GPU partition
* No condo access to the gpu partition.  Condo users submit to the gpu partition with normal or priority access (if they have a priority account in addition to their condo)

| Limits | Exploratory (free) account | Premium account |
| --- | --- | --- |
| Max number of GPUs in use at once | 2 | 8 |
| Max number of CPUs in use at once | 4 | 16 |
| Max Memory | 46GB | 180GB |
| Total gpu*time limit (sum of all jobs) | 2 GPU * 24 hours | 8 GPUs * 24 hours |

# gpu-debug partition

* Short wait time, short run time gpu access for debugging
* No premium or condo access to the gpu-debug partition.  All users have the same limits and priority on the gpu-debug partition.

| Limits | all users |
| --- | --- |
| Max number of GPUs in use at once | 1 |
| Max number of CPUs in use at once | 2 |
| Max Memory | 23GB |
| Total gpu*time limit (sum of all jobs) | 1 GPU * 4 hours |

# smp partition

* Premium users get higher priority and more resources than free users on the SMP partition
* No condo access to the SMP partition.  Condo users submit to the SMP partition with normal or priority access (if they have a priority account in addition to their condo)

| Limits | Exploratory (free) account | Premium account |
| --- | --- | --- |
| Maximum number of jobs | 1 | 2 |
| Total memory limit (sum of all jobs) | 503GB | 1006GB |
| Wall clock limit | 24 hours | 48 hours |
| Total cores*time limit (sum of all jobs) | 64 cores*24 hours = 92160 core minutes = 1 SMP node for 1 day | 2 * 64 cores * 24 hours = 184320 core minutes = 2 SMP nodes for 1 day |

# bigmem

* Premium users get higher priority and more resources than free users on the SMP partition
* No condo access to the bigmem partition.  Condo users submit to the bigmem partition with normal or priority access (if they have a priority account in addition to their condo)

| Limits | Exploratory (free) account | Premium account |
| --- | --- | --- |
| Maximum number of jobs | 1 | 2 |
| Total memory limit (sum of all running jobs in the partition) | 750 GB | 750GB |
| Wall clock limit | 24 hours | 96 hours |
| Total ‘cores*time’ limit (sum of all jobs) | 32 cores*24 hours = 1 bigmem node for 1 day | 32 cores * 96 hours = 1 bigmem node for 4 day |