import { combineReducers } from "redux";

import productReducer from "./product";
import discountReducer from "./discount";
import productFormReducer from "./productForm";
import discountFormReducer from "./discountForm";
import siteInfoFormReducer from "./siteInfoForm";
import faqFormReducer from "./faqForm";
import factorItemsReducer from "./factorItems";
import factorFormReducer from "./factorForm";
import faqsReducer from "./faqs";
import productsReducer from "./products";
import factorsReducer from "./factors";
import discountsReducer from "./discounts";
import userReducer from "./user";

export default combineReducers({
  siteInfoForm: siteInfoFormReducer,
  product: productReducer,
  discount: discountReducer,
  products: productsReducer,
  factors: factorsReducer,
  discounts: discountsReducer,
  productForm: productFormReducer,
  discountForm: discountFormReducer,
  factorItems: factorItemsReducer,
  factorForm: factorFormReducer,
  faqs: faqsReducer,
  faqForm: faqFormReducer,
  user: userReducer,
});
