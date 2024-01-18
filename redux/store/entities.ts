import { combineReducers } from "redux";

import productReducer from "./product";
import discountReducer from "./discount";
import productFormReducer from "./productForm";
import discountFormReducer from "./discountForm";
import faqFormReducer from "./faqForm";
import factorReducer from "./factor";
import faqsReducer from "./faqs";
import userReducer from "./user";

export default combineReducers({
  product: productReducer,
  discount: discountReducer,
  productForm: productFormReducer,
  discountForm: discountFormReducer,
  factor: factorReducer,
  faqs: faqsReducer,
  faqForm: faqFormReducer,
  user: userReducer,
});
