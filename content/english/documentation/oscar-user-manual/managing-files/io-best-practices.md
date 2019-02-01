---
title: "Io Best Practices"
date: 2019-01-31T17:07:06-05:00
draft: false
category: ""
lead: ""
weight: 0
icon: check
---

# Best Practices for I/O

Efficient I/O is essential for good performance in data-intensive
applications. Often, the file system is a substantial bottleneck on HPC
systems, because CPU and memory technology has improved much more
drastically in the last few decades than I/O technology.

Parallel I/O libraries such as MPI-IO, HDF5 and netCDF can help
parallelize, aggregate and efficiently manage I/O operations. HDF5 and
netCDF also have the benefit of using self-describing binary file
formats that support complex data models and provide system portability.
However, some simple guidelines can be used for almost any type of I/O
on Oscar:

-   Try to aggregate small chunks of data into larger reads and writes.
    For the GPFS file systems, reads and writes in multiples of 512KB
    provide the highest bandwidth.
-   Avoid using ASCII representations of your data. They will usually
    require much more space to store, and require conversion to/from
    binary when reading/writing.
-   Avoid creating directory hierarchies with thousands or millions of
    files in a directory. This causes a significant overhead in managing
    file metadata.

While it may seem convenient to use a directory hierarchy for managing
large sets of very small files, this causes severe performance problems
due to the large amount of file metadata. A better approach might be to
implement the data hierarchy inside a single HDF5 file using HDF5's
grouping and dataset mechanisms. This single data file would exhibit
better I/O performance and would also be more portable than the
directory approach.
