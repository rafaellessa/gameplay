import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
  flex-direction: row;
`;
export const Content = styled.View``;
export const User = styled.View`
  flex-direction: row;
`;
export const Greeting = styled.Text`
  font-family: ${theme.fonts.title500};
  color: ${theme.colors.heading};
  margin-right: 5px;
  font-size: 24px;
`;
export const UserName = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 24px;
`;
export const Message = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
`;
