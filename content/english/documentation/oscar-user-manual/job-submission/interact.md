---
title: "Interact"
date: 2019-01-31T17:04:53-05:00
draft: false
category: ""
lead: ""
weight: 0
icon: check
---

# Interactive jobs

To start an interactive session for running serial or threaded programs
on an Oscar compute node, simply run the command `interact` from the
login node:

````
   interact
````

By default, this will create an interactive session that reserves 1
core, 4GB of memory, and 30 minutes of runtime.

You can change these default limits with the following command line
options:

    usage: interact [-n cores] [-t walltime] [-m memory] [-q queue]
                    [-o outfile] [-X] [-f featurelist] [-h hostname] [-g ngpus]

    Starts an interactive job by wrapping the SLURM 'salloc' and 'srun' commands.

    options:
      -n cores        (default: 1)
      -t walltime     as hh:mm:ss (default: 30:00)
      -m memory       as #[k|m|g] (default: 4g)
      -q queue        (default: 'batch')
      -o outfile      save a copy of the session's output to outfile (default: off)
      -X              enable X forwarding (default: no)
      -f featurelist  CCV-defined node features (e.g., 'e5-2600'),
                      combined with '&' and '|' (default: none)
      -h hostname     only run on the specific node 'hostname'
                      (default: none, use any available node)
      -a account     user SLURM accounting account name

For example:

    $ interact -n 20 -t 01:00:00 -m 10g

This will request 20 cores, 1 hour of time and 10 GB of memory (per
node).

