import {combineReducers} from "redux";
import {reducer as userReducer} from "./user/redux";
import {reducer as appReducer} from "./app/redux";

const rootReducer = combineReducers({
    user : userReducer,
    app : appReducer,
})

export default rootReducer;