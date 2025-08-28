FROM oven/bun:1.0.11

WORKDIR /usr/src/app

COPY package.json ./

RUN bun i

RUN apt update && apt install wget -y

COPY . .

RUN bash bin/fetch-mmdb.sh

EXPOSE 9000

CMD [ "bun", "run", "index.ts" ]
