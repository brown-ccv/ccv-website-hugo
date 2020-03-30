---
title: JupyterHub

tagTitle: JupyterHub - Center for Computation and Visualization
tagDescription: Learn more about JupyterHub, a convenient way to serve Jupyter Notebooks for multiple users.

date: 2019-01-22T19:01:50.000+00:00
category: Classroom
icon: users2
version: beta
lead: CCV-hosted Hub providing notebook servers to courses at Brown
docs_link: jupyterhub
---
# Introduction

JupyterHub provides a convenient way to serve Jupyter Notebooks for multiple users with a pre-configured computing environment where users do not need to worry about installing any software packages. This set-up free environment is ideal for courses and workshops with computing components. If you are an instructor, CCV can provide access to a cloud-hosted JupyterHub for your class or workshop. The implementation is supported by Brown CIS, please follow the links below to request an instance for your class or search the documentation.

{{< flexrow >}}
{{< button text="Request Service" href="https://docs.google.com/forms/d/e/1FAIpQLSct9rFCxLhPIezHI-RYRyEuSnvHrPZLMuUSFRTriIyd_3TAfA/viewform?usp=sf_link" >}} {{< button text="Documentation" href="https://docs.ccv.brown.edu/jupyterhub/" >}}

{{< /flexrow >}}

## JupyterHub Vs Other Resources for Teaching

There are other environments that may be great alternatives for your teaching needs. [Google Colaboratory](https://colab.research.google.com/) provides a similar Jupyter-based notebook environment that is free to use, and depending on your needs may require not set up at all. It also provides free access to GPU and TPU programming, which can be great for Deep Learning courses. Other new and up-coming platforms such as [https://repl.it](https://repl.it "repl.it") are also great alternatives for teaching and learning programming. To-date JupyterHub provides few benefits over these platforms. We list here few of the differentiating features between Google Colab and JupyterHub to help you decide which choice is right for your course:

* Colab support Python 2.7 or 3.x as the backend.
* JupyterHub can be configured to support [any language]() that has jupyter kernel support.
* With JupyterHub, you can pre-define the Docker container (and all the software) that is going to be running on the instances. Having a Docker container per class is a nice way to ensure reproducibility for students who may want to "take their compute environment with them" at the end of the semester.
* Colab comes bundled with most Python scientific software libraries, but you will have to re-install all non-standard libraries _every time_ you connect to an instance.
* Colab runs a notebook interface, JupyterHub open Jupyter Notebooks, markdown files, PDFs, scripts and a terminal window.
* Colab integrates nicely with your Google Drive and supports real-time collaboration
