import React from 'react';
import { createStackNavigator } from 'react-navigation';
import FoodList from './FoodList';
import FoodInput from './FoodInput';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: FoodList,
    FoodInput,
  },
  {
    initialRouteName: 'Home',
  }
);