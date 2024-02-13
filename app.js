const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/authRoutes');

// Initialize express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.CONN_STR, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then((conn) => {
     console.log('DB Connection Successful');
}).catch((error) => {
     console.log('Some error has occured');
});

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/api/v1/auth', authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

module.exports = app;