const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

// Connect to MongoDB
console.log('Connecting to MongoDB...');
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

const db = mongoose.connection;

// Log any MongoDB errors
db.on('error', (err) => console.error('MongoDB error', err));

module.exports = db;
