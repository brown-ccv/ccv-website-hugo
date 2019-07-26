---
title: "R, Travis-CI, and C++ standards with Ubuntu 16.04"
date: 2019-07-26T10:40:16-04:00
draft: false
types: ["posts"] # keep only one of the categories
tags: ["Travis", "R", "continuous integration"] # add keywords here, be consistent with other posts.
authors: ["August Guang"]
---

{{% lead %}}
Continuous integration tools like [Travis CI](https://travis-ci.org/) are designed to make testing and deploying easier, but often I find myself spending a lot of time and making tiny commits debugging my `.travis.yml` files due to very conservative and outdated OS and software versions. There used to be a Travis docker image which I would use to determine what I needed to change, but they've since switched over to a debugging mode which you have to turn on by [emailing their support team](https://docs.travis-ci.com/user/running-build-in-debug-mode/) for public projects.
{{% /lead %}}

One particularly infuriating area in which I've had to spend a lot of time figuring out Travis errors is with R packages that make use of Rcpp and C++14 standards. For a long time the default Linux OS was Ubuntu 14.04, which led to all sorts of problems on Travis with not being able to enable C++14. The solution I had to follow was from [a post on Dirk Eddelbuettel's blog](http://dirk.eddelbuettel.com/blog/2017/06/13/).

Sometime in the last few months Travis appears to have updated to Ubuntu 16.04 as well as R 3.6.0. This meant that the previous solution now was breaking the build. Lucky for us, that means no more having to install gcc, since 5.4.0 comes on 16.04 by default, and no having to fiddle around with R's compile-time settings. The .travis.yml can be pretty simple again. (Alternatively, we could have set the distribution to trusty)

This back-and-forth with Travis settings got me looking for other solutions though, as I don't think you should have to have such in-depth systems understandings and spend so much effort to get exactly the settings you need to get Travis working. Additionally, [SeqAn3](http://www.seqan.de/announcing-seqan3/) has recently come out, which is built on the C++17 standard and is only supported by GCC-7 or newer. As I maintain the [RSeqAn](https://compbiocore.github.io/RSeqAn/) package which packages together SeqAn2.4 headers, I hope to also make the switch to SeqAn3 eventually. Having run into problems with [RSeqAn and minGW](https://www.augustguang.com/search-terms-mingw/) as well as the aforementioned problems with Travis, I expect there will be issues upgrading to SeqAn3 as well.

This is what I'm thinking so far:

 * on Travis, I'll just use whatever config [`rstantools`](https://travis-ci.org/stan-dev/rstantools) is following at the moment. Actually, there is often a lot of conversation on their forums about broken travis builds, but it does look like someone figures it out eventually.
 * I ported RSeqAn over to gitlab and set up a [`.gitlab-ci.yml`](https://gitlab.com/aguang/RSeqAn/blob/master/.gitlab-ci.yml) file, and it's actually working really nicely. On Gitlab CI you can set up a Docker container with images from DockerHub that can then run your `before_script`, `script`, and `after_script` commands as if it were interactive in the shell with GitLab Runner. This is the gist of how I understand it anyway, it is a little more complex than that but you can find the details on their [Using Docker Images](https://docs.gitlab.com/ee/ci/docker/using_docker_images.html) page. This is in contrast with using Docker on Travis, where you have to run docker exec type commands every time, you cannot be in a pseudo-interactive mode. The result is super easy and reproducible, if you need to you can make a Docker image of your environment and then run exactly the R CMD build and R CMD check commands you would use. I will probably keep the `.gitlab-ci.yml` as a backup check whenever Travis fails due to Travis configuration reasons as opposed to actual tests and checks in the R package failing.

{{% sign "August Guang" %}}
