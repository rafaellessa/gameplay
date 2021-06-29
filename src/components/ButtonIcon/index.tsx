import React from "react";

import { ButtonImage, Container, Content, Label } from "./styles";

interface IButton {
  title: string;
}

const ButtonIcon: React.FC<IButton> = ({ title }) => {
  return (
    <Container>
      <Content>
        <ButtonImage />
      </Content>
      <Label>{title}</Label>
    </Container>
  );
};

export default ButtonIcon;
