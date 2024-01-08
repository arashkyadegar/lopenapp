import { combineReducers } from "redux";

import commentsReducer from "./comments";
import productReducer from "./product";
import productFormReducer from "./productForm";
import userReducer from "./user";
import selectedProductReducer from "./selectedProduct";
import factorReducer from "./factor";

export default combineReducers({
  product: productReducer,
  productForm: productFormReducer,
  factor: factorReducer,
  selectedProduct: selectedProductReducer
});
