import styled from 'styled-components/native';
import * as Animated from 'react-native-animatable';
import { height, width } from '../../global.styles';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex: 1;
  left: ${width / 20}px;
  top: ${height / 9}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  letter-spacing: -0.5px;
  font-weight: 600;
  color: #2e2e2e;
`;

export const Memos = styled.View`
  height: ${height / 3}px;
  position: absolute;
  top: ${height / 6}px;
  width: 100%;
  margin-left: 8px;
`;

export const SupportContainer = styled.View`
  left: ${width / 20}px;
  flex: 1;
  top: -${height / 15}px;
`;

export const SupportText = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #2e2e2e;
  letter-spacing: -0.5px;
`;

const AnimatedView = styled.View`
  height: ${height / 16}px;
  width: 90%;
  border-radius: 8px;
  margin-top: 10px;
`;

export const SupportAnimatedView = Animated.createAnimatableComponent(
  AnimatedView,
);
