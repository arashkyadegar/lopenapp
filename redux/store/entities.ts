import { combineReducers } from "redux";

import commentsReducer from "./comments";
import productReducer from "./product";
import discountReducer from "./discount";
import productFormReducer from "./productForm";
import discountFormReducer from "./discountForm";
import userReducer from "./user";
import selectedProductReducer from "./selectedProduct";
import factorReducer from "./factor";

export default combineReducers({
  product: productReducer,
  discount: discountReducer,
  productForm: productFormReducer,
  discountForm: discountFormReducer,
  factor: factorReducer,
  selectedProduct: selectedProductReducer,
});
