import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import ReducerRoot from "./reducer/reducerRoot";

const Store = createStore(ReducerRoot, composeWithDevTools(applyMiddleware(thunk)));

export type RootStore = ReturnType<typeof ReducerRoot>

export default Store