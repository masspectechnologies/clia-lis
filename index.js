'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize express application
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection (replace 'your_database_url' with actual URL)
mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully.'))
  .catch((error) => console.log('Database connection error: ', error));

// Route initialization
app.get('/', (req, res) => {
    res.send('CLIA LIS Backend');
});

// Listening on specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
