import React from "react"

import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native"
import ParallaxScrollView from 'react-native-parallax-scroll-view';


export default class BidPage extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <ParallaxScrollView
          backgroundColor="blue"
          contentBackgroundColor="pink"
          parallaxHeaderHeight={300}
          renderForeground={() => (
           <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "red"}}>
              <Text>Hello World!</Text>
            </View>
          )}
          renderBackground={() => (
            <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "red"}}>
              <Image source={require("../../assets/images/unfinished-villa.jpg")}/>
            </View>
          )}>
          <View style={{ height: 500, backgroundColor: "green" }}>
            <Text>Scroll me</Text>
            
          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})