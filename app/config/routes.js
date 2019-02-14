/* eslint-disable linebreak-style */
import { createStackNavigator } from 'react-navigation';

import Start from '../screens/Start';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Food from '../screens/Food';

import Recipe from '../screens/Recipe';

const LoginStack = createStackNavigator({
  Start: {
    screen: Start,
    navigationOptions: {
      header: () => null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: () => null,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
});

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Food: {
    screen: Food,
    navigationOptions: {
      header: () => null,
    },
  },
  Recipe: {
    screen: Recipe,
    navigationOptions: {
      header: () => null,
    },
  },
});

export default createStackNavigator({
  LoginStack: {
    screen: LoginStack,
    navigationOptions: {
      header: () => null,
    },
  },
  Home: {
    screen: HomeStack,
    navigationOptions: {
      header: () => null,
    },
  },
});
