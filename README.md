# CCV Website
This is the repo for Brown CCV's static website built with [Hugo](https://www.gohugo.io).

## Development
If you want to contribute to this project follow these steps:
- Install [Hugo](https://www.gohugo.io).
```shell
brew install hugo
```
- Clone the repo and install Node dependencies:
```shell
git clone https://github.com/brown-ccv/ccv-website.git
cd ccv-website
npm install
```

To start the server:
```shell
npm run serve # Preferred method. This will populate the citations (more on this later.)
#or
hugo serve [-D --ignoreCache --disableFastRender] <- optional flags
```
Go to `localhost:1313/`

To build the site into the `public/` folder. This generates all the files needed to publish the side, but doesn't start the server.
```shell
npm run build
#or
hugo
```
> Using Docker:  
```shell
docker build -t ccv-website .
docker run -d -p 8080:80 ccv-website
```
Go to `localhost:8080`

## Updating Content

The code is on [GitHub](https://github.com/brown-ccv/ccv-website). We will use the gitflow branching model. Currently, there are two ways to update content:

1. **GitHub**: If you want to add or update content, create a `feature branch` from `develop`. When done, send a PR to `develop`. The `develop` (staging) branch will deploy to `datasci.brown.edu/ccv-dev/`. The staging site should then be reviewed and merged into `master` for production.  
> **Any change pushed to `develop` will trigger a Docker build. If the build is successful, a webhook will trigger a script in the `datasci.brown.edu` server that will pull and restart the image.** This process takes a few minutes, be patient.

2. [**Forestry.io**](https://app.forestry.io/sites/gm-j7ebsou8h0q/#/): A static CMS that commits. Forestry gives you a GUI to update content. It's also convenient for small changes. When changes are saved, Forestry will commit and push to `develop`. That will trigger the deployment process. If you save multiple times, you'll see that Docker Hub will have multiple builds queued up, so you might want to stop the earlier builds manually.

## Creating New Content

Sections:
- Showcase Projects
- Documentation
- People
- Opportunities

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
hugo new content/english/projects/project.md
```

#### Documentation

Documentation is managed with Gitbook. 
[Check the docs here](https://docs.ccv.brown.edu/)

#### The data folder
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

##### Apps

Fetching apps data requires a .env file (template below). 

- The .env file is included in .gitignore and should never be committed.
- You can obtain a Github Access Token by following [these instructions](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

```
GITHUB_TOKEN=
GITHUB_USER=
ORGANIZATION=brown-ccv,compbiocore
```

#### CCV Bot - Calendar and Oscar/Stronghold Account Request.  

> [CCV's Calendar](https://calendar.google.com/calendar/b/2?cid=Y2N2LWJvdEBicm93bi5lZHU)

##### Events
To add events to the website, simply invite `ccv-bot@brown.edu` to your event. Make sure to set a location, have a displayable name, and a nice typo-free, short description. The Bot needs to accept the invitation before it can be displayed on the website.

In addition, the Bot checks the calendar every day around 7:25am. It combines the events of the day into one email and sends it out to `ccv-announce@brown.edu.`

The Bot will also create a deskpro ticket when users request an account on Oscar or Stronghold.

#### Guidelines for writing Markdown content
Find detailed information on how to write your markdown content and include shortcodes specific for CCV's website [here](https://datasci.brown.edu/ccv-dev/2019/02/how-to-write-docs-and-posts-for-the-ccv-website/).
