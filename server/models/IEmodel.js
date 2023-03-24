const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//categories
const categories_model = new Schema({
  type: { type: String, default: 'Investment' },
  color: { type: String, default: '#FCBE44' },
});

//transactions
const transaction_model = new Schema({
  name: { type: String, default: 'Anonymous' },
  type: { type: String, default: 'Investment' },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});

//Income
const income_model = new Schema({
  type: { type: String, default: 'Income' },
  color: { type: String, default: '#00FF00' },
});

//Source
const Source_model = new Schema({
  name: { type: String, default: 'Anonymous' },
  type: { type: String, default: 'Active Income' },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});

const Categories = mongoose.model('categories', categories_model);
const Transaction = mongoose.model('transaction', transaction_model);
const Income = mongoose.model('Income', income_model);
const Source = mongoose.model('Source', Source_model);

exports.default = Transaction;
module.exports = {
  Categories,
  Transaction,
  Income,
  Source,
};
