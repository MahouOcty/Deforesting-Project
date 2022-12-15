FROM node:14.17.1 AS development

#add workdir
WORKDIR /app

#install dependencies
COPY package.json .
RUN npm i

#Copy app files
COPY . .

#Expose ports
EXPOSE 3000

#Start the app
CMD ["npm", "start"]

