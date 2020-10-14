const whitelist = ['http://localhost:5000/', 'http://localhost:3000/'];

module.exports = {
  origin : (origin, cb) => {
    if(whitelist.indexOf(origin) !== -1) return cb(null, true);
    cb(new Error('Not allowed by Cors'))
  }
}
