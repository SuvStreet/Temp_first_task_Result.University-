FROM node:22-alpine

COPY . .

RUN npm ci

CMD [ "node", "date-service" ]