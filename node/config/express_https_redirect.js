var express = require('express');

module.exports = function () {

    // Initialize express app
    var app = express();

    app.use(function(req, res) {
        res.redirect('https://' + req.get('Host') + req.url);
    });

    app.use(function (req, res) {
        res.status(500).send({message: 'should not reach here!', httpStatus: 500});
    });

    return app;

};

