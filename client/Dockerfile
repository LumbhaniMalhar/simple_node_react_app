FROM node:14-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
ENV REACT_APP_API_URL=http://localhost:9000/testAPI
CMD ["npm", "start"]