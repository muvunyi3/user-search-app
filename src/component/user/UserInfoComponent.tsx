import React, { FunctionComponent } from "react";
interface UserData {
  login: string;
  id: string;
  name: string;
  avatar_url: string;
}
interface Props {
 // userId: String ;
  // name: String ;
  // avatar: String ;
  // userInfo: String ;
  userData: UserData;
  isLoading: boolean;
  error: Error | string;
}

const UserInfoComponent: FunctionComponent<Props> = props => {
  const { userData, isLoading, error } = props;
  //const { userId, userInfo,name, avatar, userData, isLoading, error } = props;
  if (error) {
    console.log("error: ", error);
    return <div>{"error"}</div>;
  }

  if (isLoading) {
    return <div>{"Loading.."}</div>;
  }

  //return <div><div>{userInfo}</div><div>{name}</div></div>;
  return <div>
            <ul>
            <li>{userData.id}</li>
            <li>{userData.name}</li>
            <li>{userData.login}</li>
            <li>{userData.avatar_url}</li>
            <li><a href="{userData.avatar_url}"></a></li>
            </ul>
          </div>;
};

export default UserInfoComponent;
