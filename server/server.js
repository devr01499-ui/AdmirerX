const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const teamRoutes = require('./routes/team');
const servicesRoutes = require('./routes/services');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://admirx-frontend.vercel.app' 
    : 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/admirx', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', contactRoutes);
app.use('/api', teamRoutes);
app.use('/api', servicesRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AdmirerX API is running' });
});

// CRITICAL: Serve static files from the correct frontend build directory
// This tells Express where to find the index.html and other compiled files
app.use(express.static(path.join(__dirname, '../client/dist')));

// CRITICAL: Handle client-side routing (e.g., React Router)
// This ensures refreshing on any page doesn't cause a 404 error
app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!', 
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
