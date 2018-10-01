import React, { Component } from 'react';
import { TabContentNavigator, StatusBar, View, Image } from 'react-native';
import { Container, Content, Button, Item, Input, H3, Text } from "native-base";

export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}