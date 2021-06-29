import React from "react";
import ButtonIcon from "../../components/ButtonIcon";

import {
  Container,
  Illustration,
  Content,
  Title,
  SubTitle,
  Status,
} from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Status />
      <Illustration />
      <Content>
        <Title>
          Conecte-se {"\n"} e organize {"\n"} suas jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
        </SubTitle>
        <ButtonIcon title="Entrar com Discord" />
      </Content>
    </Container>
  );
};

export default SignIn;
