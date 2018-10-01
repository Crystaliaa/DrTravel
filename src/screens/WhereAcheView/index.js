import React, { Component } from 'react';
import { Toolbar, TabContentNavigator, StatusBar, View, Image } from 'react-native';
import { Container, Header, Left, Right, Title, Content, Body, Button, Item, Input, H3, Text } from "native-base";
//import { Field, reduxForm } from "redux-form";
//import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
//import { Icon } from 'react-native-elements'
import styles from './styles'

export default class Where extends Component {

	constructor(props, context) { 
      super(props, context); 
       
      this.state = { 
        active: 'Today', 
      }; 
    }
    static navigationOptions = { 
      title: 'Where', 
    }; 

  render() {
    return (
      <Container>
      <View style={{ flex: 1}}>
      <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

      <Content padder>

      <Text>Where</Text>

      <Button
        style={styles.btn}
        onPress={() => this.props.navigation.navigate("Questions")}
      >
      <Text>Where?</Text>
      </Button>

      
      </Content>
      </View>
      </Container>

    )
  };
}