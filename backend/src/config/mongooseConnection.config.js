const mongoose = require('mongoose');

const db = require('./db.config');

// DB Connection
mongoose.Promise = global.Promise;

mongoose
    .connect(db.local.localDatabaseUrl, {
        user: 'dotr',
        pass: '123mudar',
        dbname: 'jwtAuthDb',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        // authSource: 'mongodb://gl-mongo:27017/local',
    })
    .then(
        () => {
            console.log('DB connection successed');
        },
        (err) => {
            console.log(`DB connection failed: ${err}`);
            process.exit();
        }
    );

module.exports = mongoose;