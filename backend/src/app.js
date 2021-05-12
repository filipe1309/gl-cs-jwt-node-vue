const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

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