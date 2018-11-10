FROM node:8

WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# API dependencies
RUN npm install
COPY . .

# React build
RUN cd client && npm install && npm run build

# Environment Variables
ENV PORT 6161
ENV MY_NAME "Sanju [From Dockerfile]"
EXPOSE 6161

CMD [ "npm", "start" ]
