FROM node:10-alpine

RUN mkdir -p /prettier-action
WORKDIR /prettier-action

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY entrypoint.js ./
COPY src/ ./src

ENTRYPOINT ["./entrypoint.js"]
