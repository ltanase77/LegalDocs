var mongoose = require('mongoose');//requiring mongoose module
var gracefulShutdown;
var dbc = 'mongodb://localhost/local'; //database uri
mongoose.connect(dbc); //connecting to the database

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbc);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
// For nodemon restart
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    })
});
//For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});
// For Azure app termination
process.on('SIGTERM', function() {
    gracefulShutdown('AWS app shutdown', function() {
        proces.exit(0)
    });
});

require('./content');