import { combineReducers } from "redux";

import productReducer from "./product";
import discountReducer from "./discount";
import productFormReducer from "./productForm";
import discountFormReducer from "./discountForm";
import siteInfoFormReducer from "./siteInfoForm";
import faqFormReducer from "./faqForm";
import factorReducer from "./factor";
import factorFormReducer from "./factorForm";
import faqsReducer from "./faqs";
import userReducer from "./user";

export default combineReducers({
  siteInfoForm: siteInfoFormReducer,
  product: productReducer,
  discount: discountReducer,
  productForm: productFormReducer,
  discountForm: discountFormReducer,
  factor: factorReducer,
  factorForm: factorFormReducer,
  faqs: faqsReducer,
  faqForm: faqFormReducer,
  user: userReducer,
});
