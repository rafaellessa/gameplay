import React from "react";
import ButtonIcon from "../../components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Illustration,
  Content,
  Title,
  SubTitle,
  Status,
} from "./styles";

const SignIn: React.FC = () => {
  const navigate = useNavigation();

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
        <ButtonIcon
          onPress={() => {
            navigate.navigate("Home", {});
          }}
          title="Entrar com Discord"
          activeOpacity={0.7}
        />
      </Content>
    </Container>
  );
};

export default SignIn;
