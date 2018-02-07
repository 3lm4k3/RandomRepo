import React from "react"

import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView
} from "react-native"
import {
  Button,
  Thumbnail,
  Tab,
  Footer,
  FooterTab,
} from "native-base"
import Icon from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LineIcon from "react-native-vector-icons/SimpleLineIcons"

import Header from "../Header/index"
import SearchBar from "../common/HeaderSearchBar"
import DropdownSubNavBar from "../common/DropdownSubNavBar"
import Picker from "../common/Picker"
import Tabs from "../common/Tabs"
import Fab from "../common/Fab"
import Bid from "../Bid/index"

import AutoLoadList from "../common/AutoLoadList"

import cstyles from "../common/style.js"


export default class Bids extends React.Component {
  state = {

  }
  render() {
    return (
      <View style={cstyles.container} >
        <StatusBar
          backgroundColor="#F7F7F7"
          barStyle="dark-content"
        />
        <Header color="#F7F7F7" >
          <View style={cstyles.left} >
            <Button transparent onPress={() => Actions.login()}>
              <Thumbnail small source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />   
            </Button>         
          </View>
          <View style={cstyles.body} >
            <SearchBar color="#E8E9EA" onChangeText={(text) => this.setState({searchText: text})}  />
          </View>
          <View style={cstyles.right} >
            <Button transparent>
              <View style={cstyles.iconWrapper} >
                <View style={styles.circle} >
                  <Text style={styles.iconText} >!</Text>
                </View>
              </View>
            </Button>
          </View>
        </Header>
        <DropdownSubNavBar> 
          <Picker filled/>        
          <Picker/>
        </DropdownSubNavBar>
        <Tabs>
          <Tab heading="Bids">
            <AutoLoadList load={() => console.log("loaded")} >
              <Bid/>
              <Bid/>
              <Bid/>
              <Bid/>
              <Bid/>
              <Bid/>
              <Bid/>
            </AutoLoadList>
            <Fab/>            
          </Tab>
          <Tab heading="Ethad Molak">
            <ScrollView style={styles.bidsList} bounces>
              <Text>
                Ethad Molak
              </Text>
            </ScrollView>
          </Tab>
        </Tabs>
        <Footer style={cstyles.footer} >
          <FooterTab style={cstyles.footerTab}>
            <Button vertical>
              <FontAwesome name="newspaper-o" size={30} color="#484848" />
              <Text>Feeds</Text>
            </Button>
            <Button vertical>
              <Icon name="users" size={30} color="#484848" />
              <Text>Profiles</Text>
            </Button>
            <Button vertical>
              <LineIcon name="tag" size={30} color="#484848"  />
              <Text>Market</Text>
            </Button>
            <Button vertical>
              <Icon name="x" size={30} color="#484848" />              
              <Text>Bids</Text>
            </Button>
            <Button vertical>
              <Icon name="x" size={30} color="#484848" />              
              <Text>More</Text>
            </Button>
            </FooterTab>
        </Footer>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  circle: {
    height: 35,
    width: 35,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  iconText: {
    color: "#FE8080",
    fontWeight: "bold",
    fontSize: 24
  },
  bidsList: {
    marginVertical: 25,
  }
})