const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./db.js');
const fs = require('fs');
const userRoutes = require('./routes/userroutes');
const notificationRoutes = require('./routes/NotificationRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const cors = require('cors');


// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());

// Middleware to parse JSON and static file serving
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'mainPage.html'));
});

// Load JSON data
const jsonDBPath = process.env.JSON_DB_PATH; // Path from environment variable
if (!jsonDBPath) {
  throw new Error('JSON_DB_PATH is not defined in the environment variables');
}

let data;
try {
  const rawData = fs.readFileSync(jsonDBPath, 'utf-8');
  data = JSON.parse(rawData);
  console.log('JSON Data Loaded:', data);
} catch (error) {
  console.error('Error reading or parsing JSON file:', error);
}

// Routes
app.use('/api/users', userRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/categories', categoryRoutes);

// Start the server
const PORT = 5002;
app.listen(5002, '0.0.0.0', () => {
  console.log(`Server is running on port 5002`);
});