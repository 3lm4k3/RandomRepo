import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Router, Scene, Lightbox } from "react-native-router-flux"

import ImageLightBox from "react-native-lightbox"
import Login from "./src/components/Login/index" // Login Component 
import NewsFeed from "./src/components/NewsFeed/index" // NewsFeed Component 
import Bids from "./src/components/Bids/index" // Bids Component 
import BidPage from "./src/components/BidPage/index" // BidPage Component 
import CreateBid from "./src/components/CreateBid/index" // NewsFeed Component 
import Calculator from "./src/components/Calculator/index" // Calculator Component 


export default class App extends React.Component {
  render() {
    return (
      // Router & Routes
      <Router>
        <Lightbox>
          <Scene key="root" hideNavBar> 
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="newsfeed" component={NewsFeed} title="NewsFeed"/>
            <Scene key="bids" initial component={Bids} title="Bids"/>
            <Scene key="bid" component={BidPage} title="Bid"/>
            <Scene key="createbid" component={CreateBid} title="Bid"/>
            <Scene key="calculator" component={Calculator} title="Calculator"/>
          </Scene>

          {/* Lightbox components will lay over the screen, allowing transparency*/}
          <Scene key="imageLightBox" component={ImageLightBox} />

        </Lightbox>
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

