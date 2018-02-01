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
  StatusBar,
  View
} from 'react-native';
// a library specialy customized over the react-native-swiper library for swiping
import Infoslider from 'react-native-infoslider';
// swiping library
import Swiper from 'react-native-swiper';
//allow tab navigation option
import { TabNavigator } from "react-navigation";
//first Login Screen
import FirstScreen from "./src/Sign up";
//second Login Screen
import TakeTourScreen from "./src/Take a Tour login and signup";
//allows buttons based navigation
import { StackNavigator } from 'react-navigation';

import AfterSignupScreen from "./src/AfterSignup";

//get the width and height of the device
const { width, height } = Dimensions.get('window')
// Stack navigation controller 
const BasicApp = StackNavigator({
  //name of the screen in the navigation controller: {screen : imported js screen file name}
  TakeTour: {screen: TakeTourScreen},
  SecondLoginScreen: {screen: FirstScreen},
  AfterSignupScreen: {screen: AfterSignupScreen},
});
// Tapbar navigation controller
var MainScreenNavigator = TabNavigator({
  //name of the screen in the navigation controller: {screen : imported js screen file name}
  Login: {screen: TakeTourScreen},
  SecondLoginScreen: {screen: FirstScreen}
},{
  // Tab bar styling
  // Custioize tabBarPosition for different styles as in android/ios
  tabBarPosition: 'bottom',
  // Allow Swiping
  swipeEnabled: true,

  
  tabBarOptions: {

    showIcon: true,

    activeLabelStyle: true,
    activeTintColor: '#FF33FF',
    activeBackgroundColor: '#FFFF00',
    style: {
    backgroundColor: 'blue',
    },
    inactiveTintColor: '#FFA233',
    inActiveBackgroundColor: '#E4E4E4',
    labelStyle: {
      fontSize: 16,
      padding:0
    }
  },
}
);

// Function for running the tab bar navigation option
MainScreenNavigator.navigationOptions = {
  title: "Tab example"
};

// using the stack navigation option
AppRegistry.registerComponent('mawkaaTest', () => BasicApp);
