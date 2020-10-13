import {combineReducers} from "redux";
import {reducer as appReducer} from "./app/redux";

const rootReducer = combineReducers({
    app : appReducer,
})

export default rootReducer;