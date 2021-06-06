const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Routes
const index = require('./routes/index');
const userRoutes = require('./routes/user.routes');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.use(index);
app.use('/api/v1', userRoutes);

const mongooseConnection = require('./config/mongooseConnection.config');
app.set('mongoose connection', mongooseConnection);

module.exports = app;