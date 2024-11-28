FROM node:current-slim

WORKDIR /app

COPY . .

WORKDIR /app/backend
RUN npm install

WORKDIR /app/frontend
RUN npm install
RUN npm run build 

WORKDIR /app/backend
RUN cp -r ../frontend/dist ./public

EXPOSE 3000

CMD ["node", "index.js"]