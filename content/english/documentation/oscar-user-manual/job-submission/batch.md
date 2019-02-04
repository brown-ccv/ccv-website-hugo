---
title: "Batch"
date: 2019-01-31T17:04:57-05:00
draft: false
project: Oscar
category: ""
lead: ""
weight: 0
icon: check
---

# Batch jobs

To run a batch job on Oscar, you first have to write a
script that describes what resources you need and how your program will
run. Example batch scripts are available in your home directory on
Oscar, in the directory:

````
    ~/batch_scripts
````

To submit a batch job to the queue, use the `sbatch` command:

````
   sbatch <jobscript>
````

A batch script starts by specifying the `bash` shell as its interpreter,
with the line:

````
    #!/bin/bash
````

Next, a series of lines starting with `#SBATCH` define the resources you
need, for example:

````
    #SBATCH -n 4
    #SBATCH -t 1:00:00
    #SBATCH --mem=16G
````

Note that all the `#SBATCH` instructions must come **before the
commands** you want to run. The above lines request 4 cores (`-n`), an
hour of runtime (`-t`), and 16GB of memory **per node** (`--mem`). By
default, a batch job will reserve 1 core and 2.8GB of memory per core.

Alternatively, you could set the resources as command-line options to
`sbatch`:

````
    sbatch -n 4 -t 1:00:00 --mem=16G <jobscript>
````

The command-line options will override the resources specified in the
script, so this is a handy way to reuse an existing batch script when
you just want to change a few of the resource values.

The `sbatch` command will return a number, which is your job ID. You can
view the output of your job in the file `slurm-<jobid>.out` in the
directory where you ran the `sbatch` command. For instance, you can view
the last 10 lines of output with:

````
    tail -10 slurm-<jobid>.out
````

Alternatively, you can mention the file names where you want to dump the
standard output and errors using the `-o` and `-e` flags.

Useful `sbatch` options:

option                             | purpose
-----------------------------------|-----------------------------------
 `-J`                              | Specify the job name that will be
                                   | displayed when listing the job.   
 `-n`                              | Number of tasks (= number of      
                                   | cores, if "--cpus-per-task" or    
                                   | "-c" option is not mentioned).    
 `-c`                              | Number of CPUs or cores per task  
                                   | (on the same node).               
 `-N`                              | Number of nodes.                  
 `-t`                              | Runtime, as HH:MM:SS.             
 `--mem=`                          | Requested memory per node.        
 `-p`                              | Request a specific partition.     
 `-o`                              | Filename for standard output from
                                   | the job.                          
 `-e`                              | Filename for standard error from  
                                   | the job.                          
 `-C`                              | Add a feature constraint (a tag   
                                   | that describes a type of node).   
                                   | You can view the available        
                                   | features on Oscar with the        
                                   | `nodes` command.                  
 `--mail-type=`                    | Specify the events that you       
                                   | should be notified of by email:   
                                   | BEGIN, END, FAIL, REQUEUE, and    
                                   | ALL.                              
 `--mail-user=`                    | Email ID where you should be      
                                   | notified.                         

You can read the full list of options at
<http://slurm.schedmd.com/sbatch.html> or with the command:

    $ man sbatch
