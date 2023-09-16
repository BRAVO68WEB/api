FROM oven/bun:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN bun i

COPY . .

RUN bun run build

EXPOSE 9000

CMD [ "bun", "run", "--hot", "index.ts" ]