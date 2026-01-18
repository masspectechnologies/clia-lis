// server.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { Pool } = require('pg'); // import PostgreSQL client

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// PostgreSQL connection
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,
});

// Test database connection
pool.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

// Authentication middleware - placeholder
app.use((req, res, next) => {
  // Basic authentication logic would go here
  next();
});

// Routes would go here
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
