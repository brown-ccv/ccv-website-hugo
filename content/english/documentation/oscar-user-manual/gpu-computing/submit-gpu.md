---
title: "Submit Gpu"
date: 2019-01-31T17:03:37-05:00
draft: false
project: Oscar
section: GPU Computing
weight: 0
icon: check
---

# Submiting GPU jobs on Oscar

The Oscar GPUs are in a separate partition to the regular compute nodes.  The partition is called `gpu`. To see how many jobs are running and pending in the gpu partition, use

````
    allq gpu
````

## Interactive use

To start an session on a GPU node, use the
`interact` command and specify the `gpu` partition. You also need to
specify the requested number of GPUs using the `-g` option:

````
     interact -q gpu -g 1
````

## Batch jobs


Here is an example batch script for a cuda job that uses 1 gpu and 1 cpu for 5 minutes

````
#!/bin/bash

# Request a GPU partition node and access to 1 GPU
#SBATCH -p gpu --gres=gpu:1

# Request 1 CPU core
#SBATCH -n 1
#SBATCH -t 00:05:00

# Load a CUDA module
module load cuda

# Run program
./my_cuda_program
````

To submit this script:

````
     sbatch my_script.sh
````
