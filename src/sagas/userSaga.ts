import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchUser } from "../services/userServices";
import * as actionCreators from "../actionCreators/userInfoActionCreators";
import * as actionTypes from "../actionTypes/userInfoActionTypes";

function* onGetUserInfo({ username}: actionTypes.GetUserInfoAction) {
  try {
    yield put(actionCreators.getUserInfoRequest());
    const { data } = yield call(fetchUser, username);
    yield put(actionCreators.getUserInfoSuccess(data.login, data.id, data.name, data.avatar_url));
  } catch (error) {
    //yield put(actionCreators.getLyricsFailure(error.response.data.error));
    yield put(actionCreators.getUserInfoFailure("error"));
  }
}

function* watchOnGetUserInfo() {
  yield takeEvery(actionTypes.GET_USER, onGetUserInfo);
}

export default function* userInfoSaga() {
  yield all([fork(watchOnGetUserInfo)]);
}
