const express = require('express');
const bp = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./db');

dotenv.config();

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(morgan('short'));

app.use(express.static(path.join(__dirname + '../../react-client/dist')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
})
