import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

import Home from './pages/Home';
import Mission from './pages/Mission';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen
      name="Home"
      component={Home}
      options={{
        headerTransparent: true,
        title: '',
        headerLeft: () => (
          <Icon
            name="menu"
            size={24}
            color="#fff"
            style={{
              marginHorizontal: 20,
            }}
          />
        ),
        headerRight: () => (
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              marginHorizontal: 20,
            }}
          />
        ),
      }}
    />
    <App.Screen
      name="Mission"
      component={Mission}
      options={{
        headerTransparent: true,
        title: '',
        headerLeft: () => (
          <Icon
            name="menu"
            size={24}
            style={{
              marginHorizontal: 20,
            }}
          />
        ),
        headerRight: () => (
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              marginHorizontal: 20,
            }}
          />
        ),
      }}
    />
  </App.Navigator>
);

export default AppRoutes;
