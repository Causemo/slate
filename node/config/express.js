var express = require('express'),
    compress = require('compression'),
    helmet = require('helmet'),
    favicon = require('serve-favicon'),
	reqUtils = require('app-common').requestUtils;

module.exports = function () {

    // Initialize express app
    var app = express();

    app.use(favicon(path.join(serverRoot, '/public/images/favicon.ico')));

    app.use(compress({
        filter: function (req, res) {
            return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
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

    app.use(function (req, res) {
        return reqUtils.handleError(res, {message: 'endpoint not found', httpStatus: 404});
    });

    app.use(function (err, req, res, next) { // jshint ignore:line
        if (res && !res.errorHandled) {
            reqUtils.handleError(res, err);
        }
        logger.error(err);
    });

    return app;
};

