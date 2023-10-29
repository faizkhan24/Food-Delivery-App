const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://faizkhan:TjxoQeK0YPKoasUA@cluster0.binjoim.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true }); // Fixed 'usenewUrlParser' to 'useNewUrlParser'

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongo DB connection successful");
});

db.on("error", () => {
  console.log("mongodb connection failed");
});

module.exports = mongoose;
