const Balance = require("../models/Balance");
const Transaction = require("../models/Transaction");
const fetch = require("node-fetch");
const port = process.env.PORT || 5000;

//api key
const API_KEY = require("../config/keys").etherscanAPI;

function saveTransactions(txns) {
  for (txn of txns) {
    var newTxn = new Transaction(txn);
    newTxn.save(function(err, result) {
      if (err) {
        console.log(err);
      }
    });
  }
}

//fetch transactions from etherscan by address
function fetchAddressTransaction(req, res) {
  var etherAdress = req.body.addr;
  var transactionAddr = `http://api.etherscan.io/api?module=account&action=txlist&address=${etherAdress}&endblock=99999999&sort=asc&apikey=${API_KEY}`;
  var balanceAddr = `https://api.etherscan.io/api?module=account&action=balance&address=${etherAdress}&tag=latest&apikey=${API_KEY}`;
  fetch(transactionAddr)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json["result"];
    })
    .then(function(txns) {
      saveTransactions(txns);
      return txns;
    })
    .then(function(txns) {
      var newBalance = new Balance();
      fetch(balanceAddr)
        .then(function(response) {
          return response.json();
        })
        .then(function(balanceResponse) {
          newBalance["address"] = etherAdress;
          newBalance["balance"] = balanceResponse["result"];
          newBalance.save(function(err, result) {
            if (err) {
              console.error(err);
            }
          });
        });
      // res.redirect("/transactions");
    });
}

//Display transactions from address
function displayTransactions(req, res) {
  Transaction.find({}, (err, transactions) => {
    if (err) {
      res.status(404);
      res.send("Sorry no transactions were found!");
    }
    res.send({ transactions: transactions });
  });
}

//show individual transaction
function displayTransaction(req, res) {
  Transaction.findOne({ hash: req.params.hash }, (err, xn) => {
    if (err) {
      res.status(404);
      res.send("Sorry this transaction was not found!");
    }
    res.send({ xn: xn });
  });
}

module.exports = {
  fetchAddressTransaction: fetchAddressTransaction,
  displayTransactions: displayTransactions,
  displayTransaction: displayTransaction
};
