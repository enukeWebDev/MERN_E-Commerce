import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

dotenv.config();

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

// The form data in the post request will be converted to json object in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// Error handler for express
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// app.get('/api/products', (req, res) => {
//   res.send(data.products);
// });

// // Backend API to Return Products Information based on Slug
// app.get('/api/products/slug/:slug', (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);

//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);

//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Listening to server http://localhost:${port}`);
});
