import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Tile = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const TileTwo = styled.View`
  flex: 5;
  margin: 14px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #2e2e2e;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  color: #bec4c9;
`;

export const Touchable = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  color: #2e2e2e;
`;
