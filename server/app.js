const express = require('express');
const app = express();
const ownerRouter = require('./routes/ownerRouter');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();
const middleware = (req, res, next) => {
  console.log('Middleware executed');
  next(); // Call next() to proceed to the next middleware
};
app.use(middleware);
const connectDb = require('./config/monggose-connection');

app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/owner', ownerRouter);
app.use('/user', userRouter);
app.use('/product', productsRouter);

app.get('/', (req, res) => {
  res.send('Hello, how are you doing?');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectDb();
});
