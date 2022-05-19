// Constants
const PORT = 3000;

// Import tools
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

// Load environment file
require('dotenv').config()

// Get connection string from the environment file
const dbConnectionString = process.env.DB_CONNECTION_STRING;

// Connect to the database
mongoose.connect(dbConnectionString);
const database = mongoose.connection;

// Message on error or success
database.on('error', error => {
	console.log(error);
});

database.once('connected', () => {
	console.log('Connected to the database');
});

// Initialize app and routes
const app = express();
app.use(express.json());
app.use('/api', routes);
app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});

