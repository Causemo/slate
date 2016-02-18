// initialize nconf configuration
var nconf = require('./config/nconf-config')();
var isTrue = function isTrue(value) {
	return value === 'true' || value === true;
};
if (isTrue(nconf.get('newrelic_enabled'))) {
    // setup newrelic
    global.newrelic = require('newrelic');
}

var cluster = require('cluster');

var setupServer = function setupServer() {
    var clustermode = isTrue(nconf.get('server_cluster'));
    if (cluster.isMaster && clustermode) {
        // setup cluster
        require('./config/cluster-setup')();
    } else {
        // Init the express application
        var app = require('./config/express')();

        var http = require('http');
        http.globalAgent.maxSockets = 100;
        var httpPort = nconf.get('server_port');

        if (isTrue(nconf.get('ssl_enabled'))) {
            var https = require('https');
            var fs = require('fs');
            var options = {
                key: fs.readFileSync(nconf.get('ssl_key')),
                cert: fs.readFileSync(nconf.get('ssl_crt')),
                ca: fs.readFileSync(nconf.get('ssl_ca'))
            };
            https.globalAgent.maxSockets = 100;
            var httpsPort = nconf.get('https_port');
            app.set('port', httpsPort);
            console.info('Listening HTTPS on: ' + httpsPort);
            https.createServer(options, app).listen(httpsPort);

            var redirectApp = require('./config/express_https_redirect')();
            console.info('Listening HTTP on: ' + httpPort);
            http.createServer(redirectApp).listen(httpPort);
        } else {
            app.set('port', httpPort);
            console.info('Listening HTTP on: ' + httpPort);
            http.createServer(app).listen(httpPort);
        }
    }
};


setupServer();

