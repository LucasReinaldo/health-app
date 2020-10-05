import styled from 'styled-components/native';
import * as Animated from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const Container = styled.View`
  margin: 8px;
  border-radius: 16px;
  flex: 1.2;
`;

export const AnimatedContainer = Animated.createAnimatableComponent(Container);

export const Tile = styled.View`
  flex: 0.5;
  padding: 12px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Month = styled.Text`
  font-size: 14px;
  color: #fff;
  margin: 6px 0;
`;

export const TileTwo = styled.View`
  flex: 1;
  margin: 12px 0;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const TileThree = styled.View`
  flex: 0.5;
  margin: 8px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Icon = styled(Feather)`
  color: #fff;
`;
