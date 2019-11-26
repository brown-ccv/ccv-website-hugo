FROM node:alpine

ENV HUGO_VERSION 0.53
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit.tar.gz

# Install Hugo
RUN set -x && \
  apk add --update wget ca-certificates && \
  wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} && \
  tar xzf ${HUGO_BINARY} && \
  rm -r ${HUGO_BINARY} && \
  mv hugo /usr/bin && \
  rm /var/cache/apk/*

COPY ./ /site

WORKDIR /site

ARG ORGANIZATION
RUN export ORGANIZATION=$ORGANIZATION

ARG GITHUB_USER
RUN export GITHUB_USER=$GITHUB_USER

ARG GITHUB_TOKEN
RUN export GITHUB_TOKEN=$GITHUB_TOKEN

ARG BASEURL
RUN export GITHUB_TOKEN=$BASEURL

RUN npm install
RUN npm run build

FROM nginx

COPY --from=0 /site/public /usr/share/nginx/html
