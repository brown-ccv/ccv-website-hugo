---
title: High-Performance Computing (Oscar)

tagTitle: High-Performance Computing (Oscar) - Center for Computation and Visualization
tagDescription: Looking for High-Peformance Computing? Learn about Oscar, CCV’s primary research computing cluster.

date: 2019-01-22T18:29:23.000+00:00
category: Computing
icon: server2
lead: "Research computing cluster featuring more than 400 multi-core nodes, GPU nodes, and a high-performance parallel filesystem"
haas: true
docs_link: oscar
extra:
  text: "Risk Classification: Level 2"
  link: "https://it.brown.edu/computing-policies/risk-classifications"
  
---
{{% lead %}}
The high-performance computing (HPC) resources at CCV equip the Brown research community with the tools they need to perform complex numerical simulations, modeling, and data analysis. Oscar, CCV's primary research computing cluster, consists of more than 300 multi-core nodes sharing a high-performance interconnect and file system.
{{% /lead %}}

## Oscar Specifications

 {{% table c="striped"  hover="true" head="dark"%}}
 |
 ---------------  |  ------
   Compute Notes  |  405
   GPU Nodes      |  27
   Login Nodes    |  2
   Large-Memory Nodes (>512 GB) | 4
   Total CPU Cores | 11552
   Total GPUs | 193
   Total Storage (GPFS Filesystem) | 3.27 PB
   OS | RedHat EL 7.3 (Linux)
   Job Scheduler | Slurm Workload Manager
 {{% /table %}}

A large collection of software is available on Oscar, and CCV staff can help acquire and install most applications upon request.

## Some Popular Software Packages Available on Oscar

* MATLAB
* R
* Python
* CUDA
* Perl
* Julia
* TensorFlow
* Blender
* Paraview

## Terms of Service

**Access and User Accounts** - User accounts are controlled via central authentication and directories on HPC are only deleted on the request of the user, PI, or departmental chair.

**Denial of Access** - Authorized users must comply with the Brown University [Acceptable Use Policy](https://it.brown.edu/computing-policies/acceptable-use-policy) and the [Computing Passwords Policy](http://www.brown.edu/information-technology/computing-policies/computing-passwords-policy).  Please refer to the full list of policies at [Computing Policies](https://it.brown.edu/computing-policies).

**Storage**
* Home Directories:  All HPC accounts have a 20GB home directory.  All home directories are backed up on a nightly basis.  Requests for data restores can be made by contacting support@ccv.brown.edu.
* Scratch Disk: CCV maintains a scratch pool shared by all HPC users.  This storage is intended for temporary files.  It is not backed up and old files are purged regularly. 
* RDATA: All HPC environments have access to RDATA GPFS disk storage.  All faculty have a base allocation of 1TB without charge (across any combination of CIS/CCV storage platforms), as well as grant allocated storage  and purchased storage as described at [CCV Rates](/services/rates).  RDATA storage is backed up nightly. 

**Maintenance Schedule**
* Nondisruptive Maintenance (may occur at any time, no notification provided) - nondisruptive work, including software changes, maintenance and testing

* Monthly Scheduled Maintenance (first Tuesday of the month, 8:00 am - 12:00 noon, no notification provided) - no downtime expected, but there may be limited degradation of performance 

* Unscheduled Maintenance - (occurs very rarely, 4 week prior notification provided) -  CCV tries to avoid whenever possible; maximum 1 day downtime

* Major Upgrade Maintenance - (occurs annually, 4 week prior notification provided) - service may be brought down for 3-5 days

**Unplanned Outages**
* During Business Hours:
  * Send email to [support@ccv.brown.edu](mailto:support@ccv.brown.edu). A ticket will get created and CCV staff will attempt to address the issue as soon as possible.
* During Non-Business Hours:
  * Send email to [support@ccv.brown.edu](mailto:support@ccv.brown.edu).
  * Call CIS Operations Center at (401) 863-7562. A ticket will get created and CCV staff will be contacted to address the issue.

<!-- {{< account_form >}} -->
{{< button text="Request an Account" href="https://brown.co1.qualtrics.com/jfe/form/SV_0GtBE8kWJpmeG4B">}}