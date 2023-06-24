import { combineReducers } from "redux";
import { createStore } from "redux";
import { authorizationReducer } from "./reducers/autorizationReducer";

let reducers = combineReducers({
    authorization: authorizationReducer
})

let store = createStore(reducers)

export default store