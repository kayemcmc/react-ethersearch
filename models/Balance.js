const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

//SCHEMA
const BalanceSchema = new Schema({
  address: {
    type: String,
    unique: true
  },
  balance: String
});

//Creating model
const balanceModel = mongoose.model("balance", BalanceSchema);

//Exporting the model
module.exports = balanceModel;
