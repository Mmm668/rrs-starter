import {all} from "@redux-saga/core/effects";
import appSaga from "./app/saga";

export default function*(){
    yield all([
        appSaga(),
    ])
}