import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Tile,
  TileTwo,
  Title,
  SubTitle,
  Touchable,
  Icon,
} from './styles';

interface SupportProps {
  image: string;
  title: string;
  subtitle: string;
}

const Support = ({ image, title, subtitle }) => {
  return (
    <Container>
      <Tile>
        <Image source={image} />
      </Tile>
      <TileTwo>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </TileTwo>
      <Tile>
        <Touchable>
          <Icon name="chevron-right" size={24} />
        </Touchable>
      </Tile>
    </Container>
  );
};

export default Support;
