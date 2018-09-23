import { FETCH_ALL_DATABASE_TRANSACTIONS } from "../actions/constants";

const searchReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_ALL_DATABASE_TRANSACTIONS:
      return payload;
    default:
      return state;
  }
};

export default searchReducer;
