---
title: "Mpi Cuda"
date: 2019-01-31T17:03:56-05:00
draft: false
project: Oscar
section: GPU Computing
weight: 0
icon: check
---

# Combining CUDA and MPI

Mixing MPI \(C) and CUDA (C++) code requires some care during linking
because of differences between the C and C++ calling conventions and
runtimes. One option is to compile and link all source files with a C++
compiler, which will enforce additional restrictions on C code.
Alternatively, if you wish to compile your MPI/C code with a C compiler
and call CUDA kernels from within an MPI task, you can wrap the
appropriate CUDA-compiled functions with the `extern` keyword, as in the
following example.

These two source files can be compiled and linked with both a C and C++
compiler into a single executable on Oscar using:

```shell
     module load mpi cuda
     mpicc -c main.c -o main.o
     nvcc -c multiply.cu -o multiply.o
     mpicc main.o multiply.o -lcudart
```

The CUDA/C++ compiler `nvcc` is used only to compile the CUDA source
file, and the MPI C compiler `mpicc` is used to compile the C code and
to perform the linking.
{{< highlight c "linenos=table, linenostart=1">}}
 /* multiply.cu */

 #include <cuda.h>
 #include <cuda_runtime.h>

 __global__ void __multiply__ (const float *a, float *b)
 {
 const int i = threadIdx.x + blockIdx.x * blockDim.x;
     b[i] *= a[i];
 }

 extern "C" void launch_multiply(const float *a, const *b)
 {
     /* ... load CPU data into GPU buffers a_gpu and b_gpu */

     __multiply__ <<< ...block configuration... >>> (a_gpu, b_gpu);

     safecall(cudaThreadSynchronize());
     safecall(cudaGetLastError());

     /* ... transfer data from GPU to CPU */
{{< /highlight >}}

Note the use of `extern "C"` around the function `launch_multiply`,
which instructs the C++ compiler (`nvcc` in this case) to make that
function callable from the C runtime. The following C code shows how the
function could be called from an MPI task.
{{< highlight c "linenos=table, linenostart=1">}}

 /* main.c */

 #include <mpi.h>

 void launch_multiply(const float *a, float *b);

 int main (int argc, char **argv)
 {
        int rank, nprocs;
     MPI_Init (&argc, &argv);
     MPI_Comm_rank (MPI_COMM_WORLD, &rank);
     MPI_Comm_size (MPI_COMM_WORLD, &nprocs);

     /* ... prepare arrays a and b */

     launch_multiply (a, b);

     MPI_Finalize();
        return 1;
 }
{{< /highlight >}}
