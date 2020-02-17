# CCV Website
This is the repo for Brown CCV's static website built with [Hugo](https://www.gohugo.io).

## Getting Started

To make contributions, first clone the repo and install the dependencies:

```shell
git clone https://github.com/brown-ccv/ccv-website.git
cd ccv-website
```

#### Set up `.env` file:  

Create a `.env` file with the contents of `.env.example` in the root of your project.

- The .env file is included in .gitignore and should never be committed.
- You can obtain a Github Access Token by following [these instructions](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line). The Github Access Token only needs the `public_repo` scope.

#### Serving to `localhost`
First, install the dependencies:
```shell
npm install
```

To run it locally:
```shell
npm run serve
```
Go to `localhost:1313/`

To build the site into the `public/` folder. This generates all the files needed to publish the side, but doesn't start the server.
```shell
npm run build
```

## Suggesting changes and reporting bugs

Open an issue using one of the provided templates. Follow the instructions and complete all items in the issue template. Consider assigning it to yourself and starting a pull request following the contribution guidelines below.

## Contribution Guidelines

If you wish to contribute with content updates, style changes, new features, or bug fixes, read the full contributing guidelines below and follow the contribution workflow.

<!--ts-->
   * [Conventions](#conventions)
      * [GitLab Flow](#gitlab-flow)
      * [Types of Changes](#types-of-changes)
      * [Conventional commits](#conventional-commits)
   * [Deployment environments](#deployment-environments)
      * [Production](#production)
      * [Staging](#staging)
   * [Issues and PRs](#issues-and-prs)
      * [Opening an issue](#opening-an-issue)
      * [Submitting a PR](#submitting-a-pr)
      * [Reviewers](#reviewers)
   * [Creating new content](#creating-new-content)
<!--te-->

### Conventions

#### GitLab Flow

[Check the GitLab Flow Docs](https://docs.gitlab.com/ee/topics/gitlab_flow.html)

The main branches are:
- `master` (default): development/staging branch. Changes to this branch come from topic branches. Contributors should branch off `master` to work on their changes. A PR should be submitted to `master`, add the appropriate label to the changes being proposed. Reviews are required before merging. The topic branch will be deleted when merged.
- `production`: this is the production branch. Changes to this branch come from PRs from `master`. PRs need to be reviewed and approved (mostly check the staging website). Only members of website-admin team can approve and merge PRs to production.

Changes happen in topic branches. Topic branch names start with the type of the change `<change_type>-*` ([see types below](#types-of-changes)). If multiple changes are expected in the same branch, name the branch `updates-*` and add the labels corresponding to the change type in your PR. Topic branches are created off `master`.

Once changes are done, a PR is submitted to `master` with the corresponding labels, and a review is requested from up to 3 reviewers (depending on the type of change - content (sometimes) or technical (always)).

#### Types of changes:

- **Hotfix**: bugs/mistakes that must be addressed in production. These changes happen in topic branches `hotfix-*`.
- **Data**:  changes to files in the data folder. Includes **people** and **opportunities.** Changes (add/remove/update) to items in those sections. These changes happen in topic branches `data-*`.
- **Content**: changes to content (in content folder). These changes happen in topic branches `content-*`
    - **What's New:** this is a special case of content changes. All what's new items will be removed every month.
- **Style**: basic style changes. These changes happen in topic branches `style-*`
- **New Feature**: major UI changes, new features, pages, new content, etc. These changes happen in topic branches `feature-*`. New features requests happen in issues with the [`suggestion` label](#the-suggestion-label) and are discussed during triage meetings.

#### Conventional Commits

When committing your changes, use `npm run commit` instead of `git commit -m`. Follow the instructions on the terminal to create your conventional commit message. [Click here to learn more](https://www.conventionalcommits.org/en/v1.0.0/). This is required and the technical reviewer should make sure only changes with conventional commits are merged.

### Deployment environments

#### Production

- https://ccv.brown.edu
- deployed from `production` branch.
- will include all changes accepted into the `master` branch.
- PRs from `master`. Only members of `website-admin` team are able to approve/merge PRs to `production`.

#### Staging

- https://datasci.brown.edu
- deployed from `master` branch.
- for changes to make it into this branch they need to be reviewed and approved.
- no direct push allowed. All changes come from PRs from topic branches.

### Issues and PRs

A Slack channel `gh-ccv-website` is linked to this repository. Join that channel if you want to receive notifications when issues, PRs, and deployments are created.

#### Opening an Issue

Issues are welcome and are the recommended way to request or suggest changes.
Use one of the templates provided and add labels as needed.

##### The `suggestion` label

Issues labeled with `suggestion` will be brought up for discussion during triage meetings. If a suggestion is approved, the issue will get the label `next-up` or `fast-track` depending on urgency and will be assigned to a member of `website-dev` or `website-content`. Priorities will also be discussed in the triage meetings and will be communicated to the assignee on the issue. If the suggestion is declined, a new label `declined` will be added and the issue will be closed. Declined suggestions can be brought up for discussion in future meetings.n

#### Submitting a PR

Use the template provided and fill in all the information requested and assign the appropriate reviewers. Make sure to fill this out correctly and check the appropriate checkboxes. A checklist for the reviewers will be created based on this.

A version of the website will be deployed for review to Heroku and a link to the deployed website will be added to the PR comments section. To view the website, click on `view deployment`. In addition, when the review site is deployed, the `gh-ccv-website` will be notified.

For **content** changes:
- assign reviews to **website-content** and **website-dev** teams or to a specific person that you think should be the reviewer.
- 2 reviewers required (1 technical and 1 content), one of whom must not have been close to the development/design of the feature.

For **new feature** changes:
- assign reviews to **website-content** and **website-dev** teams.
- 3 reviewers required (1 technical and 2 content), one of whom must not have been close to the development/design of the feature.

For **hotfix**, **data**, and **style** changes:
- assign reviews to **website-dev** team for **hotfix**, **data**, and **style** changes.

When a PR is merged into `master`, the topic branch that originates the PR is automatically deleted.

##### Notes for reviewers

A checklist will be created in the comments section of the PR. Follow those instructions and use the checklist. And review the website deployed to Heroku.

The reviewer who merged the PR into `master` is responsible for starting a PR to `production` and assigning it to the `website-admin` team.

The member from the `website-admin` will announce on the slack channel `gh-ccv-website` the waiting period for the PR to give everyone interested a chance to look at the staging site.


#### Reviewers

There are two types of reviewers. Reviewers are part of teams on GitHub and can find a checklist in the team discussion board.

- **website-dev**: will check if the code meets standards.
- **website-content**: will check the content, proof read, etc.
- **website-admin**: members who have permission to review and merge PRs from `master` to `production`.

### Creating New Content

Sections:  
- News (Blog) - https://www.medium.com/brown-ccv
- Showcase Projects
- Documentation - https://app.gitbook.com/@brown-cis/spaces
- Data folder: People & Opportunities
- Content folder: Home, Services, About

#### News
This is the blog section. It's now on [Medium](https://www.medium.com/brown-ccv).

#### Projects to Showcase on Home Page
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

Documentation is hosted on Gitbook.
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
Find detailed information on how to write your markdown content and include shortcodes specific for CCV's website [here](https://datasci.brown.edu/hidden/how-to-write-md/).


##### Our work: Software and Workshops
- Adding, updating, or deleting items from here do not require change to this repo.
Fetching apps data requires a .env:

```
GITHUB_TOKEN=
GITHUB_USER=
ORGANIZATION=brown-ccv,compbiocore,dscov-tutorials
```

- The .env file is included in .gitignore and should never be committed.
- You can obtain a Github Access Token by following [these instructions](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).


#### CCV Bot - Calendar

> [CCV's Calendar](https://calendar.google.com/calendar/b/2?cid=Y2N2LWJvdEBicm93bi5lZHU)
> We also have an Events@brown calendar. https://event.brown.edu/ccv
##### Events
To add events to the website, simply invite `ccv-bot@brown.edu` to your event. Make sure to set a location, have a displayable name, and a nice typo-free, short description. The Bot needs to accept the invitation before it can be displayed on the website.
CCV's Google Calendar is connect to Events@Brown and will show events in both places
