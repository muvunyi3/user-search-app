import { connect } from "react-redux";

import { AppState } from "../../reducers/rootReducer";
import * as actionTypes from "../../actionTypes/userInfoActionTypes";
import UserInfoComponent from "./UserInfoComponent";

const mapStateToProps = (state: AppState) => {
  return {
    // name: state.user.name,
    // userInfo: state.user.login,
    // userId: state.user.id,
    // avatar: state.user.avatar_url,
    userData: state.user,
    isLoading: state.isLoading[actionTypes.GET_USER],
    error: state.error[actionTypes.GET_USER]
  };
};

export default connect(
  mapStateToProps,
  null
)(UserInfoComponent);
