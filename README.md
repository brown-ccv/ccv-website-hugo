# CCV Website
This is the repo for Brown CCV's static website built with [Hugo](https://www.gohugo.io).

## Serving to `localhost`

Clone the repo and install Node dependencies:
```shell
git clone https://github.com/brown-ccv/ccv-website.git
cd ccv-website
npm install
```

To start the server:
```shell
npm run serve
```
Go to `localhost:1313/`

To build the site into the `public/` folder. This generates all the files needed to publish the side, but doesn't start the server.
```shell
npm run build
```

> Using Docker:  
```shell
docker build -t ccv-website .
docker run -d -p 8080:80 ccv-website
```
Go to `localhost:8080`

## Contributing

If you wish to contribute with content updates, style changes, new features, or bug fixes, follow the contributing guidelines below:

### Overview

#### Production - ccv.brown.edu

- deployed from `master` on the last Friday of the month
- will include all changes accepted into the `release` branch up to the 3rd Friday.

#### Staging - datasci.brown.edu

- deployed from `release` branch on the 3rd Friday of the month.
- PR's from `develop`, `hotfix-*`, or `data-*` branches.
- for changes to make into this branch they need to be reviewed and approved

#### Development - brown-ccv.github.io/ccv-website

- deployed from `develop`
- PR's encouraged from `topic` branches

#### Reviewers

There are two types of reviewers:

- **technical**: will check if the code meets standards
- **content**: will check the content, proof read, etc

### Understanding the branching system

We use the GitFlow approach. The main branches are:
- `master`: this is the production branch. Changes to this branch can only be made using PRs from `release`. The production site is `https://ccv.brown.edu`.
- `release`: this is the staging branch. Changes to this branch come from PRs from `develop`, `hotfix-*`, or `data-*` branches. PRs need to be reviewed and approved by a content reviewer and/or a technical reviewer. Staging site can be found at `https://datasci.brown.edu`.
- `develop`: development branch. Changes to this branch come from `topic` branches. Contributors should branch off `develop` to work on their changes that are not `hotfix` or `data`. A PR should be submitted to `develop`, add the appropriate label to the changes being proposed. Reviews are encouraged before merging. The topic branch will be deleted when merged. Development site is deployed to GH Pages: `https://brown-ccv.github.io/ccv-website`

#### GitFlow:

Changes happen in topic branches. Topic branch names start with the type of the change `<change_type>-*` (see types below). If multiple changes are expected in the same branch, name the branch `updates-*` and add the labels corresponding to the change type in your PR. Support branches are created off `develop` (except for **hotfix** and **data** changes).

Once changes are done, a PR is submitted to `develop` with the corresponding labels, and a review is requested from one or two reviewers (depending on the type of change - content (sometimes) or technical (always)). If the reviewer fails to approve/request changes to the PR before the 21st of the month, the changes won't make into `release` and can be reassessed for the following release.

A Slack channel `gh-ccv-website` is linked to this repository. Join that channel if you want to receive notifications when issues, PRs, and releases are created.

#### Types of changes:

- **Hotfix**: bugs/mistakes that must be addressed in production. There's no waiting period for hotfixes.
- **Data**:  changes to files in the data folder. Includes **people** and **opportunities.** Changes (add/remove/update) to items in those sections are done directly in production without a waiting period.
- **Content**: changes to content (in content folder). Content changes follow the release cycle. These changes happen in support branches `content-*`
    - **What's New:** this is a special case of content changes. All what's new items will be removed every month. New items can be added following the release cycle.
- **Style**: basic style changes. Style changes follow the release cycle. These changes happen in support branches `style-*`
- **New Feature**: major UI changes, new features, pages, new content, etc. New features follow the release cycle. These changes happen in support branches `feature-*` and require 2 content reviewers, one of whom must not have been close to the development/design of the feature.

#### Conventional Commits

