FROM ruby:onbuild
ADD node /node
VOLUME /usr/src/app/source
EXPOSE 3000

RUN apt-get update && apt-get install -y wget
	
RUN wget -qO- https://deb.nodesource.com/setup_0.12 | bash -

RUN apt-get install -y nodejs git\
&& apt-get clean && rm -rf /var/lib/apt/lists/*

RUN command -v node >/dev/null 2>&1 || { ln -s /usr/bin/nodejs /usr/bin/node; } && npm install -g gulp

RUN bundle exec middleman build --clean

RUN cp -rf build/** /node/public/

RUN cd /node; npm cache clean; npm install --production

WORKDIR /node

CMD ["nodejs", "server"]

