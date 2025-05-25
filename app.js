const express = require('express');
require('dotenv').config();
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

app.use(express.json()); // for parsing JSON

// ✅ Add this route so something shows in browser
app.get('/', (req, res) => {
  res.send('✅ School Management API is running successfully!');
});

app.use('/', schoolRoutes); // mount routes

const PORT = process.env.DB_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.DB_PORT || 3000}`);
});
