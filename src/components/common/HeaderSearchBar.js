import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing
} from "react-native"
import { 
  Input
} from "native-base"
import Icon from "react-native-vector-icons/Feather"

export default (props) => (
  <View style={[ styles.container, { backgroundColor: props.color }]} >
    <Animated.View style={[styles.wrapper, {width: animatedWidth}]}>
      <Icon name="search" size={25} style={styles.icon} />
      <Input onFocus={handleFocus} onBlur={handleBlur} placeholder="Search" onChangeText={props.onChangeText} style={ styles.input } />
    </Animated.View>
  </View>
)

let animatedWidth = new Animated.Value(100)

const handleFocus = () => {
  Animated.timing(animatedWidth, {
    toValue: 250,
    duration: 1000,
    easing: Easing.bounce
  }).start()
}

const handleBlur = () => {
  Animated.timing(animatedWidth, {
    toValue: 100,
    duration: 1000,
    easing: Easing.bounce
  }).start()
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 23,
    height: 40,
    marginTop: 5,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    
  },
  wrapper: {
    flexDirection: "row",
    height: 45,
  },
  input: {
    textAlign: "left",
    marginLeft: 35,
    marginTop: -3,
  },  
  icon: {
    left: 10,
    top: 10,
    position: "absolute",
  }
})