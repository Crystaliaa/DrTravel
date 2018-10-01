//import React, { Component } from 'react';
//import { Toolbar, TabContentNavigator, StatusBar, View, Image } from 'react-native';
//import { Container, Content, Button, Item, Input, H3, Text } from "native-base";
//import { Field, reduxForm } from "redux-form";
//import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
//import { Icon } from 'react-native-elements'
import styles from './styles'
import where from '../WhereAcheView/'
import SettingsScreen from '../Setting/'
import Map from '../Map/'
//const background = require("../../../images/shadow.png");

import React from 'react';
import { Text, View } from 'react-native';
//import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { createBottomTabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

export default createBottomTabNavigator(
  {
    Home: { screen: where },
    Map: { screen: Map },
    Settings: { screen: SettingsScreen },
  },
  {
    //tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }
  }
);
