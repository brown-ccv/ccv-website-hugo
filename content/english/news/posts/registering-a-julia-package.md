---
title: "Registering a Julia Package"
date: 2019-01-31T10:25:01-05:00
draft: false
types: ["posts"]
tags: ["machine learning", "data science", "pytorch"]
authors: ["Isabel Restrepo"]
---


{{% lead %}}
Scientific computing has traditionally required the highest performance, yet domain experts have largely moved to slower dynamic languages for daily work. We believe there are many good reasons to prefer dynamic languages for these applications, and we do not expect their use to diminish. Fortunately, modern language design and compiler techniques make it possible to mostly eliminate the performance trade-off and provide a single environment productive enough for prototyping and efficient enough for deploying performance-intensive applications. The Julia programming language fills this role: it is a flexible dynamic language, appropriate for scientific and numerical computing, with performance comparable to traditional statically-typed languages.
{{% /lead %}}

After following the package developement guidelines (for naming, testing, requirements, etc), making your package available to the community can be done as follows:

Make sure all dependecies are up-to-date and that the updates did not break your package
```jl
Pkg.update()
Pkg.test("MyPackage")
```

Work on a new branch of METADATA. This step is optional but recommended if you plan to register more than one package as it allows to submit pull requests per package. See below for steps:

Register and tag your package to your local METADATA  

```julia
Pkg.register("MyPackage")  
Pkg.tag("MyPackage")  
```
Finally, merge your changes the METADATA to the official repository using a pull request  

```jl
Pkg.publish()  
```

During this process you may run into GitHub login issues that can be fixed by configuring your global user name

```shell
git config --global github.user USERNAME
```

Additional tips on trouble shooting and manual publishing of the METADATA is dicussed in the official Julia Documentation

Branch metadata
METADATA.jl is a an actual repository at git://github.com/JuliaLang/METADATA.jl and the current branch is metadata-v2. To verify this information:cd ~/.julia/v0.4/METADATA
```shell
git remote -v

origin git://github.com/JuliaLang/METADATA.jl (fetch)
origin git@github.com:JuliaLang/METADATA.jl.git (push)

git branch -a

*metadata-v2
remotes/origin/HEAD -> origin/metadata-v2
remotes/origin/jn/gtk0.10.0
remotes/origin/kf/adoptshowoff
remotes/origin/metadata-v0
remotes/origin/metadata-v1
remotes/origin/metadata-v2
remotes/origin/omm/devtools
```  

At this point your METADATA should be up-to-date. Howevere, if you have local changes that you want to disregard you can reset the branch as follows (make sure origin corresponds to the correct remote):  

```shell
git fetch origin
git checkout metadata-v2
git reset --hard origin/metadata-v2
```

Make a new branch based on metadata-v2 where you’ll make the changes:  

```bash
git checkout -b newBranch
```

Now in the Julia REPL you can register and tag your package (see step 3 above)
Quit Julia. Merge your branch back into metadata-v2

```shell
git checkout metadata-v2
git merge newBranch
```

{{< highlight html >}}
<section id="main">
  <div>
    <h1 id="title">{{ .Title }}</h1>
    {{ range .Data.Pages }}
      {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}


{{< highlight py "linenos=table,hl_lines=2 15-17,linenostart=100" >}}

import subprocess
import sys
import tempfile
import time
import zipfile

from itertools import groupby
from traceback import print_stack

# A simple struct object with the keyword args as attributes.
Struct = argparse.Namespace


def die(*messages):
    """
    Prints the current BioLite module and an error `message`, then aborts.
    """
    sys.stderr.write("%s.%s: " % get_caller_info(trace=True))
    sys.stderr.write(' '.join(map(str, messages)))
    sys.stderr.write('\n')
    sys.exit(1)

{{< /highlight >}}


Start Julia again and publish your package! (step 4)
At this point you could reset your metadata-v2 branch if you need to.

{{< cite "10.3354/meps12568">}}


{{% sign email="fer@brown.edu" twitter="1" github="fernandogelin" %}}
