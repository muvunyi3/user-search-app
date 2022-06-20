export const SET_USER = "userInfoActionTypes/SET_USER";
export interface SetUserInfoAction {
  type: typeof SET_USER;
  login: string;
  id: string;
  name: string;
  avatar_url: string;
}

export const GET_USER = "userInfoActionTypes/GET_USER";
export interface GetUserInfoAction {
  type: typeof GET_USER;
  username: string;
}

export const GET_USER_REQUEST = "userInfoActionTypes/GET_USER_REQUEST";
export interface GetUserInfoRequestAction {
  type: typeof GET_USER_REQUEST;
}

export const GET_USER_SUCCESS = "userInfoActionTypes/GET_USER_SUCCESS";
export interface GetUserInfoSuccessAction {
  type: typeof GET_USER_SUCCESS;
  login: string;
  id: string;
  name: string;
  avatar_url: string;
}

export const GET_USER_FAILURE = "userInfoActionTypes/GET_USER_FAILURE";
export interface GetUserInfoFailureAction {
  type: typeof GET_USER_FAILURE;
  error: Error | string;
}

export type UserInfoAction =
  | SetUserInfoAction
  | GetUserInfoAction
  | GetUserInfoRequestAction
  | GetUserInfoSuccessAction
  | GetUserInfoFailureAction;
