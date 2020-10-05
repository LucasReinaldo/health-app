import React from 'react';

import {
  AnimatedContainer,
  Tile,
  Title,
  Month,
  TileTwo,
  Background,
  TileThree,
  Icon,
} from './styles';

interface ScrollGraphProps {
  animation: string;
  bgColor: string;
  title: string;
  month: string;
  image: any;
}

const ScrollGraphs = ({
  animation,
  bgColor,
  title,
  month,
  image,
}: ScrollGraphProps) => {
  return (
    <AnimatedContainer
      animation={animation}
      duration={1200}
      style={{ backgroundColor: bgColor }}>
      <Tile>
        <Title>{title}</Title>
        <Month>{month}</Month>
      </Tile>
      <TileTwo>
        <Background source={image} />
      </TileTwo>
      <TileThree>
        <Icon name="info" size={26} />
      </TileThree>
    </AnimatedContainer>
  );
};

export default ScrollGraphs;
