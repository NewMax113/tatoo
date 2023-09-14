import { combineReducers, legacy_createStore as createStore } from "redux";
import { post } from "./post-reducer";
import { masters } from "./master-reducer";


let redusers = combineReducers(
    {
        card: post,
        master: masters
    }
)

let store = createStore(redusers)

export default store