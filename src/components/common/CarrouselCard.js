import React from "react"

import {
  View, 
  Image, 
  Text,
  StyleSheet
} from 'react-native';
// import { BoxShadow } from 'react-native-shadow'



export default (props) => {
  return (
    <View style={ styles.container } >
    {/* <BoxShadow setting={shadowOpt}> */}
        {/* <View style={{width:100,height:100}}/> */}
    {/* </BoxShadow> */}
      <View style={ [styles.imgWrapper, { backgroundColor: props.color }] } >
        {/* <Image source={} /> */}
      </View>
      <View style={ styles.meta } >
        <Text style={ styles.metaText } >{ props.title }</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  imgWrapper: {
    height: 100,
    width: 125

  },
  meta: {
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    paddingVertical: 16
  },
  metaText: {
    color: "#8A8A8F",
    fontWeight: "bold"
  }
})

const shadowOpt = {
  width:100,
  height:100,
  color:"#000",
  border:2,
  radius:3,
  opacity:0.8,
  x:0,
  y:5,
  style:{marginVertical:5}
}