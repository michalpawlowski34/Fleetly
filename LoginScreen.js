import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { TextInput, TouchableOpacity,} from 'react-native-gesture-handler';
import {loginStyles} from './styles'
import IconFontisto from 'react-native-vector-icons/Fontisto'
import MyButton from './MyButton';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFocused:false,
      passwordFocused:false,
    };
    this.handleFocus=this.handleFocus.bind(this)
    this.handleLogin=this.handleLogin.bind(this)
    this.handleForgot=this.handleForgot.bind(this)
    this.handleSignup=this.handleSignup.bind(this)
  }
  handleFocus(type){
    switch(type){
      case 'login': this.setState({loginFocused:!this.state.loginFocused}) 
        break
      case "password": this.setState({passwordFocused:!this.state.passwordFocused})
        break
    }
  }
  handleLogin(){
    //backend
    this.props.navigation.navigate('TabScreen')
  }
  handleForgot(){
    alert('forgot')
  }
  handleSignup(){
    alert('signup')
  }
  render() {
      return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
          <KeyboardAvoidingView behavior={"padding"} style={{flex:1, backgroundColor:'white'}}>
          <View style={loginStyles.logoView}>
            <Image source={require('./images/loginphoto_napis.png')} style={{width:'100%', height:'100%'}} />
          </View>
          <View style={loginStyles.underLogoView}>
              <View style={[loginStyles.textInputsView,{borderBottomColor:this.state.loginFocused? "red":"lightgrey"}]}>
                <IconFontisto name="email" size={16} color={this.state.loginFocused? "red":"grey"} style={loginStyles.inputIcons}/>
                <TextInput style={loginStyles.textInputs} autoCorrect={false} onFocus={()=>this.handleFocus('login')} onBlur={()=>this.handleFocus('login')}/>
              </View>
              <View style={[loginStyles.textInputsView, {borderBottomColor:this.state.passwordFocused? "red":"lightgrey"}]}>
                <IconFontisto name="locked" size={15} color={this.state.passwordFocused? "red":"grey"} style={loginStyles.inputIcons}/>
                <TextInput style={loginStyles.textInputs} secureTextEntry={true} onFocus={()=>this.handleFocus('password')} onBlur={()=>this.handleFocus('password')}></TextInput>
              </View>
              <Text style={loginStyles.forgotPasswordText} onPress={this.handleForgot}>Forgot password?</Text>
              <View style={loginStyles.loginButtonView}>
                <MyButton func={this.handleLogin} title="LOGIN" style={loginStyles.loginButton}></MyButton>
              </View>
              <View style={{marginTop:30,flexDirection:"row",alignContent:"center",justifyContent:"center"}}>
              <Text style={loginStyles.signUp}>Don't have an account? </Text>
              <Text style={[loginStyles.signUp,{color:'red',textDecorationLine:"underline"}]} onPress={this.handleSignup}>Signup here</Text>
              </View>
          </View>
        </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      );
  }
}