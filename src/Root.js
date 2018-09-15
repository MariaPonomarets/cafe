import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ThemeProvider } from 'styled-components';

import NavigationService from 'src/navigationService';

import theme from './theme';

import Auth from 'screens/Auth';
import Home from 'screens/Home';

export const navTypes = {
  AUTH: 'auth',
  HOME: 'home',
};

const ScreenStack = createStackNavigator({
  [navTypes.AUTH]: {
    screen: Auth,
  },
  [navTypes.HOME]: {
    screen: Home,
  },
}, {
  initialRouteName: navTypes.INDEX,
  navigationOptions: {
    header: null,
  },
});

const Root = () => (
  <ThemeProvider theme={theme}>
    <ScreenStack
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}/>
  </ThemeProvider>
);

export default Root;