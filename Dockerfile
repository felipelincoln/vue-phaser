FROM node:14.17

COPY . ./

RUN npm i

CMD ["npm", "run", "serve-prod"]
