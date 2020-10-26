import store from "./store";
import {bindActionCreators} from "redux";
import {Action as appAction} from "./app/redux";
import {Action as userAction} from "./user/redux";

const _dispatch = store && store.dispatch;

export const userCreators = bindActionCreators(userAction.Creators, _dispatch);
export const appCreators = bindActionCreators(appAction.Creators, _dispatch);
