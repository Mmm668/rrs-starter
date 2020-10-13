import store from "./store";
import {bindActionCreators} from "redux";
import {Action as appAction} from "./app/redux";

const _dispatch = store && store.dispatch;

export const appCreators = bindActionCreators(appAction.Creators, _dispatch);