---
title: "Prototyping Visualizations for the Web with Vega and Julia"
date: 2019-07-26T10:40:16-04:00
draft: false
types: ["posts"] # keep only one of the categories
tags: ["vega", "visualization", "julia"] # add keywords here, be consistent with other posts.
authors: ["Mary McGrath"]
resources:
- src: 'images/data-voyager.png'
  name: data
- src: 'images/juliacon-app.png'
  name: app
- src: 'images/vega-wordcloud.png'
  name: vega
---

{{% lead %}}
I recently presented at [JuliaCon2019](https://juliacon.org/2019/) on using [Vega](https://vega.github.io) and [Julia](https://julialang.org) to create great visualizations for the web. In the process of developing the talk, I created a simple web app ([here](https://ccv.brown.edu/juliacon)) to visualize the JuliaCon talks. In this post, I'll walk through the highlights of the talk and how to get started with Vega using Julia.
{{% /lead %}}

{{< image name="app" height="500" align="center" >}}

Vega is an interactive grammar of graphics, which provides a (mostly) declarative interface to (mostly) [D3](https://d3js.org/). Vega-Lite is the younger sibling of Vega - it is more terse and easier to learn, though a bit less powerful. Vega specifications are JSON objects, making them portable to many programming languages, including: JavaScript, Julia, Python, R, and others.

Julia is a fast, easy to read, general purpose programming language (with a strong soft spot for computational science). It is my preferred language for almost everything, but especially wrangling data.

As a Data Scientist at CCV, a workflow I commonly find myself doing is: acquiring data, cleaning it up, exploring it, visualizing my findings and ultimately publishing them to the web. With Vega, I am able to primarily work in Julia, then seamlessly move the visualizations to the web when ready for publishing.

### Getting Started with Vega using Julia

The Jupyter Notebook with the full code can be found on [GitHub](https://github.com/brown-ccv/juliacon19-app/tree/master/julia). It is best viewed using [IJulia's](https://github.com/JuliaLang/IJulia.jl) `jupyterlab()` command from within Julia to get full interactivity. It will still work as a normal notebook, but the visualizations may be static images instead of interactive graphics.

Julia's [Table](https://github.com/JuliaData/Tables.jl) interface provides a standard definition for tabular data structures and allows for easy interoperability between packages. I typically load data into a [DataFrame](https://github.com/JuliaData/DataFrames.jl), which provides a nice interface for accessing and manipulating data. However, any `Table` can be used with Data Voyager. [Data Voyager](https://github.com/queryverse/DataVoyager.jl) is a great tool in the Vega ecosystem - it allows for visual exploration of data as well as easy prototyping of visualizations. It is where I always start my data exploration and often, where I start building my final visualizations from. With Julia, this is easy - simply run `data |> Voyager()` (where `data` is any table format) and an electron window will open with a GUI to explore the data.

{{< image name="data" height="300" align="center" >}}

After prototyping a visualization using Data Voyager, I can copy the specification using the {{< fas paste >}} button, then copy it into my Jupyter Notebook to continue developing it. At this point, I will do things such as clean up the tooltip, refine colors, try different shapes, and refine the display of axes and legends, but typically the core of the visualization is mostly complete.

For some datasets, Vega-Lite (which is what Data Voyager uses) isn't sufficient. For example, to visualize the topics being discussed at JuliaCon a word cloud is a good option, but only Vega is currently able to create that type of chart. In these scenarios, I will typically find an example visualization from the Vega website or elsewhere on the web, and adapt it for my needs. Creating visualizations is often an iterative process of transforming the data and updating the graphic, so being able to do this in Julia allows for fast iteration.

{{< image name="vega" height="200" align="center" >}}

When ready to move to publish to the web, [vega-embed](https://github.com/vega/vega-embed) can be used to insert a Vega specification into a web component. Personally, I use React, but this is not a requirement. Saving the specification in its own file makes it easy to update that while keeping the web infrastructure separate. Then, I'm able to copy the "Vega Source" using the {{< fas ellipsis-h >}} menu in Jupyter and paste the whole thing into that file. By default, this includes the data used in the visualization. Though the data could also be inserted separately in the case of using an API to fetch data dynamically.

This is the broad outline of how I like to create visualizations with an eye towards publishing them on the web. The talk is available on [YouTube](https://www.youtube.com/watch?v=IJqnx9ShRlM) and all of the resources are posted on [GitHub](https://github.com/brown-ccv/juliacon19-app).

{{% sign "Mary McGrath" %}}
