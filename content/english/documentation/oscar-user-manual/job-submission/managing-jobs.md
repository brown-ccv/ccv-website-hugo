---
title: "Managing Jobs"
date: 2019-02-01T12:16:32-05:00
draft: false
project: Oscar
section: Submitting jobs
weight: 0
icon: check
---

# Managing your jobs on Oscar

## Listing running and queued jobs

The `squeue` command will list all jobs scheduled in the cluster. We
have also written wrappers for `squeue` on Oscar that you may find more
convenient:

```bash
myq                   List only your own jobs.
allq                  List all jobs, but organized by partition, and a summary of the nodes in use in the
                      partition.
allq <partition>      List all jobs in a single partition.
myjobinfo`            Get the time and memory used for your jobs.
```

## Canceling jobs

```bash
scancel <jobid>
```

## View details about completed jobs

The `sacct` command will list all of your running, queued and completed
jobs since midnight of the previous day. To pick an earlier start date,
specify it with the `-S` option:

```bash
sacct -S 2012-01-01
```

To find out more information about a specific job, such as its exit
status or the amount of runtime or memory it used, specify the `-l`
("long" format) and `-j` options with the job ID:

```bash
sacct -lj <jobid>
```

The `myjobinfo` command uses the `sacct` command to display "Elapsed
Time", "Requested Memory" and "Maximum Memory used on any one Node" for
your jobs. This can be used to optimize the requested time and memory to
have the job started as early as possible. Make sure you request a
conservative amount based on how much was used.

```bash
myjobinfo

Info about jobs for user 'mdave' submitted since 2017-05-19T00:00:00
Use option '-S' for a different date or option '-j' for a specific Job ID.

JobID    JobName                  Submit      State        Elapsed     ReqMem     MaxRSS
1861     ior 2017-05-19T08:31:01  COMPLETED   00:00:09     2800Mc      1744K
1862     ior 2017-05-19T08:31:11  COMPLETED   00:00:54     2800Mc     22908K
1911     ior 2017-05-19T15:02:01  COMPLETED   00:00:06     2800Mc      1748K
1912     ior 2017-05-19T15:02:07  COMPLETED   00:00:21     2800Mc      1744K
```

`ReqMem` shows the requested memory:
 A `c` at the end of number represents Memory Per CPU, a `n` represents Memory Per Node.
`MaxRSS` is the maximum memory used on any one node.
Note that memory specified to sbatch using `--mem` is Per Node.
