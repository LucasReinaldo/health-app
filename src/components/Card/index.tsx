import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  AnimatedCard,
  Touchable,
  BoxOne,
  Image,
  BoxTwo,
  Title,
  Description,
  BoxThree,
  CompletedText,
  SubContainer,
} from './styles';

interface CardProps {
  animation: string;
  title: string;
  description: string;
  completed: string;
  icon: string;
  screenChange?: () => void;
}

const Card = ({
  animation,
  icon,
  title,
  description,
  completed,
  screenChange,
}: CardProps) => {
  return (
    <AnimatedCard animation={animation} duration={1500}>
      <Touchable onPress={screenChange}>
        <BoxOne>
          <Icon name={icon} size={32} />
        </BoxOne>
      </Touchable>
      <BoxTwo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </BoxTwo>
      <BoxThree>
        <SubContainer>
          <CompletedText>{completed}</CompletedText>
        </SubContainer>
      </BoxThree>
    </AnimatedCard>
  );
};

export default Card;
