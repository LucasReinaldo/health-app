import React from 'react';
import { ScrollView } from 'react-native';

import ScrollGraphs from '../../components/ScrollGraphs';
import Support from '../../components/Support';

import {
  Container,
  Header,
  Title,
  Memos,
  SupportContainer,
  SupportText,
  SupportAnimatedView,
} from './styles';

const Mission: React.FC = () => {
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: '100%', height: '120%' }}
        style={{ flex: 1 }}>
        <Header>
          <Title>My Mission</Title>
        </Header>
        <Memos>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ width: '200%' }}>
            <ScrollGraphs
              animation="bounceInLeft"
              bgColor="#b7a8c4"
              title="Game of Chess"
              month="Sep - Nov"
              image={require('../../../assets/graphthree.png')}
            />
            <ScrollGraphs
              animation="bounceInLeft"
              bgColor="#54a06a"
              title="100km Jogging"
              month="Sep - Nov"
              image={require('../../../assets/graphthree.png')}
            />
            <ScrollGraphs
              animation="bounceInLeft"
              bgColor="#FFBE86"
              title="Game of Chess"
              month="Sep - Nov"
              image={require('../../../assets/graphtwo.png')}
            />
            <ScrollGraphs
              animation="bounceInLeft"
              bgColor="#fa3c24"
              title="Game of Chess"
              month="Sep - Nov"
              image={require('../../../assets/graphtwo.png')}
            />
          </ScrollView>
        </Memos>
        <SupportContainer>
          <SupportText>Support</SupportText>
          <SupportAnimatedView
            animation="fadeInLeft"
            duration={1500}
            style={{
              shadowOffset: { width: 100, height: 100 },
              shadowColor: 'rgba(138, 149, 158, 0.2)',
              shadowOpacity: 1,
              elevation: 30,
              backgroundColor: '#FFFFFF',
            }}>
            <Support
              image={require('../../../assets/exercise.png')}
              title="Daily Exercise"
              subtitle="Difficulty on insensible"
            />
          </SupportAnimatedView>
          <SupportAnimatedView
            animation="fadeInLeft"
            duration={1500}
            style={{
              shadowOffset: { width: 100, height: 100 },
              shadowColor: 'rgba(138, 149, 158, 0.2)',
              shadowOpacity: 1,
              elevation: 30,
              backgroundColor: '#FFFFFF',
            }}>
            <Support
              image={require('../../../assets/cricket.png')}
              title="Sports and Yoga"
              subtitle="Services securing health ..."
            />
          </SupportAnimatedView>
          <SupportAnimatedView
            animation="fadeInLeft"
            duration={1500}
            style={{
              shadowOffset: { width: 100, height: 100 },
              shadowColor: 'rgba(138, 149, 158, 0.2)',
              shadowOpacity: 1,
              elevation: 30,
              backgroundColor: '#FFFFFF',
            }}>
            <Support
              image={require('../../../assets/cricket.png')}
              title="Sports and Yoga"
              subtitle="Services securing health ..."
            />
          </SupportAnimatedView>
        </SupportContainer>
      </ScrollView>
    </Container>
  );
};

export default Mission;
