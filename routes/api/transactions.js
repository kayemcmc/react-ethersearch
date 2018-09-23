const express = require("express");
const router = express.Router();
const axios = require("axios");

//load transaction model
const Transaction = require("../../models/Transaction");
//api key
const API_KEY = require("../../config/keys").etherscanAPI;

router.get("/test", (req, res) =>
  res.json({ msg: "Transaction is is bizzness" })
);

router.get("/transactions", (req, res) =>
  Transaction.find({}, function(err, trx) {
    let trxMap = {};
    trx.forEach(function(trx) {
      trxMap[trx._id] = trx;
    });

    res.send(trxMap);
  })
);

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const url = `http://api.etherscan.io/api?module=account&action=txlist&address=${id}&startblock=0&endblock=99999999&sort=asc&apikey=${API_KEY}`;
  axios.get(url).then(response => {
    result = response.data.result;
    //console.log(result);
    result.forEach(transaction => {
      var transactions = new Transaction({
        blockNumber: transaction.blockNumber,
        timeStamp: transaction.timeStamp,
        hash: transaction.hash,
        nonce: transaction.nonce,
        blockHash: transaction.blockHash,
        transactionIndex: transaction.transactionIndex,
        from: transaction.from,
        to: transaction.to,
        value: transaction.value,
        gas: transaction.gas,
        gasPrice: transaction.gasPrice,
        isError: transaction.isError,
        txreceipt_status: transaction.txreceipt_status,
        input: transaction.input,
        contractAddress: transaction.contractAddress,
        cumulativeGasUsed: transaction.cumulativeGasUsed,
        gasUsed: transaction.gasUsed,
        confirmations: transaction.confirmations
      });
      transactions.save().catch(error => console.log(error));
    });
    res.status(200).send(response.data);
    return response.data.result;
  });
});

module.exports = router;
