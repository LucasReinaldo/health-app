import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import { BACKGROUND_COLOR, width } from '../../global.styles';

const Card = styled.View`
  flex: 1;
  margin-bottom: 14px;
  flex-direction: row;
  display: flex;
`;

export const AnimatedCard = Animatable.createAnimatableComponent(Card);

export const Touchable = styled.TouchableOpacity`
  flex: 1;
`;

export const BoxOne = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  height: 72px;
  border-radius: 20px;
  background-color: #fa3c24;
  opacity: 0.6;
  width: 70%;
`;

export const BoxTwo = styled.View`
  height: 72px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #2d2d2d;
  letter-spacing: -0.9px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #bec4c9;
  letter-spacing: -0.5px;
  padding: 5px 0;
`;

export const BoxThree = styled.View`
  flex: 1;
`;

export const SubContainer = styled.View`
  width: 72px;
  height: 72px;
  border: 1px solid ${BACKGROUND_COLOR};
  border-radius: ${width / 2}px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const CompletedText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${BACKGROUND_COLOR};
`;
