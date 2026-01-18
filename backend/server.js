const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});
app.listen(3000, () => {
  console.log('CLIA LIS Backend running on port 3000');
});