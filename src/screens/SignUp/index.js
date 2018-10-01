import React, { Component } from 'react';
import { Toolbar, TabContentNavigator, StatusBar, View, ScrollView, Alert} from 'react-native';
import { Container,Header,Footer, FooterTab, Content, Button, Item, Input, H3, Text } from "native-base";
import t from 'tcomb-form-native';
import styles from './styles';
import config from '../../../config/config.js';

const Form = t.form.Form;
var Gender = t.enums({
    M: '남성',
    F: '여성'
});

var Email = t.refinement(t.String, function(s){
  return /@/.test(s);
});
var Password = t.refinement(t.String, function(s){
  return s.length >= 8;
});
var Name = t.refinement(t.String, function(s){
  return s.length >= 1;
});
var Birthdate = t.refinement(t.String, function(s){
  return s.length === 8 && /^[0-9]*$/.test(s);
});
function samePasswords(x){
  if(x.password === x.confirmPassword)
    console.log('비밀번호 같음');
  return x.password === x.confirmPassword;
}

function isValidBirthDate(dateStr){
  if(!/^[0-9]*$/.test(dateStr) || dateStr.length>8){
    return false;
  }
  var yearStr = dateStr.substring(0,4);
  var monthStr = dateStr.substring(4,6);
  var dayStr = dateStr.substring(6,8);
  var year = parseInt(yearStr);
  var month = parseInt(monthStr);
  var day = parseInt(dayStr);
  var today = new Date();
  if((month<1||month>12)
  ||(day<1||day>31)
  ||((month==4||month==6||month==9||month==11) &&day==31)
  ||(month==2&&(day>29||(day==29&&!(year%4==0&&(year%100!=0||year%400==0)))))){
    return false;
  }else{
    var birth = new Date(yearStr+'-'+monthStr+'-'+dayStr);
    var minBirth = new Date('1900-01-01');
    console.log(birth);
    console.log(today);
    if(+birth>=today || +birth<minBirth){
      return false;
    }else{
      return true;
    }
  }
}

var User = t.subtype(t.struct({
    email: Email,
    password: Password,
    confirmPassword : Password,
    surname: Name,
    name: Name,
    birthdate: Birthdate,
    gender: Gender,
}), samePasswords);
type Props = {};
var defaultOptions = {
    fields:{
        email:{
            label:'이메일',
            placeholder: 'abc@gmail.com',
            error:'잘못된 이메일입니다.',
            autoFocus:true,
            required:true,
        },
        password:{
            label:'비밀번호',
            placeholder: '8자 이상의 비밀번호를 입력해주세요.',
            error:'잘못된 비밀번호입니다.',
            password:true,
            secureTextEntry:true,
            required:true,
        },
        confirmPassword:{
          label:'비밀번호 확인',
          placeholder: '비밀번호를 한번 더 입력해주세요.',
          error:'잘못된 비밀번호입니다.',
          password:true,
          secureTextEntry:true,
          required:true,
        },
        surname:{
            label:'성',
            placeholder: 'Hong',
            required:true,
        },
        name:{
            label:'이름',
            placeholder: 'GilDong',
            required:true,
        },
        birthdate:{
            label:'생년월일',
            placeholder: 'YYYYMMDD',
            error:'잘못된 생년월일입니다.',
            required:true,
        },
        gender:{
          label:'성별',
          factory: t.form.Radio,
          required:true,
        }
    }

};

export default class SignUp extends Component {
	constructor(props, context) {
      super(props, context);
      this.state = this.getInitialState();
    }
    static navigationOptions = {
      title: 'SignUp',
    };

