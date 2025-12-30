FROM node:8

RUN apt-get update

EXPOSE 3000
EXPOSE 5000

ADD . /app
WORKDIR /app

CMD yarn start
