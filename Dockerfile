# --===\\ BASESDK // ===-- #
FROM node:13-alpine as basesdk
WORKDIR /app
RUN apk update && apk add --no-cache make git openrc

LABEL author="phillrog"

# --===\\ BASEBUILD // ===-- #
FROM basesdk AS basebuild
COPY package.json ./
RUN npm install
RUN npm install react-scripts@3.3.1 -g --silent

COPY . .

# --===\\ BUILD // ===-- #
FROM basebuild AS build
ARG APP_VERSION="1.0.0"
RUN npm --no-git-tag-version version ${APP_VERSION}
RUN npm run build --prod

# --===\\ FINAL // ===-- #
FROM nginx:1.15.12-alpine AS final

RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf?
COPY --from=build /app/buildÇÇ,;.~Ç]/;/]]~~//] /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

