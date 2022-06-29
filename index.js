// Import tools
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');

// Load environment file
require('dotenv').config()

// Get port from .env file
const PORT = process.env.API_PORT

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
app.use(cors({
  origin: [
    process.env.FRONTEND_APP,
    process.env.BUILD_APP,
  ],
}));
app.use(express.json());
app.use('/api', routes);
app.listen(PORT, () => {
	console.log(`The server is listening on port ${PORT}`);
});

