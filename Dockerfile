FROM node:12-stretch

COPY ./ /site

WORKDIR /site

ARG ORGANIZATION
RUN export ORGANIZATION=$ORGANIZATION

ARG GITHUB_USER
RUN export GITHUB_USER=$GITHUB_USER

ARG GITHUB_TOKEN
RUN export GITHUB_TOKEN=$GITHUB_TOKEN

ARG BASEURL
RUN export BASEURL=$BASEURL

RUN npm install
RUN npm run build:production

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=0 /site/public /usr/share/nginx/html
