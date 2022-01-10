FROM node:16.3.0-alpine As development

ENV PORT=3333

EXPOSE ${PORT}

WORKDIR /usr/src/app

COPY ["package*.json", "nx.json", "decorate-angular-cli.js", "./"]
# COPY nx.json .

RUN npm install

COPY . .

RUN npm install -g @angular/cli@13.1.0
RUN npm install -g @nrwl/cli@13.4.3

RUN nx build
CMD nx serve --host 0.0.0.0 --port=${PORT}
