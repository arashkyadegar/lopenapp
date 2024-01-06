import { combineReducers } from "redux";

import commentsReducer from "./comments";
import productReducer from "./product";
import userReducer from "./user";
import selectedProductReducer from "./selectedProduct";
import factorReducer from "./factor";

export default combineReducers({
  product: productReducer,
  //comments: commentsReducer,
  factor: factorReducer,
  selectedProduct: selectedProductReducer
});
