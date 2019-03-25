---
# Project
# Keep the following block for the _index.md in the root of your docs (node). Replace the comments.
title: #Documentation Title Ex: JupyterHub
type: #Documentation Title Ex: JupyterHub
level: Main
version: beta
weight: 0
icon: jupyter.svg
draft: false

# Section
# Keep the following block for the subfolders (node).
title: "{{ replace .Name "-" " " | title }}"
type: #Documentation Title Ex: JupyterHub
section: #Documentation Title Ex: JupyterHub
date: {{ .Date }}
version: #beta
weight: 2 # sets the order of the section in left navbar.
draft: false #if draft is true
# Enter subitems here, ref should correspond to the subsection file name.
subitems:
  - subsection: #Creating a New Notebook
    ref: #"creating-a-new-notebook/"
  - subsection: #Managing Active Notebooks
    ref: #"managing-active-notebooks/"
  - subsection: #Sharing Notebooks
    ref: #"sharing-notebooks/"
  - subsection: #Shutting Down Server
    ref: #"shutting-down-server/"

# Page
# Keep the following block content pages (leaf).

title: "{{ replace .Name "-" " " | title }}"
project: #Project name JupyterHub
section: #Should match the subsection name. Title in section's _index.md.
date: {{ .Date }}
draft: false
version: #beta
---
