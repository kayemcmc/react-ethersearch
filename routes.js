const express = require("express");
const router = express.Router();
const transactionController = require("./controllers/transaction");

//Shows all the documents available in the transactions collection
router.get("/transactions", transactionController.showTransactions);
//Searches for a transaction in the database
router.get("/transactions/search", transactionController.searchTransactions);
//Fetches the list of transactions from the Etherscan API
router.post("/transactions/fetch", transactionController.fetchTransactions);
//Shows a single transaction from the underlying database
router.get("/transactions/:hash", transactionController.showSingleTransaction);
module.exports = router;
