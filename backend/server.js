import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log(`Listening to server http://localhost:${port}`);
});
