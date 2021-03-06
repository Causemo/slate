var express = require('express'),
    compress = require('compression'),
    helmet = require('helmet'),
    path = require('path'),
    favicon = require('serve-favicon'),
    nconf = require('nconf'),
	serverRoot = nconf.get('server_root');

var statusResponse;
	
module.exports = function () {

    // Initialize express app
    var app = express();

    app.use(favicon(path.join(serverRoot, '/public/images/favicon.ico')));

    app.use(compress({
        filter: function (req, res) {
            return (/json|text|javascript|css|html/).test(res.getHeader('Content-Type'));
        },
        level: 9
    }));

    app.use(express.static(__dirname + '/../public'));

    // Use helmet to secure Express headers
    app.use(helmet.xframe());
    app.use(helmet.xssFilter());
    app.use(helmet.nosniff());
    app.use(helmet.ienoopen());
    app.disable('x-powered-by');

    var handleStatus = function handleStatus(req, res) {
        if (!statusResponse) {
            statusResponse = {
                status: 'running'
            };
        }
        return res.status(200).send(statusResponse);
    };
	
    app.route('/status').get(handleStatus);

    app.use(function (req, res) {
        res.status(404).send({message: 'endpoint not found', httpStatus: 404});
    });

    app.use(function (err, req, res, next) { // jshint ignore:line
        if (res && !res.errorHandled) {
        	res.status(500).send(err);
        }
        logger.error(err);
    });

    return app;
};

