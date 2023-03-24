const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user_model = new Schema({
  username: String,
  email: String,
  password: String,
});
