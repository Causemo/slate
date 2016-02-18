/* jshint ignore:start */
var nconf = require('nconf'),
    rootPath = require('path').normalize(__dirname + '/..');

module.exports = function () {

    // 1. process.env
    // 2. process.argv
    nconf.env().argv();

    // 3. searching for file in root - production
    nconf.file('config.json', {
        file: 'config.json',
        dir: rootPath,
        search: true
    });

    // 4. load development override configurations if specified
    nconf.file('config-dev.json', rootPath + '/config-dev.json');

    // 5. default values

    // 4. default values - our dev values
    var nconfDefaults = {
        server_root: rootPath,
        server_cluster: true,
        server_port: 3000
    };

    nconf.defaults(nconfDefaults);

    return nconf;

};
/* jshint ignore:end */