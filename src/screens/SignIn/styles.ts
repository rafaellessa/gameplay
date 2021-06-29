import styled from "styled-components/native";
import IllustrationImg from "../../assets/illustration.png";
import { theme } from "../../global/styles/theme";

export const Container = styled.SafeAreaView`
  flex: 1;
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
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${theme.fonts.title700};
  line-height: 40px;
`;
export const SubTitle = styled.Text`
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`;
