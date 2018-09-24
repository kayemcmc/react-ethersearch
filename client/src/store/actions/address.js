import axios from "axios";
import { FETCH_TRANSACTIONS } from "./constants";

// export function fetchTransactions(id) {
//   return async function(dispatch) {
//     const res = await fetch(`/api/address/${id}`);
//     return dispatch({
//       type: FETCH_TRANSACTIONS,
//       payload: {
//         id,
//         ...res
//       }
//     });
//   };
// }

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
// export const fetchApi = id => async dispatch => {
//   const res = await axios.get(
//     `http://api.etherscan.io/api?module=account&action=txlist&address=${id}&startblock=0&endblock=99999999&sort=asc&apikey=AH56YE6FZWX7QHMR6JFV3FGHCNWCXCVKCV`
//   );
//   dispatch({
//     type: FETCH_TRANSACTIONS,
//     payload: {
//       id,
//       ...res.data
//     }
//   });
// };
