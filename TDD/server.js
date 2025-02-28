const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Sample route for testing
app.get('/', (req, res) => {
  res.json({ message: 'API is working' });
});