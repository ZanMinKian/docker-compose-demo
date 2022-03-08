FROM node:14.18.1-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]