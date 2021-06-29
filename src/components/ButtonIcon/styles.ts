import styled from "styled-components/native";
import DiscordImg from "../../assets/discord.png";
import { theme } from "../../global/styles/theme";

export const Container = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  height: 56px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
`;
export const Label = styled.Text`
  flex: 1;
  color: ${theme.colors.reading};
  font-size: 15px;
  text-align: center;
`;
export const ButtonImage = styled.Image.attrs({
  source: DiscordImg,
})`
  width: 24px;
  height: 18px;
`;
export const ButtonContainer = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: ${theme.colors.line};
`;