  getInitialState(){
    return {
      value:{
      },
      options:defaultOptions
    };
  };
  async onSubmit(evt){
    evt.preventDefault();
    var success = {flag:false, msg:''};
    var email = {flag:false, msg:''};
    var password = {flag:false, msg:''};
    var confirmPassword = {flag:false, msg:''};
    var name = {flag:false, msg:''};
    var surname = {flag:false, msg:''};
    var gender = {flag:false, msg:''};
    var birthdate = {flag:false, msg:''};
    const {navigate} = this.props.navigation;

    if (typeof this.state.value.email === 'undefined'){
      email.flag = true;
      email.msg = '잘못된 이메일입니다.';
    }
    else{
      if (!(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(this.state.value.email)))
      {
        email.flag = true;
        email.msg = '잘못된 이메일입니다.';
      }
    }
    if (typeof this.state.value.password === 'undefined'){
        password.flag = true;
        password.msg = '잘못된 비밀번호입니다.';
    }
    else{
      if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(this.state.value.password))
      {
        password.flag = true;
        password.msg = '잘못된 비밀번호입니다.';
      }
    }
    if (typeof this.state.value.confirmPassword === 'undefined'){
      confirmPassword.flag = true;
      confirmPassword.msg = '잘못된 비밀번호입니다.';
    }
    else{
      if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/.test(this.state.value.confirmPassword))
      {
        confirmPassword.flag = true;
        confirmPassword.msg = '잘못된 비밀번호입니다.';
      }
    }
    if (password.flag==0 && password.flag == 0 && !samePasswords(this.state.value))
    {
      confirmPassword.flag = true;
      confirmPassword.msg = '비밀번호가 일치하지 않습니다.';
    }

    if (typeof this.state.value.name === 'undefined'){
      name.flag = true;
      name.msg = '이름을 입력해주세요.';
    }
    else{
      if((this.state.value.name).length < 1){
        name.flag = true;
        name.msg = '올바른 이름을 입력해주세요.';
      }
    }
    if (typeof this.state.value.surname === 'undefined'){
      surname.flag = true;
      surname.msg = '성을 입력해주세요.';
    }
    else{
      if((this.state.value.surname).length < 1){
        surname.flag = true;
        surname.msg = '올바른 성을 입력해주세요.';
      }
    }
    if (typeof this.state.value.gender === 'undefined'){
      gender.flag = true;
      gender.msg = '성별을 선택해주세요.';
    }
    else{

    }
    if (typeof this.state.value.birthdate === 'undefined'){
      birthdate.flag = true;
      birthdate.msg = '생년월일을 입력해주세요.';
    }
    else{
      if(!isValidBirthDate(this.state.value.birthdate)){
        birthdate.flag = true;
        birthdate.msg = '8자의 올바른 생년월일을 입력해주세요.';
      }
    }


    var options = t.update(this.state.options, {
      fields: {
        email:{
          error:{
            $set:email.msg
          },
          hasError:{
            $set:email.flag
          }
        },
        password:{
          error:{
            $set:password.msg
          },
          hasError:{
            $set:password.flag
          }
        },
        confirmPassword:{
          error:{
            $set:confirmPassword.msg
          },
          hasError:{
            $set:confirmPassword.flag
          }
        },
        name:{
          error:{
            $set:name.msg
          },
          hasError:{
            $set:name.flag
          }
        },
        surname:{
          error:{
            $set:surname.msg
          },
          hasError:{
            $set:surname.flag
          }
        },
        gender:{
          error:{
            $set:gender.msg
          },
          hasError:{
            $set:gender.flag
          }
        },
        birthdate:{
          error:{
            $set:birthdate.msg
          },
          hasError:{
            $set:birthdate.flag
          }
        }
      }
    });
    this.setState({options: options});
    if(!email.flag && !password.flag && !confirmPassword.flag && !name.flag && !surname.flag && !gender.flag &&!birthdate.flag)
    {
        var bodyData = {
          email:this.state.value.email,
          password:this.state.value.password,
          name:this.state.value.name,
          surname:this.state.value.surname,
          gender:this.state.value.gender,
          birthdate:this.state.value.birthdate,
        }

        var post_addr='http://'+config.SERVER_ADDRESS+':'+config.SERVER_PORT+'/signup';
        var data = {
          method: 'POST',
          credentials: 'same-origin',
          mode: 'same-origin',
          headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData)
        };
        try{
          let response = await fetch(post_addr, data);
          let responseJson = await response.json();
          console.log(responseJson.success);
          if(responseJson.success == 1)
          {
            Alert.alert('회원가입 성공');
            this.props.navigation.navigate('Login');
          }
          else if(responseJson.success == 0){
            Alert.alert('이미 가입한 회원입니다.');
          }
          else{
            Alert.alert('회원가입 실패');
          }
        }catch(error){
          Alert.alert('회원가입 실패');
          console.error(error);
        }

    }
  };
  onChange(value){
    var options = t.update(this.state.options, {
      fields: {
       confirmPassword:{
         error:{$set:'비밀번호가 일치하지 않습니다.'},
         hasError:{$set:true},
       }
     }
    });
    this.setState({value:value});
    //console.log(value);
  };
  async requestPost(router, obj){
    var server_addr='http://'+SERVER_ADDRESS+':'+SERVER_PORT+'/'+router;
    var data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    };
    try{
      let response = await fetch(server_addr, data);
      let responseJson = await response.json();
      console.log(responseJson.success);
      return responseJson;
    }catch(error){
      console.error(error);
      return 0;
    }

  };

  render() {
    return (
      <Container>
      <Header style={{backgroundColor: '#166CBC'}}>
      </Header>
      <View style = {styles.container}>


            <ScrollView style={
              {
                width:'100%'
              }}>
                <View style={{
                  flex:1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop:20}}>
                      <Form
                          ref="form"
                          type={User}
                          options={this.state.options}
                          value ={this.state.value}
                          onChange={this.onChange.bind(this)}

                      />
                </View>
            </ScrollView>

            <View style={{width:'90%'}}>
            </View>
        </View>
        <Footer>
          <FooterTab>
            <Button
            style = {styles.button}
            underlayColor='#99d9f4'
            onPress = {this.onSubmit.bind(this)}
            >
              <Text style={styles.buttonText}>회원가입</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  };
}
