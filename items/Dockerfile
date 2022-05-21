FROM node:latest

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3002

ENTRYPOINT ["node", "items.js"]