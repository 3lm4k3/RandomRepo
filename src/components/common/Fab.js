import React from "react"
import {
  View
} from "react-native"
import {
  Fab
} from "native-base"
import LinearGradient from "react-native-linear-gradient"
import Icon from "react-native-vector-icons/Feather"
import Ripple from "react-native-material-ripple"

export default () => (
  <Ripple style={{
    height: 75,
    width: 75,
    borderRadius: 50,
    position: "absolute",
    bottom: 50,
    right: 25,
    backgroundColor: "red",
    overflow: "hidden"
  }}>
    <LinearGradient colors={["#5871B5", "#935CAE"]} 
    style={{flex: 1, justifyContent: "center", alignItems: "center"}} >
      <Icon name="plus" size={30} color="#fff" />
    </LinearGradient> 
  </Ripple>
)