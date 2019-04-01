---
title: "Parallel Matlab"
date: 2019-01-31T17:07:49-05:00
draft: false
project: Oscar
section: MATLAB
weight: 0
icon: check
---

# Parallel computing with Matlab on Oscar

You can explore GPU computing through Matlab if you think your program
can benefit from massively parallel computations:

-   [MATLAB GPU Computing Support for NVIDIA CUDA-Enabled
    GPUs](http://www.mathworks.com/discovery/matlab-gpu.html)

Finally, parallel computing features like `parfor` and `spmd` can be
used by launching a pool of workers on a node.

{{< alert info >}}
Note that the Parallel
Computing Toolbox by itself cannot span across multiple nodes so
make sure you request only 1 node to avoid wasting resources.
{{</ alert >}}

-   [Execute Loop Iterations in
    Parallel](http://www.mathworks.com/help/distcomp/parfor.html)
-   [Run Single Programs on Multiple Data
    Sets](http://www.mathworks.com/help/distcomp/execute-simultaneously-on-multiple-data-sets.html)