When committing your changes, use `npm run commit` instead of `git commit -m`. Follow the instructions on the terminal to create your conventional commit message. [Click here to learn more](https://www.conventionalcommits.org/en/v1.0.0/). This is required and the technical reviewer should make sure only changes with conventional commits are merged.

#### Opening an Issue

Issues are welcome and are the recommended way to request or suggest changes.
Use one of the templates provided and add labels as needed.

#### Submitting a PR

Use the template provided.

## Creating New Content

Sections:
- News (Blog) - https://www.medium.com/brown-ccv
- Showcase Projects
- Documentation - https://app.gitbook.com/@brown-cis/spaces
- Data folder: People & Opportunities
- Content folder: Home, Services, About

#### News
This is the blog section. It's now on [Medium](https://www.medium.com/brown-ccv).

#### Pojects to Showcase on Home Page
Project, labs, initiatives, groups, collaborations, or anything we want to showcase. Items under this section will show up on the home page's carousel.

```yaml
---
title: "{{ replace .Name "-" " " | title }}"
date: {{.Date}}
draft: false
team: ""
text: ""
image: "/images/<image.png>"
href: ""
cfa: "Launch the App" # call for action button: Read More, Learn More, Launch the App, More on Github...
---
```

```shell
npm run new content/english/projects/project.md
```

#### Documentation

Documentation is managed with Gitbook.
[Check the docs here](https://docs.ccv.brown.edu/)

For documentation related issues, open issues directly on the doc repo.

#### Data folder

- Changes to the `data` folder go straight to `release` and don't have to wait until the next release cycle. Those changes are related to adding, updating or deleting items from `people` and `opportunities`.

##### People
`data/people.yaml`

```yaml
- name: Ashley S. Lee
  team: Advanced Research Computing
  title: Data Scientist
  github_username: alee35
  brown_directory_uuid: 380094e2-6f9d-47cf-91ce-e636876a58cf
  bio: "Ashley received training in Biology and Data Science at the University of Virginia
    and dabbled in a variety of careers including Bus Driver, Bagel Slinger, and Chief
    Fiduciary at Smoothie King. She enjoys food and beverage, bodies of water, jokes,
    caring for her beloved dog and plants, and resenting her cat."
  image: ashley.jpg
```

##### Opportunities
`data/opportunities.yaml`  

```yaml
- title: Research Services Support Specialist
  team: CCV Operations
  subteam: User Services
  link: "https://brown.wd5.myworkdayjobs.com/en-US/staff-careers-brown/job/180-George-Street/Research-Services-Support-Specialist_REQ151702"
```

#### Content folder

The majority of the website's content can be found under `content/english/` in Markdown format.
- Home page: `content/english/_index.md`
- About: `content/english/about/_index.md`
- Services: `content/english/services/**/*`

To create new files under `services` use the command:

```shell
npm run new content/english/services/consulting/new_file.md
```

##### Guidelines for writing Markdown content
There are special shortcodes that can be used in the Markdown content files that generate styled html components that follow the website design.
Find detailed information on how to write your markdown content and include shortcodes specific for CCV's website [here](https://datasci.brown.edu/2019/02/how-to-write-docs-and-posts-for-the-ccv-website/).


##### Our work: Software and Workshops
- Adding, updating, or deleting items from here do not require change to this repo.
Fetching apps data requires a .env file (template below).

- The .env file is included in .gitignore and should never be committed.
- You can obtain a Github Access Token by following [these instructions](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

```
GITHUB_TOKEN=
GITHUB_USER=
ORGANIZATION=brown-ccv,compbiocore
```

#### CCV Bot - Calendar

> [CCV's Calendar](https://calendar.google.com/calendar/b/2?cid=Y2N2LWJvdEBicm93bi5lZHU)
> We also have an Events@brown calendar. https://event.brown.edu/ccv
##### Events
To add events to the website, simply invite `ccv-bot@brown.edu` to your event. Make sure to set a location, have a displayable name, and a nice typo-free, short description. The Bot needs to accept the invitation before it can be displayed on the website.
CCV's Google Calendar is connect to Events@Brown and will show events in both places
