FROM node:20-alpine

WORKDIR /usr/src/app

COPY /Backend/package.json /usr/src/app/package.json
COPY /Backend/package-lock.json /usr/src/app/package-lock.json

RUN npm install
COPY /Backend /usr/src/app

EXPOSE 8801

CMD ["npm", "start"]