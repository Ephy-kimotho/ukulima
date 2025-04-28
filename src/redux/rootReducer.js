import { combineReducers } from "redux";
import { producerReducer } from "./products/productReducer";
import { cartReducer } from "./cart/cartReducer";
import { categoriesReducer } from "./categories/cartegoriesReducer";
import { orderReducer } from "./orders/orderReducer";
import { summaryReducer } from "./adminSummary/summaryReducer";

// Combine all the reducers into a single root reducer
const rootReducer = combineReducers({
  products: producerReducer,
  shoppingCart: cartReducer,
  categories: categoriesReducer,
  orders: orderReducer,
  adminSummary: summaryReducer,
});

export default rootReducer;
