# build react app
FROM node:14.14.0-alpine

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

# run nginx 
FROM nginx:stable-alpine

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /app/build /usr/share/nginx/html
