import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from './src/screens/Home/Home';

const Project = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: {backgroundColor: 'white', shadowColor: 'transparent'},
    transitionConfig: () => ({
      cardStyle: {
        backgroundColor: 'white',
      },
    }),
  },
  {transparentCard: true},
);
export default createAppContainer(Project);
