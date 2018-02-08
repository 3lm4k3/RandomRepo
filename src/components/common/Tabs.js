import React from "react"
import { StyleSheet, View, Dimensions,Text } from "react-native";
import {
  Tabs,
  Tab,
} from "native-base"

export default ({ children }) => (
      <View style={{flex: 1 }}>
        <Tabs initialPage={0} tabBarUnderlineStyle={styles.tabUnderline}>
            {
              React.Children.map(children, (child) => {
                return (
                    <Tab {...child.props } textStyle={styles.textStyle} tabStyle={styles.tabStyle}
                    activeTextStyle={styles.activeTextStyle} activeTabStyle={styles.activeTabStyle} />
                )
              })            
            }          
        </Tabs>

        <View style={styles.shadowEraser}/>

        <View style={styles.tabSeparator}/>
        
      </View>
    )

const styles = ({
  tabUnderline: {
    backgroundColor: "#FEE180",
    height: 3,
  },
  textStyle: {
    fontWeight:'normal',
    fontSize:20,
    color:'#FFFFFF',
    backgroundColor:'transparent',
  },
  activeTextStyle: {            
    fontWeight:'normal',
    fontSize:20,
    color:'#FFFFFF',
    backgroundColor:'transparent',   
  },
  tabStyle: {
    backgroundColor: "transparent",
  },
  activeTabStyle: {
    backgroundColor: "transparent",
  },
  shadowEraser: {
    backgroundColor: "transparent",
    height: 5,
    width: Dimensions.get("window").width,
    position: "absolute",
    top: 50
  },
  tabSeparator: {
    height: 30,
    width: 0.5,
    top: 10,
    backgroundColor: "white",
    position: "absolute",
    left: Dimensions.get("window").width / 2
  }
})