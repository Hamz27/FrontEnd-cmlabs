const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'category.html'));
});

app.get('/category/:categoryName', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'category-details.html'));
});

app.get('/meal/:mealID', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'meal-details.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
