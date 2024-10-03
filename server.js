const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Menyajikan file statis dari direktori saat ini
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
