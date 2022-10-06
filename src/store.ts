import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ReducerRoot from "./reducer/ReducerRoot";

const Store = createStore(ReducerRoot, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof ReducerRoot>

export default Store