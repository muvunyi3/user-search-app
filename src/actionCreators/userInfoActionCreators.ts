import * as actions from "../actionTypes/userInfoActionTypes";

export function setUserInfo(login: string, id: string, name: string, avatar_url: string
    ): actions.SetUserInfoAction {
  return {
    type: actions.SET_USER,
    login,
    id,
    name,
    avatar_url,
  };
}

export function getUserInfo(
  username: string
): actions.GetUserInfoAction {
  return {
    type: actions.GET_USER,
    username
  };
}

export function getUserInfoRequest(): actions.GetUserInfoRequestAction {
  return {
    type: actions.GET_USER_REQUEST
  };
}

export function getUserInfoSuccess(
    login: string, id: string, name: string, avatar_url: string
): actions.GetUserInfoSuccessAction {
  return {
    type: actions.GET_USER_SUCCESS,    
    login,
    id,
    name,
    avatar_url,
  };
}

export function getUserInfoFailure(
  error: Error | string
): actions.GetUserInfoFailureAction {
  return {
    type: actions.GET_USER_FAILURE,
    error
  };
}
