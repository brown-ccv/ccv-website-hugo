---
title: "How to write docs and posts for the CCV Website"
date: 2019-02-01T11:02:52-05:00
draft: false
types: ["posts"] # keep only one of the categories
tags: ["documentation", "markdown"] # add keywords here, be consistent with other posts.
authors: ["Fernando Gelin"]
---

{{% lead %}}
CCV's website is built with [Hugo](http://gohugo.io), a fast and flexible,
open-source static site generator. This flexibility allows us to create complex
templates that simplifies the process of content creation by letting the user to
create the content with simple Markdown files. In addition to the regular markdown
syntax, the use of shortcodes provides the ability to create complex html elements
without the need to use html syntax, making the content `.md` file simple and free of noise.
This tutorial will walk you over some of these shortcodes and how to set up and organize
the content.
{{% /lead %}}

# The News Section

The news section has three subsections: posts, events, and projects. The set-up
for each subsection is the same.

{{% file-tree %}}
{{% dir name="content" open="true" %}}
{{% dir name="language" open="true" description="for i18n sites, folder name is the language name"%}}
{{% dir name="news" open="true"%}}
{{% file name="_index.md" %}}
{{% dir name="posts" open="true"%}}
{{% file name="_index.md"%}}
{{% file name="post_title.md" description="this is your new post"%}}
{{% /dir %}}
{{% folder name="projects"%}}
{{% folder name="events"%}}
{{% /dir %}}
{{% /dir %}}
{{% /dir %}}
{{% /file-tree %}}

You can
either create a `.md` file in the section folder or use Hugo to generate the file:

Using Hugo, from the terminal:

```go
hugo new content/english/section/subsection/post_title.md
```

If you create the file yourself, add the front-matter to the top of the `.md` file.
The front-matter varies by section, so check other files in the same section for examples.

```yaml
---
title: "How to Write Docs and Posts for the ccv Website"
date: 2019-02-01T11:02:52-05:00
draft: false
types: ["posts"] # keep only one of the categories
tags: ["documentation", "markdown"] # add keywords here, be consistent with other posts.
authors: ["Fernando Gelin"]
---
```

The content of your post goes below the `---` and should use Markdown syntax.


# The Documentation Section

The set-up for the documentation section is more complex to allow for organization
of the content into folders (subsections). This is important because it provides a
side navigation for the more complicated docs.
Let's look at the JupyterHub Documentation, for example.

{{% file-tree %}}
{{% dir name="content" open="true" %}}
{{% dir name="language" open="true" description="for i18n sites, folder name is the language name"%}}
{{% dir name="documentation" open="true"%}}
{{% file name="_index.md"%}}
{{% dir name="jupyterhub-user-manual" open="true"%}}

{{% file name="_index.md" description="--> 1"%}}
{{% dir name="getting-started" open="true"%}}
{{% file name="_index.md" description="--> 2"%}}
{{% file name="sign-in.md"%}}
{{% file name="import-notebooks.md"%}}
{{% file name="launch-notebooks.md"%}}
{{% /dir %}}

{{% folder name="help-and-support"%}}
{{% folder name="using-your-hub"%}}

{{% /dir %}}
{{% /dir %}}
{{% /dir %}}
{{% /dir %}}

{{% /file-tree %}}

The `_index.md` file marked with 1 in the file tree above contains the description
of the manual in the content and metadata used to set-up the navigation in the main
Documentation section.

```yaml
---
Title: "JupyterHub"
type: "JupyterHub"
level: "Main"
version: "beta"
weight: 0
icon: "jupyter.svg"
---

# Introduction

Welcome to the Brown University JupyterHub Documentation & Quickstart Guide.
This document is designed to help you get started using Jupyter notebooks served
by Google Cloud for use by the Brown University community. The implementation is
supported by Brown CIS, and for any questions/comments/concerns regarding
this service, please contact the Brown CIS JupyterHub team by emailing
jupyter-help@brown.edu.
```

The file marked with 2, contains the data used to create the navigation for the
particular project, and should contain all subsections of the document, where `ref`
is the name of the file in lowercase, separated by hyphens and followed by a
forward slash. This is important so the site navigation gets set-up correctly.
It's also important to include this file in all subsections folders, but with
a **different weight**. The weight value will define the order of the sections
in the navigation menu.

