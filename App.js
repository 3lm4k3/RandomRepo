import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Router, Scene } from "react-native-router-flux"

import Login from "./src/components/Login/index" // Login Component 
import NewsFeed from "./src/components/NewsFeed/index" // NewsFeed Component 
import Bids from "./src/components/Bids/index" // NewsFeed Component 



export default class App extends React.Component {
  render() {
    return (
      // Router & Routes
      <Router>
        <Scene key="root" hideNavBar> 
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="newsfeed" component={NewsFeed} title="NewsFeed"/>
          <Scene key="bids" initial component={Bids} title="Bids"/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

