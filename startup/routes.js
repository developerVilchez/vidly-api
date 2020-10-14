const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const auth = require('../routes/auth');
const returns = require('../routes/returns');
const error = require('../middleware/error');
const cors = require('cors');
/* 
const whiteList = ['http://127.0.0.1:5000', 'http://127.0.0.1:5001', 'http://localhost:3000', 'http://localhost:5000']; 

const corsOptions = {
  origin : (origin, cb) => {
    console.log('hola', origin)
    if(whiteList.indexOf(origin) !== -1) return cb(null, true)
    cb(new Error('No allowed by cors'))  
  }
}
 */
module.exports = function(app) {
  app.use(express.json());
  app.use(cors());
  app.use('/api/genres', genres);
  app.use('/api/customers', customers);
  app.use('/api/movies', movies);
  app.use('/api/rentals', rentals);
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  app.use('/api/returns', returns);
  app.use(error);
}