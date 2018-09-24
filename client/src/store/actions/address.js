import axios from "axios";
import { FETCH_TRANSACTIONS } from "./constants";

export const fetchTransactions = id => dispatch => {
  axios
    .get(`http://localhost:5000/api/address/${id}`)
    .then(res =>
      dispatch({
        type: FETCH_TRANSACTIONS,
        payload: res.data.result
      })
    )
    .catch(err => console.error(err));
};
