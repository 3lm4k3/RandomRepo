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
import ProfilesScreen from "./src/Profiles";
import CategoryProsScreen from './src/CategoryPros';
import VisitedProfileProjectsScreen from './src/VisitedProfileProjects';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import { Actions,Router,Stack,Scene } from 'react-native-router-flux';

//get the width and height of the device
const { width, height } = Dimensions.get('window')

const App = () => (
  <Provider store={createStore(reducers)}>
              <Router>
    <Stack key="root" hideNavBar>
      <Scene key="login" component={TakeTourScreen} title="TakeTourScreen"/>
      <Scene key="register" component={FirstScreen} title="New Account"/>
      <Scene key="home" component={AfterSignupScreen} title="AfterSignupScreen"/>
      <Scene key="profiles" component={ProfilesScreen} title="Profiles"/>
      <Scene key="VisitedProfileProjects" component={VisitedProfileProjectsScreen} title="VisitedProfileProjects"/>
      <Scene key="CategoryProsScreen" component={CategoryProsScreen} title="CategoryProsScreen"/>
    </Stack>
  </Router>
            </Provider>
);
// Stack navigation controller 
const BasicApp = StackNavigator({
  //name of the screen in the navigation controller: {screen : imported js screen file name}
  TakeTour: {screen: TakeTourScreen},
  SecondLoginScreen: {screen: TakeTourScreen},
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
AppRegistry.registerComponent('mawkaaTest', () => App);
