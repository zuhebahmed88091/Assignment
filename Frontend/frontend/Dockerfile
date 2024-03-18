FROM node:18.17.1

WORKDIR /usr/src/app

COPY /Frontend/frontend/package.json /usr/src/app/package.json
COPY /Frontend/frontend/package-lock.json /usr/src/app/package-lock.json

RUN npm install
COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]