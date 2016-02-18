var express = require('express');
var reqUtils = require('app-common').requestUtils;

module.exports = function () {

    // Initialize express app
    var app = express();

    app.use(function(req, res) {
        res.redirect('https://' + req.get('Host') + req.url);
    });

    app.use(function (req, res) {
        return reqUtils.handleError(res, {message: 'should not reach here!', httpStatus: 500});
    });

    return app;

};

