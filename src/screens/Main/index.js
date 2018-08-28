import React, { Component } from 'react';
import { Toolbar, TabContentNavigator, StatusBar, View, Image } from 'react-native';
import { Container, Content, Button, Item, Input, H3, Text } from "native-base";
//import { Field, reduxForm } from "redux-form";
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements'
import styles from './styles'

const background = require("../../../images/shadow.png");

export default class HelloWorldApp extends Component {

	constructor(props, context) { 
      super(props, context); 
       
      this.state = { 
        active: 'Today', 
      }; 
    } 

  
 
    static navigationOptions = { 
      title: 'Menu', 
    }; 
  
 
    navigate() { 
      this.props.navigation.navigate('DrawerOpen'); // open drawer 
    } 

    tabs = [
    {
      key: 'games',
      icon: 'gamepad-variant',
      label: 'Games',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: 'movie',
      label: 'Movies & TV',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Music',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  renderIcon = ({ isActive }) => {
    return <View />
  }

 
  renderTab = ({ tab, isActive }) => {
  	return (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon}
    />
  )
}
 
  render() {
    return (
      <View style={{ flex: 1}}>
      <View style={{ flex: 1}}>
        </View>

        <BottomNavigation
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>

    )
  };
}