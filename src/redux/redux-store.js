import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { post } from "./post-reducer";
import { masters } from "./master-reducer";
import thunk from "redux-thunk";


let redusers = combineReducers(
    {
        card: post,
        master: masters
    }
)

let store = createStore(redusers, applyMiddleware(thunk))

export default store