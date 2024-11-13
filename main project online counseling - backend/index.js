require('dotenv').config(); // Load environment variables
const http = require('http'); // Import HTTP module
const express = require('express'); // Import Express
const connectDB = require('./config/db'); // Import database connection
const cors = require('cors'); // Import CORS middleware

// Initialize the Express app
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all routes

// Connect to the database
(async () => {
  try {
    await connectDB();
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit the process if the DB connection fails
  }
})();

// Basic Route for testing
app.get('/', (req, res) => {
  res.send('Hello, World! The server is up and running.');
});

// Routes
const userRoutes = require('./routes/userRoutes'); // Import user routes
app.use('/api/users', userRoutes);

// Define the PORT
const PORT = process.env.PORT || 10000;

// Start the HTTP server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`HTTP Server running on http://localhost:${PORT}`);
});

// require('dotenv').config(); // Load environment variables
// const http = require('http'); // Import HTTP module
// const express = require('express'); // Import Express
// const connectDB = require('./config/db'); // Import database connection
// const cors = require('cors'); // Import CORS middleware

// // Initialize the Express app
// const app = express();
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// // Middleware
// app.use(express.json()); // Parse incoming JSON requests
// app.use(cors()); // Enable CORS for all routes

// // Connect to the database
// connectDB()
//   .then(() => console.log('Database connected successfully'))
//   .catch((err) => {
//     console.error('Database connection failed:', err.message);
//     process.exit(1); // Exit the process if the DB connection fails
//   });

// // Routes
// const userRoutes = require('./routes/userRoutes'); // Import user routes
// app.use('/api/users', userRoutes);

// // Define the PORT
// const PORT = process.env.PORT || 5000;

// // Create and start the HTTP server
// const server = http.createServer(app);
// server.listen(PORT, () => {
//   console.log(`HTTP Server running on http://localhost:${PORT}`);
// });
