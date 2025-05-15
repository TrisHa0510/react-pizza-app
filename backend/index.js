// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); // Allow frontend requests
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
