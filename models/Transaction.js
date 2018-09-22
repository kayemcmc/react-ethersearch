const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

//SCHEMA
const TransactionSchema = new Schema({
  blockNumber: String,
  timeStamp: String,
  hash: {
    type: String,
    unique: true
  },
  nonce: String,
  blockHash: String,
  transactionIndex: String,
  from: String,
  to: String,
  value: String,
  gas: String,
  gasPrice: String,
  isError: String,
  txreceipt_status: String,
  input: String,
  contractAddress: String,
  cumulativeGasUsed: String,
  gasUsed: String,
  confirmations: String,
  balance: String
});

const transactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = transactionModel;
