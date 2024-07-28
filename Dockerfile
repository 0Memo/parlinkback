# Use the official Node.js image.
# https://hub.docker.com/_/node
FROM node:20.15.1-slim
RUN apt-get update -y && \
    apt-get install -y openssl

# Create and change to the app directory.
WORKDIR /usr/app

# Install app dependencies using the `npm ci` command.
# This command uses package-lock.json to install dependencies.
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the Prisma schema and migrations separately if needed
COPY prisma ./prisma

# Verify the prisma/schema.prisma file exists
RUN ls -la ./prisma && cat ./prisma/schema.prisma

# Copy the app files to the container.
COPY . .

# Generate Prisma client
RUN npx prisma generate --schema=prisma/schema.prisma

# Build the application => TJ => JS
RUN npm run build

# Start the app
CMD [ "npm", "run", "start:prod" ]