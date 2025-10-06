const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'https://verbose-acorn-5wvj5qpg4x4h7649-7002.app.github.dev'
}));

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const aboutRoute = require('./routes/about');
app.use('/about', aboutRoute);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
