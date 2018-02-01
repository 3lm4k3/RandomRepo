import React from 'react';
import {Text,Dimensions, View, 
  StyleSheet, Image,
  TouchableOpacity,
  TextInput,
  StatusBar,Picker,
  TouchableHighlight} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
const { width, height } = Dimensions.get('window')

export default class AfterSignupScreen extends React.Component {

	constructor(props) {
    super(props);
    //saving the checked button state for the terms & conditions to be true or false
    this.state = { language: "java" };
  }

	// customizing navigation page options :title
	static navigationOptions = {
		
		title:'Welcome',
	}


	render(){
		const { goBack } = this.props.navigation;

		return (

		<Provider store={createStore(reducers)}>


			//setting the whole view back ground image
	        <Image
	          source={require('../images/purpleBackground.png')}
	          style={styles.container}

	          
	        >
	        	<Header headerText="Tech Stack" />
	        	<Picker
				  selectedValue={this.state.language}
				  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
				  <Picker.Item label="Java" value="java" />
				  <Picker.Item label="JavaScript" value="js" />
				</Picker>



	        </Image>
        </Provider>
			);
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: undefined, 
    width: undefined,
    backgroundColor:'transparent',

    
  },

});