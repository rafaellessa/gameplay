import styled from "styled-components/native";
import IllustrationImg from "../../assets/illustration.png";
import { theme } from "../../global/styles/theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.background}
  justify-content: center;
  align-items: center;
`;

export const Status = styled.StatusBar.attrs({
  barStyle: "light-content",
  backgroundColor: "transparent",
  translucent: true,
})``;

export const Illustration = styled.Image.attrs({
  source: IllustrationImg,
  resizeMode: "stretch",
})`
  width: 100%;
  height: 360px;
`;

export const Content = styled.View`
  margin-top: -40px;
  padding-horizontal: 50px;
`;

export const Title = styled.Text`
  color: ${theme.colors.reading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;
export const SubTitle = styled.Text`
  color: ${theme.colors.reading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
`;
