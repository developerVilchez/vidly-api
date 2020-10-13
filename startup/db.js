const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');


module.exports = function() {
    const db = config.get('db');
/*   const db = "mongodb://prueba:prueba123@cluster0-shard-00-00.udkdg.mongodb.net:27017,cluster0-shard-00-01.udkdg.mongodb.net:27017,cluster0-shard-00-02.udkdg.mongodb.net:27017/vidly_staging?ssl=true&replicaSet=atlas-8ml4s5-shard-0&authSource=admin&retryWrites=true&w=majority" */
  mongoose.connect(db)
    .then(() => winston.info(`Connected to mongo cloud`))
    .catch((err) => console.log(err) )
}


