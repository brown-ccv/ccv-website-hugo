---
title: "Shared Machine"
date: 2019-01-31T17:04:43-05:00
draft: false
project: Oscar
category: ""
lead: ""
weight: 0
icon: check
---

# Oscar is a shared resource

Oscar is a shared machine used by hundreds of users at once. User
requests are called jobs.  A "job" is the combination of the resource
requested and the program you want to run on the compute nodes of
the Oscar cluster. On Oscar **slurm** is used to schedule and
manage jobs.

Jobs are scheduled to run on the cluster according to your account
priority and the resources you request (e.g. cores, memory and runtime).
cluster.  In general, the less resources you request the less time
you will spend waiting in the queue.

{{< alert warning >}}
Please do not run CPU-intense or long-running programs directly on
the login nodes! The login nodes are shared by many users, and you will
interrupt other users' work.
{{</ alert >}}

Jobs can be run on Oscar in two different ways:

-   An **interactive** job allows you to interact with a program by
    typing input, using a GUI, etc. But if your connection is
    interrupted, the job will abort. These are best for small,
    short-running jobs where you need to test out a program, or where
    you need to use the program's GUI.
-   A **batch** job allows you to submit a script that tells the cluster
    how to run your program. Your program can run for long periods of
    time in the background, so you don't need to be connected to Oscar.
    The output of your program is continuously written to an output file
    that you can view both during and after your program runs.
