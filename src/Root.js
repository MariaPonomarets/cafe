import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { ThemeProvider } from 'styled-components';

import NavigationService from 'src/navigationService';

import theme from './theme';

import Auth from 'screens/Auth';

const navTypes = {
  AUTH: 'auth',
};

const ScreenStack = createStackNavigator({
  [navTypes.AUTH]: {
    screen: Auth,
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