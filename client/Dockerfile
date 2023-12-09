FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
ENV REACT_APP_API_URL=http://backend-service:9000
CMD ["npm", "start"]