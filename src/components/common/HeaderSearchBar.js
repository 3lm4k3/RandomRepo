import React from 'react';
import {
  View,
  StyleSheet
} from "react-native"
import { 
  Input
} from "native-base"

export default (props) => (
  <View style={[ styles.container, { backgroundColor: props.color }]} >
    <Input placeholder="Search" onChangeText={props.onChangeText} style={ styles.input } />
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderRadius: 23,
    height: 40,
    marginTop: 5,
    width: 250,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: 250,
    textAlign: "center"
  }
})