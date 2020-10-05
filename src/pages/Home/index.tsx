import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Card from '../../components/Card';
import Day from '../../components/Day';

import {
  Container,
  ContainerTop,
  BoxOne,
  Title,
  Subtitle,
  BoxTwo,
  Background,
  BoxThree,
  BoxFour,
  ContainerDown,
  Line,
  Progress,
  ProgressText,
  Cards,
} from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const change = () => {
    navigate('Mission');
  };

  return (
    <Container>
      <ContainerTop>
        <BoxOne />
        <BoxTwo>
          <Title>Hi, Lucas Melo</Title>
          <Subtitle>Here is your health</Subtitle>
        </BoxTwo>
        <BoxThree>
          <Background source={require('../../../assets/graphone.png')} />
        </BoxThree>
        <BoxFour>
          <Day day="Sun" />
          <Day day="Mon" />
          <Day day="Tue" />
          <Day day="Wed" isActive={true} />
          <Day day="Thu" />
          <Day day="Fri" />
          <Day day="Sat" />
        </BoxFour>
      </ContainerTop>
      <ContainerDown>
        <Line />
        <Progress>
          <ProgressText>My Progress</ProgressText>
        </Progress>
        <Cards>
          <Card
            animation="bounceInLeft"
            title="Mission"
            description="85% Completed"
            icon="check-square"
            completed="85%"
            screenChange={() => change()}
          />
          <Card
            animation="bounceInLeft"
            title="Mission"
            description="80% Completed"
            icon="clipboard"
            completed="80%"
          />
          <Card
            animation="bounceInLeft"
            title="Mission"
            description="65% Completed"
            icon="clipboard"
            completed="65%"
          />
        </Cards>
      </ContainerDown>
    </Container>
  );
};

export default Home;
