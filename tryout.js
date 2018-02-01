/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions,
  View
} from 'react-native';
import Infoslider from 'react-native-infoslider';
import Swiper from 'react-native-swiper';


export default class mawkaaTest extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data:[
          {
          title:"Hello World", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/1.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/2.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/3.jpg')},
          {
          title:"Lorem Ipsum", 
          text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard",
          image: require('./images/4.jpg')},
          
      ]
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
      <Image 
      style={styles.upperBackgroundImage}
      source={require('./images/purpleBackground.png')}>
          <View style={styles.sliderContainer}>
            <Swiper style={styles.wrapper}
              paginationStyle={{
              bottom: 70
              }}
             showsButtons={false}>
              <View style={styles.slide1}>
                <Image style={styles.image} source={require('./images/1.jpg')} />
                

              </View>
              <View style={styles.slide2}>
              <Image style={styles.image} source={require('./images/1.jpg')} />
                
              </View>
              <View style={styles.slide3}>
              <Image style={styles.image} source={require('./images/1.jpg')} />
                
              </View>
            </Swiper>
          </View>
        </Image>
        <TouchableHighlight
          style={styles.LoginButton}
          underlayColor='#fff'>
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.LoginButton}
          underlayColor='#fff'>
          <Text style={styles.LoginButtonText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: 'white',
    
  },
  upperBackgroundImage:{
    height:500

  },
  image: {
    flex:1,

    
  },
  LoginButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#68a0cf',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width:300,
    justifyContent: 'center',
    alignItems: 'center',

  },
  LoginButtonText:{
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  sliderContainer:{
    height: 500,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40
  },
  wrapper: {
    backgroundColor: 'white',

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9932CC',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9932CC',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9932CC',
  },
  text: {
    flex:1,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

AppRegistry.registerComponent('mawkaaTest', () => mawkaaTest);
