import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { HomeScreen } from './pages/HomeScreen/index';
import { ProfileScreen } from './pages/ProfileScreen/index';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