```yaml
---
Title: "Getting Started"
type: "JupyterHub"
section: "JupyterHub"
version: "beta"
weight: 1
subitems:
  - subsection: "Step 1: Sign In"
    ref: "sign-in/"
  - subsection: "Step 2: Sync Google Drive"
    ref: "sync-g-drive/"
  - subsection: "Step 3: Import Notebooks"
    ref: "import-notebooks/"
  - subsection: "Step 4: Launch a Notebook"
    ref: "launch-notebook/"
---
```

Once again, the content goes under the `---` with Markdown syntax. **In the
documentation content use level 1 headings for the main sections**. Level 1
headings are used on a right sidebar navigation for each page.


# Shortcodes

Shortcodes are snippets that you add to the content files with the rest of the
markdown. This allows us to add complex HTML to the content without having to
write raw HTML.

## Lead

The lead shortcode is used in the beginning of blog posts. You may notice that
the first paragraph in this post has a different font size then the rest of the
content. All posts should have a preface with a bigger font-size, and to accomplish
that we use the `lead` shortcode. Just wrap your text between the shortcode tags:

```go
{{%/* lead */%}}
Lead paragraph.
{{%/* /lead */%}}
```

{{% alert info %}}
Shortcodes can use `%` or `<>`. When you use the `%` notation, the text within the
tags can be written in Markdown. If you use `<>` the shortcode will get the plain
text.
{{% /alert %}}

## Images

To add images to your content, simply add the image to the same folder as the
`.md` file, or in an `images` folder. The `image` shortcode will display
the image:

```go  
  {{</* image src="path/dogs.png" height="400" align="center" */>}}
```

{{< image src="images/dogs.png" height="400" align="center">}}

If you want to use an image from the internet, use the shortcode `figure` instead:

```go
  {{</* figure src="https://www.kody.dog/images/kody-locks.jpg" height="400" class="d-flex justify-content-center" */>}}
```

{{< figure src="https://www.kody.dog/images/kody-locks.jpg" height="400" class="d-flex justify-content-center" >}}

## Buttons

To add a button, use the shortcode:

```go
{{</* button text="this is a button" href="https://..." */>}}
```

{{< button text="this is a button" href="#" >}}


## Tables

You can add tables to your content in a standard Markdown format to get a simple
table with a default style.

```markdown
Name    | Age
--------|------
Bob     | 27
Alice   | 23

```

Name    | Age
--------|------
Bob     | 27
Alice   | 23

If you want to modify the style of the table, you can use the shortcode `table`.
This shorcode takes the argument `c` for color, with the options `dark`, `light`, and `striped`;
the argument `hover`, either `true` or `false`; the argument `w` for width, takes `25`,
`50`, `75`, `100`, and `auto` corresponding to the percentage of the div; and the argument
`head`, that defines the color of the header, either `dark` or `light`. See examples
below:

```go
{{%/* table c="light" hover="true" w="50" head="light" */%}}
Name    | Age
--------|------
Bob     | 27
Alice   | 23
{{%/* /table */%}}

```
{{% table c="light" hover="true" w="50" head="light" %}}
Name    | Age
--------|------
Bob     | 27
Alice   | 23
{{% /table %}}


```go
{{%/* table c="dark" hover="true" w="75" */%}}
Name    | Age
--------|------
Bob     | 27
Alice   | 23
{{%/* /table */%}}

```
{{% table c="dark" hover="true" w="75" %}}
Name    | Age
--------|------
Bob     | 27
Alice   | 23
{{% /table %}}

```go
{{%/* table c="striped" hover="false" w="100" head="dark" */%}}
Name    | Age
--------|------
Bob     | 27
Alice   | 23
John    | 25
{{%/* /table */%}}
```
{{% table c="striped" hover="false" w="100" head="dark" %}}
Name    | Age
--------|------
Bob     | 27
Alice   | 23
John    | 25
{{% /table %}}

```go
{{%/* table w="50" */%}}
Name    | Age
--------|------
Bob     | 27
Alice   | 23
{{%/* /table */%}}
```

{{% table w="50" %}}
Name    | Age
--------|------
Bob     | 27
Alice   | 23
{{% /table %}}

## Code blocks

There are two possible ways to create a code block within a markdown file in Hugo.
You can wrap your code in code fences (three backticks), with the opening bacticks
followed by the language.

```julia
function hello(name)
   println("Hello, $(name)!")
end
hello("Mary")
Hello, Mary!
```

