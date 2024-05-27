FROM node:18-alpine as build
WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80