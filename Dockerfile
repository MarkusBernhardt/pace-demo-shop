# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the Angular app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built app to nginx
COPY --from=build /app/dist/pace-demo-shop/browser /usr/share/nginx/html

# Copy nginx configuration (optional, for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]