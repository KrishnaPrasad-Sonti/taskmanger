# Use Node.js Alpine as base image
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy all files to the container
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Step 2: Serve with NGINX
FROM nginx:alpine

# Remove default nginx index.html
RUN rm -rf /usr/share/nginx/html/*

# Copy the build folder from the previous image to nginx's default html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80
























