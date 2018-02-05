import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import { 
  Button,
  Form,
  Item,
  Input,
  Content,
  
} from "native-base"
import LinearGradient from 'react-native-linear-gradient'; // Linear background component
import { Actions } from 'react-native-router-flux';
// import CheckBox from 'react-native-checkbox'; // checkbox component
import Icon from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import CheckBox from './CheckBox'; // checkbox component
import Header from "../Header/index"  // Header Component

import styles from "./style"  // Component Styles
import cstyles from "../common/style"


export default class Login extends React.Component {
  state = {
    checkBox: false,
    secureEntry: true,
    passwordText: ""
  }
  componentDidMount() {
    this.window = Dimensions.get("window")
    
  }
  render() {
    const { state } = this
    return (
        <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.linearGradient}>
          <StatusBar
            backgroundColor="#5871B5"
            barStyle="light-content"
          />
          <Header />
          <Content>
            <View style={styles.loginOptions}>
                <Button onPress={() => {}} style={styles.loginOption}>
                    <Text style={styles.loginOptionText}>Connect with </Text>
                    <FontAwesome name="facebook-official" color={"#26559A"} style={cstyles.Icon}/>
                    <Text style={styles.loginOptionText} > Facebook</Text>  
                  </Button>
                  <Button onPress={() => {}} style={styles.loginOption}>
                    <Text style={styles.loginOptionText}>Connect with</Text>
                    <Text style={[styles.loginOptionText, cstyles.black]} > Linked </Text>  
                    <FontAwesome name="linkedin-square" color={"#006699"} style={cstyles.Icon}/>           
                  </Button>
                  <Button onPress={() => {}} style={styles.loginOption}>
                    <Text style={styles.loginOptionText}>Connect with</Text>
                    <Image source={ require("../../assets/images/google.png") } style={cstyles.buttonImage} />
                  </Button>
              </View>
              <Divider/>
              <Form style={styles.loginForm}>
                <Item last style={cstyles.inputWrapper} >
                  <Input placeholder="E-mail" placeholderTextColor={"#fff"} keyboardType={"email-address"}
                   style={cstyles.white} onChangeText={({text}) => {}} />
                </Item>
                <Item last style={cstyles.inputWrapper} >
                  <Input placeholder="Password" secureTextEntry={state.secureEntry} style={cstyles.white}
                   placeholderTextColor={"#fff"} onChangeText={(text) => this.setState({passwordText: text})}  />
                  {
                    Boolean(state.passwordText) &&
                    <Button transparent onPress={() => this.setState({ secureEntry: !state.secureEntry})} >
                      {
                        state.secureEntry ? 
                        <Icon name="eye-off" size={25} color="#fff" style={cstyles.inputIcon} /> :
                        <Icon name="eye" size={25} color="#fff" style={cstyles.inputIcon} />

                      }
                    </Button>
                  }
                </Item>
              </Form>
              <View style={styles.controller}>
                <View style={{paddingVertical: 10}}>
                <CheckBox
                    label=' Remember me'
                    labelStyle={cstyles.white}
                    color="#fff"
                    checkboxStyle={ cstyles.checkbox }
                    checked={this.state.checkBox}
                    underlayColor = {"#8E5EAF"}
                    onChange={(checked) => this.setState({checkBox: !this.state.checkBox})}
                  />
                </View>
                <Button transparent><Text style={[cstyles.underlined, cstyles.white]}>Forgot my password</Text></Button>
              </View>
              <View style={styles.controller}>
                <Button transparent>
                <Text style={[cstyles.underlined, cstyles.white]}>I don't have an Account</Text>                
                </Button>
              </View>
              <Button style={styles.loginButton} onPress={() => Actions.newsfeed()}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Button>
          </Content>
        </LinearGradient>
    );
  }
}
