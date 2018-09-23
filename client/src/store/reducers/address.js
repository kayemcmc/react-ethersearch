import { FETCH_TRANSACTIONS } from "../actions/constants";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return action.payload;
    default:
      return state;
  }
}
