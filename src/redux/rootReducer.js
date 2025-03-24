import { combineReducers } from "redux";
import { producerReducer } from "./products/productReducer";
import { cartReducer } from "./cart/cartReducer";

const rootReducer = combineReducers({
  products: producerReducer,
  shoppingCart: cartReducer,
});

export default rootReducer;
