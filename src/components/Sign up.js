import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Divider } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import {
  Form,
  Item,
  Input
} from "native-base"
import CheckBox from 'react-native-checkbox'; // checkbox component

import Header from "./Header/index"

import cstyles from "./common/style"


export default class FirstScreen extends React.Component {

	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    this.state = { checked: false };
  }
	render(){
    //close active screen and move back
    const { state } = this
		return (
			//setting the whole view back ground image
        <LinearGradient colors={['#5871B5', '#935CAE']} style={styles.container} >
          <StatusBar
            backgroundColor="#5871B5"
            barStyle="light-content"
          />
          {/*
            I have an account login button
          */}
          <Header>
            <View style={cstyles.body}>
              <Text style={[cstyles.white, cstyles.headerText]}>New Account </Text>
            </View>
          </Header>
          <View style={{justifyContent: 'center',
            alignItems: 'center',}}> 

            <TouchableOpacity

              style={styles.accountLoginBtn}

              onPress={() => Actions.pop()}
            >
              <Text
                style={styles.accountLoginText}

              >I have an Account Log in</Text>
            </TouchableOpacity>
          </View>

        {/*
          setting the divider line color
        */}
          <Divider style={{ backgroundColor: 'grey'}} />


          <Text style={styles.connectWith}>Connect with...</Text>
        {/*
        social login buttons container view*/}
          <View style={styles.socialLogin}>

            <TouchableOpacity
              
              style={styles.loginOpt}
              onPress={() => Actions.pop()}
            > 
              {/*social media login icon*/}
              <Image
              style={styles.socialLoginImage}
              source={require('../assets/images/facebook.png')}
            
              />
            </TouchableOpacity>
            <TouchableOpacity
              
              style={styles.loginOpt}
              onPress={() => Actions.pop()}
            > 
              
              <Image
              style={styles.socialLoginImage}
              source={require('../assets/images/linkedin.png')}
            
              />
            </TouchableOpacity>

            <TouchableOpacity
              
              style={styles.loginOpt}
              onPress={() => Actions.pop()}
            > 
              
              <Image
              style={styles.socialLoginImage}
              source={require('../assets/images/googleg.png')}
            
              />
            </TouchableOpacity>


          </View>



          <Text
            style={styles.accountInfo}
          >Account Info.</Text>

        {/*Signing up user details view container*/}
        <Form style={styles.userDetailsSignUp}>

          <Item last style={cstyles.inputWrapper} >
            <Input placeholder="First Name" placeholderTextColor={"rgba(255,255,255,0.5)"}
                   style={cstyles.white} onChangeText={({text}) => {}} />
          </Item>

          <Item last style={cstyles.inputWrapper} >
            <Input placeholder="Last Name" placeholderTextColor={"rgba(255,255,255,0.5)"}
                   style={cstyles.white} onChangeText={({text}) => {}} />
          </Item>

          <Item last style={cstyles.inputWrapper} >
            <Input placeholder="E-mail" placeholderTextColor={"rgba(255,255,255,0.5)"} keyboardType={"email-address"}
                   style={cstyles.white} onChangeText={({text}) => {}} />
          </Item>

          <Item last style={cstyles.inputWrapper} >
            <Input placeholder="Password" secureTextEntry={state.secureEntry} style={cstyles.white}
                   placeholderTextColor={"rgba(255,255,255,0.5)"} onChangeText={(text) => this.setState({passwordText: text})}  />
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


        {/*terms and conditions view container
        */}
          <View
            style={styles.termsNConditionsStyle}

            >


            {/*getting the checking state from the constructor state */}
            <CheckBox
              label=' I Agree on terms & conditions '
              labelStyle={cstyles.white}
              color="#fff"
              checkboxStyle={ cstyles.checkbox }
              checked={this.state.checkBox}
              checkedImage={require("../assets/images/checkbox_checked.png")}
              uncheckedImage={require("../assets/images/checkbox_unchecked.png")}
              underlayColor = {"#8E5EAF"}
              onChange={(checked) => this.setState({checkBox: !this.state.checkBox})}
            />
            <View style={{justifyContent: 'center', alignItems: 'center',}}>
              <TouchableOpacity
                style={styles.createNewAccountBtn}
                onPress={() => Actions.home()}
              >
                <Text style={styles.createAccountTxt}>Create a new Account</Text>
              </TouchableOpacity>
            </View>
          </View>
				 </LinearGradient>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: undefined, 
    width: undefined,
    backgroundColor:'transparent',

    
  },
  back:{
    marginLeft:20,
  },
  header:{
    marginTop:32,
    flexDirection:'row',
    
  },
  headerText:{
    fontWeight:"bold",
    fontSize:17,
    color:'white',
    marginLeft:75,
  },
  socialLogin: {
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  socialLoginImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  firstNameStyle:{
    marginBottom:10,
    marginTop:10,
    marginRight:10,
    marginLeft:10
  },
  lastNameStyle:{
    marginBottom:10,
    marginRight:10,
    marginLeft:10

  },
  userDetailsSignUp:{
    justifyContent: 'center',
    height:230,
  },
  termsNConditionsStyle:{
    flexDirection:'row',
  },
  accountLoginText:{
    fontWeight: 'bold',
    fontSize:16,
    color: 'white'
  },
  accountLoginBtn:{
    marginRight:17,
    marginLeft:16,
    marginTop:10,
    marginBottom:10,
    paddingTop:20,
    paddingBottom:20,
    borderRadius:300,
    borderWidth: 1,
    borderColor: '#fff',
    width:342,
    height:53.34,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectWith:{
    marginTop:10,
    marginLeft:16,
    fontWeight: 'bold',
    fontSize:12,
    color: 'white'
  },
  accountInfo:{
    marginTop:22.08,
    marginLeft:16,
    fontWeight: 'bold',
    fontSize:22,
    color: '#FCFE80'
  },
  loginOpt:{
    backgroundColor:'white',
    borderRadius: 23,
    width:90,
    height:39.4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  termsNConditionsStyle:{
    flexDirection:'row',
  },
  termsNConditionsStyleBtn:{
    marginTop:10,
    marginLeft:16,
  },
  createNewAccountBtn:{
    marginRight:17,
    marginLeft:16,
    marginTop:27,
    marginBottom:23.08,
    
    backgroundColor:'#FEE180',
    borderRadius:300,
    
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    
    width:342,
    height:53.34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountTxt:{
    color:'#935CAE',
    fontWeight: 'bold',
    fontSize:16,

  },
  termsNConditionsStyleTxt:{
    marginTop:10,
    marginLeft:16,


    fontWeight: 'normal',
    fontSize:12,
    color: 'white'
  },
  // rest of the styles
});


