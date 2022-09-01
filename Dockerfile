FROM node:16-alpine AS runner
LABEL  MAINTAIENER = "AmirMallaei@gmail.com"
WORKDIR /app

ENV NODE_ENV production

COPY . ./

RUN npm i
RUN npm run build

CMD [ "npm", "start" ]
