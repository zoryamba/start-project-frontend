FROM node:8.9.4

WORKDIR /home/node/app

ADD entrypoint.sh /

USER node

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

RUN npm install -g @angular/cli

ENTRYPOINT ["sh", "/entrypoint.sh"]
