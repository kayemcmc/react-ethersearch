const express = require("express");
const router = express.Router();
const transactionController = require("./controllers/transaction");

router.get("/transactions", transactionController.displayTransactions);
router.post(
  "/transactions/fetchapi",
  transactionController.fetchAddressTransaction
);
router.get("/transactions/:hash", transactionController.displayTransaction);

module.exports = router;
