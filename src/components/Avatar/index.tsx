import React from "react";

import { Container } from "./styles";
import Background from "../Background";
import { theme } from "../../global/styles/theme";

const Avatar: React.FC = () => {
  return (
    <Background colors={[theme.colors.secondary30, theme.colors.secondary50]}>
      <Container />
    </Background>
  );
};

export default Avatar;
