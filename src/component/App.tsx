import React, { FunctionComponent } from "react";

import UserInfo from "./user/UserInfoContainer";
import Search from "./search/SearchContainer";
import { Header, Container,  } from "semantic-ui-react";
import { type } from "os";

type UserData = {
  login: string;
  id: string;
  name: string;
  avatar_url: string;
}
const data = {} as UserData;
const App: FunctionComponent = props => {
  return (
    <Container text>
      <Header as="h3" textAlign="center">
        GitHub User Search
      </Header>
      <div>
        <Search />
        <UserInfo 
          isLoading={true}
          error=""
          userData={data}         />
      </div>
    </Container>
  );
}

export default App;
