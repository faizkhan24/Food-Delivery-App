const mongoose = require("mongoose");

var mongoURL = 'mongodb://0.0.0.0:27017/mern-fooddelivery-app';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true }); // Fixed 'usenewUrlParser' to 'useNewUrlParser'

var db = mongoose.connection;

db.on('connected', () => {
    console.log('mongo DB connection successful');
});

db.on('error', () => {
    console.log('mongodb connection failed');
});

module.exports = mongoose;
