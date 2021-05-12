const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const db = require('./config/db.config');

const app = express();

// DB Connection
mongoose.Promise = global.Promise;
mongoose
    .connect(db.local.localDatabaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
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

// Routes
const index = require('./routes/index');
// TODO: declare user.routes.js route

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));
app.use(index);
// TODO: add user.routes.js route

module.exports = app;