import { combineReducers } from "redux";

import commentsReducer from "./comments";
import postsReducer from "./posts";
import userReducer from "./user";
import selectedProductReducer from "./selectedProduct";
import factorReducer from "./factor";

export default combineReducers({
 // posts: postsReducer,
  //comments: commentsReducer,
  factor: factorReducer,
  selectedProduct: selectedProductReducer
});
