var cluster = require('cluster');
var os = require('os');

module.exports = function(logger) {
    // Count the machine's CPUs
    var cpuCount = os.cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // listen for worker creation
    cluster.on('fork', function(worker) {
        logger.info('Successfully created worker ' + worker.id);
    });

    // Listen for dying workers
    cluster.on('exit', function(worker) {
        // Replace the dead worker,
        logger.warn('Worker ' + worker.id + ' died.  Respawning...');
        cluster.fork();
    });
};