---
title: "Cuda Compiling"
date: 2019-01-31T17:03:45-05:00
draft: false
project: Oscar
section: GPU Computing
weight: 0
icon: check
---

# Compiling CUDA code

To compile a CUDA program on Oscar, first load the CUDA

```shell
     module load cuda
```

The CUDA compiler is called `nvcc`, and for compiling a simple CUDA
program it uses syntax simlar to `gcc`:

```shell
     nvcc -o program source.cu
```
