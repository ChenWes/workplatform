# FROM BASIC IMAGE
FROM node:boron

#RUN curl -o- -L https://yarnpkg.com/install.sh | bash
#RUN $HOME/.yarn/bin/yarn install

# CREATE AND SET WORK-DIRECTORY
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# INSTALL APP DEPENDENCIES
COPY package.json /usr/src/app/
RUN npm install -g cross-env
RUN npm install

# BUILD SOURCE CODE
COPY . /usr/src/app
RUN npm build

# PORT
EXPOSE 3000

# DEFAULT COMMAND
CMD [ "npm", "start" ]
