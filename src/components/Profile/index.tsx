import React from "react";

import {
  Container,
  Content,
  User,
  Greeting,
  UserName,
  Message,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <Container>
      <Content>
        <User>
          <Greeting>Olá</Greeting>
          <UserName>Rafael Lessa</UserName>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </Content>
    </Container>
  );
};

export default Profile;
