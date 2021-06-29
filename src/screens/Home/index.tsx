import React from "react";

import { Container, Header } from "./styles";
import Profile from "../../components/Profile";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Profile />
      </Header>
    </Container>
  );
};

export default Home;
