import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonImage, Container, ButtonContainer, Label } from "./styles";

interface IButton extends TouchableOpacityProps {
  title: string;
}

const ButtonIcon: React.FC<IButton> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonContainer>
        <ButtonImage />
      </ButtonContainer>
      <Label>{title}</Label>
    </Container>
  );
};

export default ButtonIcon;
