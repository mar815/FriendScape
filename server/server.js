const express = require('express');
const cors = require('cors');
const friendRoutes = require('./routes/friendRoutes');
const mongoose = require('./models/db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/friends', friendRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});