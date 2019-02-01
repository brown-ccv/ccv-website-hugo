---
title: "Mpi Cuda"
date: 2019-01-31T17:03:56-05:00
draft: false
category: ""
lead: ""
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

````
     module load mpi cuda
     mpicc -c main.c -o main.o
     nvcc -c multiply.cu -o multiply.o
     mpicc main.o multiply.o -lcudart
````	

The CUDA/C++ compiler `nvcc` is used only to compile the CUDA source
file, and the MPI C compiler `mpicc` is used to compile the C code and
to perform the linking.

    01. /* multiply.cu */
    02. 
    03. #include <cuda.h>
    04. #include <cuda_runtime.h>
    05. 
    06. __global__ void __multiply__ (const float *a, float *b)
    07. {
    08. const int i = threadIdx.x + blockIdx.x * blockDim.x;
    09.     b[i] *= a[i];
    10. }
    11. 
    12. extern "C" void launch_multiply(const float *a, const *b)
    13. {
    14.     /* ... load CPU data into GPU buffers a_gpu and b_gpu */
    15. 
    16.     __multiply__ <<< ...block configuration... >>> (a_gpu, b_gpu);
    17. 
    18.     safecall(cudaThreadSynchronize());
    19.     safecall(cudaGetLastError());
    20. 
    21.     /* ... transfer data from GPU to CPU */

Note the use of `extern "C"` around the function `launch_multiply`,
which instructs the C++ compiler (`nvcc` in this case) to make that
function callable from the C runtime. The following C code shows how the
function could be called from an MPI task.

    01. /* main.c */
    02. 
    03. #include <mpi.h>
    04. 
    05. void launch_multiply(const float *a, float *b);
    06. 
    07. int main (int argc, char **argv)
    08. {
    09.        int rank, nprocs;
    10.     MPI_Init (&argc, &argv);
    11.     MPI_Comm_rank (MPI_COMM_WORLD, &rank);
    12.     MPI_Comm_size (MPI_COMM_WORLD, &nprocs);
    13. 
    14.     /* ... prepare arrays a and b */
    15. 
    16.     launch_multiply (a, b);
    17. 
    18.     MPI_Finalize();
    19.        return 1;
    20. }

