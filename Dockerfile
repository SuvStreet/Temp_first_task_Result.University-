FROM node:22-alpine

COPY . .

RUN npm ci

CMD [ "npm", "run", "dev_index" ]