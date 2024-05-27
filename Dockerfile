FROM node:18-alpine as build

ARG BACKEND_URL
ENV REACT_APP_BACKEND_URL $BACKEND_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80