Or you can use the `highlight` shortcode. This option is more flexible because it
lets you add line numbers and highlight specific lines of code. In the example below
we pass the argument `"linenos=table, hl_lines=2 4, linenostart=101"`. This will
display the lines as table (the other option is `inline`), it will highlight
lines 2 and 4, and will start at line 101.

```go
{{</* highlight julia "linenos=table, hl_lines=2 4, linenostart=101" */>}}

code ...

{{</* /highlight */>}}
```

{{< highlight julia "linenos=table, hl_lines=2 4, linenostart=101">}}
function hello(name)
   println("Hello, $(name)!")
end
hello("Mary")
Hello, Mary!
{{< /highlight >}}

## Alert boxes

Alert boxes are used to get the user attention and to add side notes to the context.
There are 4 types of alert boxes:

{{% alert info %}}
{{% /alert %}}

{{% alert success %}}
{{% /alert %}}

{{% alert warning %}}
{{% /alert %}}

{{% alert danger %}}
{{% /alert %}}

{{% alert note %}}
{{% /alert %}}

The `alert` shortcode is used for that, and it takes one positional argument:
`info`, `success`, `warning`, `danger`, or `note`.

```go
{{%/* alert danger */%}}
content
{{%/* /alert */%}}

```

Also, note that for code blocks, alert boxes, and tables we need a closing tag.
That is only the case when there's content inside of the element. For images,
for example, we pass the arguments directly to the the shortcode
so there's no need to add the closing tag.


## Citations

You can easily include citations to your content. Just use the shortcode `cite`
and pass a positional argument with the article's DOI.

```go
{{</* cite "10.1016/j.actamat.2016.11.003" */>}}
```

The shortcode will render the citation:

{{< cite "10.1016/j.actamat.2016.11.003" >}}

{{% alert warning %}}
For the `cite` shortcode to work, you need to add the DOI to a yaml list in the
file `data/_citations.yaml`, then restart the server or build the site:
```bash
# to start the server:
npm run serve

# to build the site:
npm run build
```
Or, if you are not an admin, leave a note on your pull
request so the admin can set it up before the post is published.
{{% /alert %}}

## Bio

At the bottom of the posts we will have the writer's bio with some useful links:

{{% sign email="fer@brown.edu" twitter="1" github="fernandogelin" %}}

{{% alert danger %}}
The `bio` shortcode is not finalized yet. I'll update this soon.
{{% /alert %}}

## File tree

The file-tree shortcodes let you show directory trees. There are three different
shortcodes involved.

   - **File-tree container** - `file-tree`: this will open and close the directory group. All
   folders and files should be within this shortcode:

```go
{{</* file-tree */>}}
other shortcodes go here
{{</* /file-tree */>}}
```

  - **Folders** - `dir`: this will create a folder with contents in it. Also needs an
  opening and closing tags. It also take the `open` argument, which defines the status
  of the folder on load.

```go
  {{</* file-tree */>}}
  {{</* dir name="content" open="true" */>}}

  {{</* file name="file_name.md" */>}}

  {{</* /dir */>}}
  {{</* /file-tree */>}}}
```
{{< file-tree >}}
{{< dir name="content" open="true" >}}
{{< file name="file_name.md" >}}

{{< /dir >}}
{{< /file-tree >}}  

  - **Empty folders** - `folder`: this will create an item with folder icon, but not
  expandable.

```go
{{</* file-tree */>}}
{{</* folder name="content" */>}}

{{</* /file-tree */>}}
```
{{< file-tree >}}
{{< folder name="content" >}}

{{< /file-tree >}}  

  - **Files** - `file`: this will create an item with file icon. Files are not expandable.

```go
{{</* file-tree */>}}
{{</* file name="file_name.md" */>}}

{{</* /file-tree */>}}
```
{{< file-tree >}}
{{< file name="file_name.md" >}}

{{< /file-tree >}}
The shortcodes `dir`, `folder`, and `file` take a `description` argument, that will
add a small description after the object name.


## Font Awesome

The shortcodes `fas` (regular) and `fab` (brands) let you add font awesome icons within the markdown
content. They both take two positional arguments. The first is the icon name (check [FontAwesome](https://fontawesome.com/icons?d=gallery)),
the second is the size, with size not being required. Note that only the free icons are available.

```go
{{</* fas clock */>}}
{{</* fas users 2 */>}}
{{</* fab google-drive 3 */>}}

```

{{< fas clock >}}
{{< fas users 2 >}}
{{< fab google-drive 3 >}}

{{% sign "Fernando Gelin" %}}
