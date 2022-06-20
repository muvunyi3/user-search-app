import { connect } from "react-redux";
import { Dispatch } from "redux";

import { setUserInfo } from "../../actionCreators/userInfoActionCreators";
import { UserInfoAction } from "../../actionTypes/userInfoActionTypes";
import { getUserInfo } from "../../actionCreators/userInfoActionCreators";
import SearchComponent from "./SearchComponent";

const mapDispatchToProps = (dispatch: Dispatch<UserInfoAction>) => ({
  onSearch: (username: string) => {
    dispatch(getUserInfo(username));
  },
  onClear: () => {
    dispatch(setUserInfo("","","",""));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SearchComponent);
