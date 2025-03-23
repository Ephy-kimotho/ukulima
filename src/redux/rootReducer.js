import { combineReducers } from "redux";
import { producerReducer } from "./products/productReducer";

const rootReducer = combineReducers({
  products: producerReducer,
});

export default rootReducer;
