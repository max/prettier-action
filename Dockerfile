FROM node:10-alpine
RUN npm install --global prettier && npm cache --force clean
ENTRYPOINT ["prettier"]
