import styled from 'styled-components/native';
import { BACKGROUND_COLOR, height, width } from '../../global.styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${BACKGROUND_COLOR};
`;

export const ContainerTop = styled.View`
  flex: 1.5;
`;

export const BoxOne = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: 600;
  letter-spacing: -1px;
  margin-top: 4px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const BoxTwo = styled.View`
  flex: 0.8;
  margin: 0 32px;
`;

export const Background = styled.ImageBackground`
  width: ${width}px;
  height: ${height}px;
  flex: 1;
`;

export const BoxThree = styled.View`
  flex: 2.5;
`;

export const BoxFour = styled.View`
  flex: 0.5;
  color: #fff;
  flex-direction: row;
`;

export const ContainerDown = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
`;

export const Line = styled.View`
  width: ${width / 7}px;
  height: 4px;
  background-color: #f4f0f0;
  border-radius: 2px;
  margin: 20px auto;
`;

export const Progress = styled.View`
  left: ${width / 12}px;
`;

export const ProgressText = styled.Text`
  font-size: 20px;
  color: #2d2d2d;
  letter-spacing: -0.5px;
`;

export const Cards = styled.View`
  flex: 1;
  margin: 10px 30px 0;
`;
