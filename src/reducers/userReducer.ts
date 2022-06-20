import * as actions from "../actionTypes/userInfoActionTypes";

export interface UserInfoState {
  login: string;
  id: string;
  name: string;
  avatar_url: string;
}

const initialState: UserInfoState = {
  login: "",
  id: "",
  name:"",
  avatar_url:""

};

export default function userInfoReducer(
  state: UserInfoState = initialState,
  action: actions.UserInfoAction
): UserInfoState {
  switch (action.type) {
    case actions.SET_USER:
    case actions.GET_USER_SUCCESS:
      return {
        login: action.login,
        id: action.id,
        name: action.name,
        avatar_url: action.avatar_url
      };
    default:
      return state;
  }
}
