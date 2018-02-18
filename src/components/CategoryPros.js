import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StatusBar
} from 'react-native';
import { Actions,PARAMS } from 'react-native-router-flux';
import {
  Thumbnail,
  Button
} from "native-base"
import Icon from "react-native-vector-icons/Feather"

import TagList from './TagList';
import SearchBar from "./common/HeaderSearchBar"
import SubNavBar  from "./common/SubNavBar"
import Picker from "./common/Picker"
import Header from "./Header/index"

import cstyles from "./common/style"

export default class CategoryProsScreen extends React.Component {
	state = {
	  language : "java"
  }
  _onPressFilter = () => {
    const newFilterState = !this.state.filterToggle;
    this.setState({filterToggle:newFilterState})
  }
  _onPressSort = () => {
  	const newSortState = !this.state.sortToggle;
    this.setState({sortToggle:newSortState})
  }
	render(){
		return (
			<View style={{ backgroundColor:'white',flex:1}}>
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
                <View style={cstyles.iconNotification} />
                <Icon name="bell" size={30} />
              </View>
            </Button>
          </View>
        </Header>
        <SubNavBar >
          <Picker filled={true} />
          <Picker />
        </SubNavBar>

				<ScrollView>
					<Text style={styles.title}>Our Pros.</Text>
					<View style={{ flex: 1, marginTop:10}}>
            <TagList />
          </View>
				</ScrollView>
			</View>
			);
	}
}

const styles = {
	title:{
		fontWeight:'bold',
		fontSize:22,
		color:'#935CAE',
		marginTop:27,
		marginLeft:16,
		backgroundColor:'white',
		width:147,
		height:26,
	},
};
