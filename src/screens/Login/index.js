import React, { Component } from 'react';
import { Toolbar, TabContentNavigator, StatusBar, View, ImageBackground } from 'react-native';
import { Container, Content, Button, Item, Input, H3, Text } from "native-base";
import t from 'tcomb-form-native';
import styles from './styles'

const bg = require('./1.png')
const Form = t.form.Form;
const User = t.struct({
    email: t.String,
    password: t.String,
});
type Props = {};
var options = {};
export default class Login extends Component {

	constructor(props, context) {
      super(props, context);

      this.state = {
        active: 'Today',
      };
    }

    static navigationOptions = {
      title: 'Login',
    };

    onPress(){
        var value = this.refs.form.getValue();
        if(value){
            console.log(value);
        }
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style = {styles.container}>
          <ImageBackground source={bg}
                           style = {styles.bg}>
          <View style={styles.logo}></View>
          <View style={{width:'80%', height:'25%', marginVertical:'5%', flex:0}}>
          <Form
              ref="form"
              type={User}
              value = {this.state.value}
              options={options}
          />
          </View>
          <View style={styles.buttonContainer}>
              <View style={{width:'30%', marginHorizontal:'5%'}}>
              <Button
              style = {styles.button}
              underlayColor='#99d9f4'
              onPress={this.onPress.bind(this)}
              ><Text>로그인</Text></Button>
              </View>
              <View style={{width:'30%', marginHorizontal:'5%'}}>
              <Button
              style = {styles.button}
              onPress={()=>navigate('SignUp', {name:'Jane'})}
              underlayColor='#99d9f4'
              >
                <Text>회원가입</Text>
              </Button>
              </View>
          </View>
          </ImageBackground>
        </View>

    )
  };
}
