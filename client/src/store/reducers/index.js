import { combineReducers } from "redux";
import addressReducer from "./address";
import searchReducer from "./search";

export default combineReducers({
  address: addressReducer,
  transactions: searchReducer
});
