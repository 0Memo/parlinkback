# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20.15.1-slim
RUN apt-get update -y && \
    apt-get install -y openssl

# Create and change to the app directory.
WORKDIR /usr/app

# Install app dependencies using the `npm ci` command.
# This command uses package.json to install dependencies.
COPY package.json ./
COPY tsconfig.json ./
COPY prisma ./prisma

# Install the dependencies
RUN npm install

# Copy the app files to the container.
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Set environment variables
ENV NODE_ENV=production

# Build the application => TJ => JS
RUN npm run build

# Expose the application port (default Railway port environment variable will be used)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:prod"]