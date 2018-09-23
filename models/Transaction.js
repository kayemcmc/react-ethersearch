const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

//SCHEMA
const TransactionSchema = new Schema({
  blockNumber: String,
  timeStamp: String,
  hash: { type: String, sparse: true },
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
  confirmations: String
});

const Transaction = mongoose.model("transaction", TransactionSchema);

module.exports = Transaction;
