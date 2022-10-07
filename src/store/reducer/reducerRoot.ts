import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import userReducer from "./user/userReducer";

const RootReducer = combineReducers({
    user: userReducer,
    product: productReducer
});

export default RootReducer