import { FETCH_ALL_DATABASE_TRANSACTIONS } from "./constants";

export function fetchDatabaseTransactions() {
  return async function(dispatch) {
    const res = await fetch("/api/address/transactions");
    const transactions = await res.json();
    return dispatch({
      type: FETCH_ALL_DATABASE_TRANSACTIONS,
      payload: transactions
    });
  };
}

//fetching transactions from ether address enteres
