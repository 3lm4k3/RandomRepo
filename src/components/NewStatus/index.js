import React from "react"

import {
  View,
  StyleSheet,
  Dimensions,
  Text
} from "react-native"
import {
  Thumbnail,
  Input,
  Button,
  Item
} from "native-base"
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import Icon from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import Divider from "../common/Divider"

import cstyles from "../common/style"

const { row, spaceBetween, center } = cstyles

export default () => (
  <View style={styles.container}>
    <View style={[row, { padding: 15 }]}>
    <Thumbnail source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'}} />   
            <AutoGrowingTextInput
                style={styles.textInput}
                placeholder={"What's in your mind?"}
                placeholderTextColor='#66737C'
                maxHeight={200}
                minHeight={50}
                enableScrollToCaret
                underlineColorAndroid="transparent"
              />
        
    </View>   
    <Divider color="#D0D1D2"/> 
    <View style={[row, spaceBetween, { paddingHorizontal: 35, paddingVertical: 10}]} >
      <Button transparent style={ [center, styles.postOptions, row] } >
        <Icon name="image" size={25} color="#935CAE" />
        <Text style={{marginHorizontal: 10}}>Photo</Text>
      </Button>
      <Button transparent style={ [center, styles.postOptions, row] }>
        <Icon name="video" size={25} color="#5871B5" />
        <Text style={{marginHorizontal: 10}}>Video</Text>
      </Button>
      <Button transparent style={ [center, styles.postOptions, row] }>
        <FontAwesome name="dollar" size={25} color="#B334C4" />
        <Text style={{marginHorizontal: 10}}>Selling</Text>
      </Button>
    </View>
  </View>
)


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    width: Dimensions.get("window").width, 
    marginVertical: 25
  },
  postOptions: {
    backgroundColor: '#fff', 
    borderRadius: 23, 
    flex:1, 
    marginRight: 15,
    height: 50
  },
  textInput: {
    paddingLeft: 10,
    fontSize: 17,
    flex: 1,
    borderWidth: 0,
  },
})
